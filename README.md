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

The contact form sends the visitor's name, email, subject, and message through FormSubmit, so no SMTP password or API key is needed. The visitor's address is set as Reply-To. A success response is returned only after FormSubmit accepts the submission.

No email environment variables or Vercel secrets are required. On the first real form submission, FormSubmit sends an activation email to `wahabsurfali@gmail.com`; open it and confirm the address before expecting messages to arrive. FormSubmit receives and processes the submitted form data. The endpoint validates and limits submissions, rejects oversized requests, and includes a hidden honeypot for basic bot protection. Its in-memory rate limit is best-effort on serverless deployments.

The app suppresses hydration warnings on the root `<html>` element to accommodate the reported `data-hushbug-nonce` attribute injected by a browser extension. This does not alter email behavior; disable that extension to remove the injected attribute itself.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
