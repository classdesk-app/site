import { NextRequest, NextResponse } from 'next/server';

interface WaitlistFormData {
  fullName: string;
  collegeName: string;
  email: string;
  phoneNumber?: string;
  role: string;
}

interface BiginTokenResponse {
  access_token: string;
  expires_in: number;
  api_domain: string;
  token_type: string;
}

interface BiginAccount {
  id: string;
  Account_Name: string;
}

interface BiginSearchResponse {
  data?: BiginAccount[];
  info?: {
    count: number;
  };
}

interface BiginCreateResponse {
  data: Array<{
    code: string;
    details: {
      id: string;
    };
    message: string;
    status: string;
  }>;
}

const BIGIN_ACCOUNTS_URL = 'https://accounts.zoho.in/oauth/v2/token';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Parse form data
    const formData: WaitlistFormData = body;
    console.log('Form data:', formData);

    // Check environment variables
    if (!process.env.BIGIN_CLIENT_ID || !process.env.BIGIN_CLIENT_SECRET) {
      console.log('Missing Bigin environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Get OAuth access token
    const tokenData = await getAccessToken();
    console.log('Access token:', tokenData.access_token);
    console.log('API Domain:', tokenData.api_domain);
    
    const BIGIN_API_BASE = `${tokenData.api_domain}/bigin/v2`;
    
    // Step 1: Find or create Account (College/University)
    const accountId = await findOrCreateAccount(formData.collegeName, tokenData.access_token, BIGIN_API_BASE);
    console.log('Account ID:', accountId);
    
    // Step 2: Split name into first and last
    const { firstName, lastName } = splitName(formData.fullName);

    // Step 3: Create Contact
    const contactResult = await createContact(
      {
        firstName,
        lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        role: formData.role,
        collegeName: formData.collegeName,
        accountId,
      },
      tokenData.access_token,
      BIGIN_API_BASE
    );

    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist',
      contact: contactResult,
    });
  } catch (error) {
    console.log('Error processing waitlist submission:', error);
    console.log('Error details:', error instanceof Error ? error.message : error);
    console.log('Stack trace:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      {
        error: 'Failed to process request',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * Get OAuth access token using refresh token
 */
async function getAccessToken(): Promise<BiginTokenResponse> {
  const params = new URLSearchParams({
    refresh_token: process.env.BIGIN_REFRESH_TOKEN!,
    client_id: process.env.BIGIN_CLIENT_ID!,
    client_secret: process.env.BIGIN_CLIENT_SECRET!,
    grant_type: 'refresh_token',
  });

  console.log('Requesting access token...');
  const response = await fetch(`${BIGIN_ACCOUNTS_URL}?${params.toString()}`, {
    method: 'POST',
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.log('Access token error response:', errorText);
    throw new Error(`Failed to get access token: ${response.statusText} - ${errorText}`);
  }

  const data: BiginTokenResponse = await response.json();
  console.log('Access token obtained successfully, expires in:', data.expires_in, 'seconds');
  return data;
}

/**
 * Find existing account or create new one
 */
async function findOrCreateAccount(collegeName: string, accessToken: string, apiBase: string): Promise<string> {
  // Search for existing account
  const searchUrl = `${apiBase}/Accounts/search?criteria=(Account_Name:equals:${encodeURIComponent(
    collegeName
  )})`;

  console.log('Searching for account at:', searchUrl);
  const searchResponse = await fetch(searchUrl, {
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
    },
  });

  if (searchResponse.ok && searchResponse.body) {
    const searchData: BiginSearchResponse = await searchResponse.json();
    if (searchData.data && searchData.data.length > 0) {
      return searchData.data[0].id;
    }
  }

  // Create new account if not found
  const createResponse = await fetch(`${apiBase}/Accounts`, {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: [
        {
          Account_Name: collegeName,
          Description: 'Created from waitlist form',
        },
      ],
    }),
  });

  if (!createResponse.ok) {
    const errorText = await createResponse.text();
    throw new Error(`Failed to create account: ${createResponse.statusText} - ${errorText}`);
  }

  const createData: BiginCreateResponse = await createResponse.json();

  if (createData.data[0].code === 'SUCCESS') {
    return createData.data[0].details.id;
  }

  throw new Error('Failed to create account in Bigin');
}

/**
 * Create Contact in Bigin
 */
async function createContact(
  data: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    role: string;
    collegeName: string;
    accountId: string;
  },
  accessToken: string,
  apiBase: string
): Promise<BiginCreateResponse> {
  const contactUrl = `${apiBase}/Contacts`;
  console.log('Creating contact at:', contactUrl);
  
  const contactData: {
    First_Name: string;
    Last_Name: string;
    Email: string;
    Phone?: string;
    Title: string;
    Account_Name: { id: string };
    Contact_Source: string;
    Description: string;
  } = {
    First_Name: data.firstName,
    Last_Name: data.lastName,
    Email: data.email,
    Title: data.role,
    Account_Name: {
      id: data.accountId,
    },
    Contact_Source: 'Website Waitlist',
    Description: `Waitlist signup - Role: ${data.role}, College: ${data.collegeName}`,
  };

  // Add phone number if provided
  if (data.phoneNumber) {
    contactData.Phone = data.phoneNumber;
  }
  
  const requestBody = {
    data: [contactData],
  };
  
  console.log('Contact request body:', JSON.stringify(requestBody, null, 2));
  
  const response = await fetch(contactUrl, {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.log('Contact creation failed. Status:', response.status, 'Response:', errorText);
    throw new Error(`Failed to create contact: ${response.statusText} - ${errorText}`);
  }

  return await response.json();
}

/**
 * Split full name into first and last name
 */
function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);

  if (parts.length === 1) {
    return { firstName: parts[0], lastName: parts[0] };
  }

  const firstName = parts[0];
  const lastName = parts.slice(1).join(' ');

  return { firstName, lastName };
}

