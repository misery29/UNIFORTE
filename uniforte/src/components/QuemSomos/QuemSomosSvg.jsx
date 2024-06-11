import React from 'react';

export default function BackgroundSVG() {
  return (
  <svg width="1400" height="919" viewBox="0 0 1400 919" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_32_173)">
      <path d="M6 39C6 18.5655 22.5655 2 43 2H1357C1377.43 2 1394 18.5655 1394 39V872C1394 892.435 1377.43 909 1357 909H43C22.5654 909 6 892.435 6 872V39Z" fill="#F7F7F7" shape-rendering="crispEdges"/>
      <path d="M43 1C22.0132 1 5 18.0132 5 39V872C5 892.987 22.0132 910 43 910H1357C1377.99 910 1395 892.987 1395 872V39C1395 18.0132 1377.99 1 1357 1H43Z" stroke="url(#paint0_linear_32_173)" stroke-width="2" shape-rendering="crispEdges"/>
    </g>
    <defs>
      <filter id="filter0_d_32_173" x="0" y="0" width="1400" height="919" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_173"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_173" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_32_173" x1="6" y1="455.5" x2="1394" y2="455.5" gradientUnits="userSpaceOnUse">
        <stop offset="0.3" stop-color="#FF2121"/>
        <stop offset="1" stop-color="#23139F" stop-opacity="0.9"/>
      </linearGradient>
    </defs>
  </svg>
);
}
