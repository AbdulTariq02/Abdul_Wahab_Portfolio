import React from 'react';
import Lottie from 'lottie-react';
import animationData from './hgmd31GEdM.json';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/50">
      <div className="w-50 h-50">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
