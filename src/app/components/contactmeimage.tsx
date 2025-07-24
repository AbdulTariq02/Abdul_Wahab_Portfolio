'use client';

import React from 'react';
import Lottie from 'lottie-react';
import animationData from './w18CCwfxPA.json'; // alias or relative path as per config

const LottieAnimations = () => {
  return (
    <div className="w-84 h-84">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimations;
