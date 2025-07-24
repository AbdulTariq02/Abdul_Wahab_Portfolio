import React from 'react';
import Lottie from 'lottie-react';
import animationData from './5I25pkFAXF.json'; // alias or relative path as per config

const LottieAnimationSUbmit = () => {
  return (
    <div className="w-20 h-20">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimationSUbmit ;
