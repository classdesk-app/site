# Waitlist API Endpoint

This API endpoint handles waitlist form submissions and creates records in Bigin CRM.

## Endpoint

```
POST /api/waitlist
```

## Request Body

```json
{
  "fullName": "John Doe",
  "collegeName": "ABC University",
  "email": "john.doe@university.com",
  "role": "Administrator"
}
```

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `fullName` | string | Yes | User's full name (will be split into first/last) |
| `collegeName` | string | Yes | College or university name |
| `email` | string | Yes | Valid email address |
| `role` | string | Yes | One of: Administrator, Faculty, Staff, Other |

## Response

### Success (200)

```json
{
  "success": true,
  "message": "Successfully added to waitlist and CRM",
  "lead": {
    "data": [
      {
        "code": "SUCCESS",
        "details": {
          "id": "5725767000001234567"
        },
        "message": "record added",
        "status": "success"
      }
    ]
  },
  "contact": {
    "data": [
      {
        "code": "SUCCESS",
        "details": {
          "id": "5725767000007654321"
        },
        "message": "record added",
        "status": "success"
      }
    ]
  }
}
```

### Error (400)

```json
{
  "error": "Missing required fields"
}
```

### Error (500)

```json
{
  "error": "Failed to process request",
  "details": "Error message details"
}
```

## What It Does

1. **Validates** the request data
2. **Authenticates** with Bigin using OAuth refresh token
3. **Searches** for existing Account (College/University)
4. **Creates** Account if it doesn't exist
5. **Creates** Lead record linked to the Account
6. **Creates** Contact record linked to the Account

## Bigin CRM Records Created

### Account (Company)
- **Account_Name**: College/University name
- **Description**: "Created from waitlist form"

### Lead
- **First_Name**: From full name
- **Last_Name**: From full name
- **Email**: User email
- **Designation**: User role
- **Company**: College name
- **Account_Name**: Link to Account record
- **Lead_Source**: "Website Waitlist"
- **Description**: Additional context

### Contact
- **First_Name**: From full name
- **Last_Name**: From full name
- **Email**: User email
- **Title**: User role
- **Account_Name**: Link to Account record
- **Contact_Source**: "Website Waitlist"
- **Description**: Additional context

## Environment Variables Required

```env
BIGIN_CLIENT_ID=your_client_id
BIGIN_CLIENT_SECRET=your_client_secret
BIGIN_REFRESH_TOKEN=your_refresh_token
```

See [BIGIN_SETUP.md](../../../BIGIN_SETUP.md) for how to obtain these.

## Testing

### Local Testing

```bash
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "collegeName": "Test University",
    "email": "test@example.com",
    "role": "Administrator"
  }'
```

### Production Testing

```bash
curl -X POST https://your-site.vercel.app/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "collegeName": "Test University",
    "email": "test@example.com",
    "role": "Administrator"
  }'
```

## Error Handling

The endpoint handles various error scenarios:

- **Missing fields**: Returns 400 with error message
- **Missing env vars**: Returns 500 (logged to console)
- **OAuth failure**: Returns 500 with authentication error
- **Bigin API errors**: Returns 500 with details

All errors are logged to the console for debugging.

## Security

- ✅ OAuth credentials stored in environment variables (not in code)
- ✅ No sensitive data exposed to client
- ✅ Server-side only execution
- ✅ Input validation on all fields

## Rate Limiting

Consider implementing rate limiting for production use:

```typescript
// Example using Vercel's rate limiting
import { ratelimit } from '@vercel/edge';

// Limit to 10 requests per minute
const limiter = ratelimit({
  interval: '1m',
  limit: 10,
});
```

## Monitoring

View API logs in Vercel:
1. Go to your project dashboard
2. Click **Deployments** → Latest deployment
3. Click **Functions** tab
4. View real-time logs

## Need Help?

See the main documentation:
- [BIGIN_SETUP.md](../../../BIGIN_SETUP.md) - OAuth setup
- [DEPLOYMENT.md](../../../DEPLOYMENT.md) - Deployment guide

