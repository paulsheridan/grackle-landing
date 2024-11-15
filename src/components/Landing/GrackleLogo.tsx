import React from "react";

const GrackleLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    width={props.size || 100}
    height={props.size || 100}
    {...props}
  >
    {/* Define gradient */}
    <defs>
      <linearGradient id="grackleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#4A90E2", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "#ED4A7B", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#FFA500", stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    {/* Bird shape */}
    <path
      d="M 512 100 Q 600 150 680 200 Q 760 250 780 320 Q 800 390 700 450 L 620 480 Q 540 510 470 480 Q 400 450 330 400 Q 300 370 310 300 Q 320 230 390 180 Q 460 130 512 100 Z"
      fill="url(#grackleGradient)"
    />

    {/* Eye with a worried expression */}
    <circle cx="580" cy="250" r="10" fill="#000" />
    <path d="M 570 240 Q 585 235 590 250" stroke="#000" strokeWidth="2" />
  </svg>
);

export default GrackleLogo;
