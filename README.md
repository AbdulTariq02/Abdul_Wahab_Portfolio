This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact form email

The contact form sends the visitor's full name, email, subject, and complete message through the server using SMTP to `wahabsurfali@gmail.com` by default. To enable delivery, copy `.env.example` to `.env.local` in the project root and set `SMTP_PASS` to an App Password generated for the `SMTP_USER` Gmail account. Enable Google 2-Step Verification first; do not use your regular Gmail password. Remove spaces from the App Password when entering it. Keep `.env.local` private and add the same variables to your deployment provider's environment settings. Restart the dev server after changing environment variables.

Email is sent from the configured mailbox under `CONTACT_FROM_NAME`. The notification includes the visitor's actual name, email, subject, and message, and their validated email is set as Reply-To so you can respond directly. The API also validates submissions, rejects oversized requests and submissions that fill its hidden honeypot, and limits each IP address to five requests per ten minutes per running server instance. Configure a shared rate-limit store at your hosting platform if you need consistent limits across multiple instances. Without valid SMTP credentials, the API reports a configuration error and does not claim the message was sent.

The app suppresses hydration warnings on the root `<html>` element to accommodate the reported `data-hushbug-nonce` attribute injected by a browser extension. This does not alter email behavior; disable that extension to remove the injected attribute itself.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
