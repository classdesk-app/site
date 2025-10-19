import { NextRequest, NextResponse } from 'next/server';

interface WaitlistFormData {
  fullName: string;
  collegeName: string;
  email: string;
  role: string;
}

interface BiginTokenResponse {
  access_token: string;
  expires_in: number;
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

const BIGIN_API_BASE = 'https://www.zohoapis.com/bigin/v2';
const BIGIN_ACCOUNTS_URL = 'https://accounts.zoho.com/oauth/v2/token';

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData: WaitlistFormData = await request.json();

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.collegeName || !formData.role) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.BIGIN_CLIENT_ID || !process.env.BIGIN_CLIENT_SECRET || !process.env.BIGIN_REFRESH_TOKEN) {
      console.error('Missing Bigin environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Get OAuth access token
    const accessToken = await getAccessToken();

    // Step 1: Find or create Account (College/University)
    const accountId = await findOrCreateAccount(formData.collegeName, accessToken);

    // Step 2: Split name into first and last
    const { firstName, lastName } = splitName(formData.fullName);

    // Step 3: Create Lead
    const leadResult = await createLead(
      {
        firstName,
        lastName,
        email: formData.email,
        role: formData.role,
        collegeName: formData.collegeName,
        accountId,
      },
      accessToken
    );

    // Step 4: Create Contact
    const contactResult = await createContact(
      {
        firstName,
        lastName,
        email: formData.email,
        role: formData.role,
        collegeName: formData.collegeName,
        accountId,
      },
      accessToken
    );

    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist and CRM',
      lead: leadResult,
      contact: contactResult,
    });
  } catch (error) {
    console.error('Error processing waitlist submission:', error);
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
async function getAccessToken(): Promise<string> {
  const params = new URLSearchParams({
    refresh_token: process.env.BIGIN_REFRESH_TOKEN!,
    client_id: process.env.BIGIN_CLIENT_ID!,
    client_secret: process.env.BIGIN_CLIENT_SECRET!,
    grant_type: 'refresh_token',
  });

  const response = await fetch(`${BIGIN_ACCOUNTS_URL}?${params.toString()}`, {
    method: 'POST',
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to get access token: ${response.statusText} - ${errorText}`);
  }

  const data: BiginTokenResponse = await response.json();
  return data.access_token;
}

/**
 * Find existing account or create new one
 */
async function findOrCreateAccount(collegeName: string, accessToken: string): Promise<string> {
  // Search for existing account
  const searchUrl = `${BIGIN_API_BASE}/Accounts/search?criteria=(Account_Name:equals:${encodeURIComponent(
    collegeName
  )})`;

  const searchResponse = await fetch(searchUrl, {
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
    },
  });

  if (searchResponse.ok) {
    const searchData: BiginSearchResponse = await searchResponse.json();
    if (searchData.data && searchData.data.length > 0) {
      return searchData.data[0].id;
    }
  }

  // Create new account if not found
  const createResponse = await fetch(`${BIGIN_API_BASE}/Accounts`, {
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
 * Create Lead in Bigin
 */
async function createLead(
  data: {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    collegeName: string;
    accountId: string;
  },
  accessToken: string
): Promise<any> {
  const response = await fetch(`${BIGIN_API_BASE}/Leads`, {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: [
        {
          First_Name: data.firstName,
          Last_Name: data.lastName,
          Email: data.email,
          Designation: data.role,
          Company: data.collegeName,
          Account_Name: {
            id: data.accountId,
          },
          Lead_Source: 'Website Waitlist',
          Description: `Waitlist signup - Role: ${data.role}, College: ${data.collegeName}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to create lead: ${response.statusText} - ${errorText}`);
  }

  return await response.json();
}

/**
 * Create Contact in Bigin
 */
async function createContact(
  data: {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    collegeName: string;
    accountId: string;
  },
  accessToken: string
): Promise<any> {
  const response = await fetch(`${BIGIN_API_BASE}/Contacts`, {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: [
        {
          First_Name: data.firstName,
          Last_Name: data.lastName,
          Email: data.email,
          Title: data.role,
          Account_Name: {
            id: data.accountId,
          },
          Contact_Source: 'Website Waitlist',
          Description: `Waitlist signup - Role: ${data.role}, College: ${data.collegeName}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
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

