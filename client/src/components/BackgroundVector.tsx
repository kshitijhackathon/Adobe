import React from "react";

interface BackgroundVectorProps {
  className?: string;
}

export const BackgroundVector: React.FC<BackgroundVectorProps> = ({ 
  className = "absolute w-full h-auto top-0 left-0 z-0" 
}) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 1440 900" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Background gradient overlay */}
      <defs>
        <radialGradient id="bgGradient" cx="50%" cy="8%" r="50%">
          <stop offset="49%" stopColor="rgba(79, 26, 23, 1)" />
          <stop offset="53%" stopColor="rgba(0, 0, 0, 1)" />
        </radialGradient>
        
        {/* Subtle pattern for texture */}
        <pattern id="noisePattern" patternUnits="userSpaceOnUse" width="100" height="100">
          <rect width="100" height="100" fill="black" opacity="0.1"/>
          <circle cx="20" cy="20" r="1" fill="rgba(202, 106, 52, 0.05)"/>
          <circle cx="80" cy="60" r="1" fill="rgba(202, 106, 52, 0.03)"/>
          <circle cx="50" cy="90" r="1" fill="rgba(202, 106, 52, 0.02)"/>
        </pattern>
      </defs>
      
      {/* Main background */}
      <rect width="100%" height="100%" fill="url(#bgGradient)"/>
      
      {/* Noise texture overlay */}
      <rect width="100%" height="100%" fill="url(#noisePattern)" opacity="0.3"/>
      
      {/* Subtle geometric shapes for visual interest */}
      <g opacity="0.1">
        <circle cx="200" cy="150" r="100" fill="rgba(202, 106, 52, 0.1)"/>
        <circle cx="1200" cy="400" r="150" fill="rgba(202, 106, 52, 0.08)"/>
        <circle cx="800" cy="700" r="80" fill="rgba(202, 106, 52, 0.06)"/>
      </g>
      
      {/* Animated light rays */}
      <g className="animate-pulse" opacity="0.05">
        <path d="M720 0 L750 900" stroke="rgba(202, 106, 52, 0.3)" strokeWidth="1"/>
        <path d="M680 0 L710 900" stroke="rgba(202, 106, 52, 0.2)" strokeWidth="1"/>
        <path d="M760 0 L790 900" stroke="rgba(202, 106, 52, 0.2)" strokeWidth="1"/>
      </g>
    </svg>
  );
};