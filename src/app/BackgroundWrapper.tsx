'use client';

import { useEffect, useState } from 'react';
import Loader from './components/loader';

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
          <Loader />
        </div>
      )}
      {!loading && children}
    </>
  );
}
