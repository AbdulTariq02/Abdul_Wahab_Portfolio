'use client';

import { useEffect, useState } from 'react';
import Loader from './components/loader';

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader for 2s */}
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
          <Loader />
        </div>
      )}

      {/* Content after loader */}
      {!loading && children}
    </>
  );
}
