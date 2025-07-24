'use client';

import { useEffect, useState } from 'react';
import DesktopBg from './components/Black and white 3D Artificial Intelligence Video.gif';
import MobileBg from './components/formobile (1).gif';
import Loader from './components/loader';

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = window.innerWidth >= 768 ? DesktopBg.src : MobileBg.src;

    img.onload = () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
          <Loader />
        </div>
      )}

      {/* Backgrounds */}
      {!loading && (
        <>
          <img
            src={DesktopBg.src}
            alt="Desktop"
            className="fixed inset-0 -z-10 hidden md:block w-full h-full object-cover"
          />
          <img
            src={MobileBg.src}
            alt="Mobile"
            className="fixed inset-0 -z-10 md:hidden w-full h-full object-cover"
          />
        </>
      )}

      {children}
    </>
  );
}
