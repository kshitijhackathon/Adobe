import React from "react";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  width = 138, 
  height = 79 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 138 79" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <rect y="-7" width="138" height="86" fill="url(#pattern0_10_1277)"/>
      <defs>
        <pattern id="pattern0_10_1277" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_10_1277" transform="matrix(0.00284091 0 0 0.00455867 0 -0.00145349)"/>
        </pattern>
        <image 
          id="image0_10_1277" 
          width="352" 
          height="220" 
          preserveAspectRatio="none" 
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWAAAADcCAYAAABOHnv2AAAAAXNSR0IArs4c6QAAIABJREFUeF7sfQmYXkWV9nv3++29b9kXspEAIYRABjAYQBHZ1KAgO4K/ILiMjuNsRmf8Z35nnHFGGXGcAUUFAccFlX2JbCEJIXvS2Tud9L59+91v/c+p+zUJkIR06E56uR8PDyH99b1Vb1W9deqc95wSEH4OIiAAYCEgwxUBxpggCMKwHaGxNH3GUl+Hcj0QjuEnRCBEYMgQCKlqyKAdBQ8e/QQczv8hm6YhtEMG7ch8cDghBjxuo5+ABwxJ+AsBAuFqGoszYbi7eUbbmIQEPNpGdLD6E/LvYCE5tM8Jx2lo8R3ip4cE...[Truncated]"
        />
      </defs>
    </svg>
  );
};