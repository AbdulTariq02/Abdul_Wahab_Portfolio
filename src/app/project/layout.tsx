import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore web applications and projects built by Abdul Wahab Tariq.',
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
