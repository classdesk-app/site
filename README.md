This is a [Next.js](https://nextjs.org) project with integrated Bigin CRM for waitlist management.

## Features

- 🎨 Modern, responsive landing page
- 📝 Waitlist form with real-time validation
- 🔗 Integrated with Bigin by Zoho CRM
- 🚀 Optimized for Vercel deployment
- 🌙 Dark mode support
- ⚡ Fast page loads with Next.js 15

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm
- Bigin CRM account (for waitlist integration)
- Vercel account (for deployment)

### Local Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Environment Variables

For the Bigin CRM integration to work, you need to set up environment variables. Create a `.env.local` file:

```env
BIGIN_CLIENT_ID=your_client_id
BIGIN_CLIENT_SECRET=your_client_secret
BIGIN_REFRESH_TOKEN=your_refresh_token
```

See [BIGIN_SETUP.md](./BIGIN_SETUP.md) for detailed instructions on obtaining these credentials.

## Bigin CRM Integration

This project includes a waitlist form that automatically creates:
- **Leads** - Potential customers from the waitlist
- **Contacts** - Contact information for follow-up
- **Accounts** - Company/University records

### Setup Guides

📘 [**Bigin CRM Setup Guide**](./BIGIN_SETUP.md) - Complete guide to configure Bigin OAuth and get API credentials

🚀 [**Deployment Guide**](./DEPLOYMENT.md) - Step-by-step instructions for deploying to Vercel

🔌 [**API Documentation**](./app/api/waitlist/README.md) - Technical details about the API endpoint

### Quick Setup

1. **Get Bigin credentials** - Follow [BIGIN_SETUP.md](./BIGIN_SETUP.md)
2. **Set environment variables** - Add to `.env.local` (local) or Vercel dashboard (production)
3. **Deploy to Vercel** - Follow [DEPLOYMENT.md](./DEPLOYMENT.md)
4. **Test the integration** - Submit the waitlist form and check Bigin CRM

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Project Structure

```
├── app/
│   ├── api/
│   │   └── waitlist/          # Bigin CRM integration API endpoint
│   ├── about/                 # About page
│   ├── features/              # Features page
│   ├── roadmap/               # Roadmap page
│   └── page.tsx               # Homepage
├── components/
│   ├── waitlist-form.tsx      # Waitlist form with Bigin integration
│   ├── home/                  # Homepage components
│   ├── roadmap/               # Roadmap components
│   └── ui/                    # Reusable UI components
├── BIGIN_SETUP.md             # Bigin CRM setup guide
├── DEPLOYMENT.md              # Deployment instructions
└── README.md                  # This file
```

## Deploy on Vercel

See the [Deployment Guide](./DEPLOYMENT.md) for complete instructions.

**Quick Deploy:**

1. Push to GitHub
2. Import to Vercel
3. Add environment variables (Bigin credentials)
4. Deploy!

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion
- **CRM**: Bigin by Zoho
- **Deployment**: Vercel

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
