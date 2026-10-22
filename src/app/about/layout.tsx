import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Abdul Wahab Tariq and the technologies and tools he works with.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
