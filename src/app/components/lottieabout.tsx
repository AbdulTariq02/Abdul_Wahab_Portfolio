'use client';

import React from 'react';
import Lottie from 'lottie-react';
import animationData from './okhc8marPb (1).json'; // alias or relative path as per config

const LottieAnimation = () => {
  return (
    <div className="w-84 h-84">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
