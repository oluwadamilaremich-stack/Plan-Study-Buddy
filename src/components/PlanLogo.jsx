import React from "react";

const PlanLogo = ({ size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient */}
      <defs>
        <linearGradient id="planGradient" x1="16" y1="0" x2="16" y2="32">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
      </defs>

      {/* Circle Background */}
      <circle cx="16" cy="16" r="16" fill="url(#planGradient)" />

      {/* Brain Outline */}
      <path
        d="M10 11
           C8.5 11 8 13 9 14
           C7.5 15 7.5 17 9 18
           C8.5 20 10 21 11.5 21
           C12.5 23 15 23 16 21
           C17 23 19.5 23 20.5 21
           C22 21 23.5 20 23 18
           C24.5 17 24.5 15 23 14
           C24 13 23.5 11 22 11
           C21 9 18 9 16 11
           C14 9 11 9 10 11 Z"
        stroke="white"
        strokeWidth="1.6"
        fill="none"
      />

      {/* Center line */}
      <line
        x1="16"
        y1="12"
        x2="16"
        y2="20"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Cross line */}
      <line
        x1="13"
        y1="16"
        x2="19"
        y2="16"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PlanLogo;