import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Abdul Wahab Tariq about freelance, remote, and full-time work.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
