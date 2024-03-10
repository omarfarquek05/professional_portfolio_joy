"use client";

import Lottie from "lottie-react";


const Animate = ({ animationPath, width }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPath,
        style: {
          width: '95%',
        }
      };
  return (     
        <Lottie {...defaultOptions} />
 
  )
}

export default Animate