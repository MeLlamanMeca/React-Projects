import React from 'react';
import PropTypes from 'prop-types';

export default function CardTop({ startColor, endColor, paintID }) {
  return (
    <svg
      width="284"
      height="299"
      viewBox="0 0 284 299"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={paintID} x1="284" y1="7.99988" x2="4.49948" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={startColor} />
          <stop offset="100%" stopColor={endColor} />
        </linearGradient>
      </defs>

      <path
        d="M-5.77779e-05 16.8512C-5.95333e-05 7.46234 7.6111 0 16.9999 0H267C276.389 0 284 7.61116 284 17V144.5C261.978 299.143 -0.00012207 298 -6.10351e-05 298.5C-8.79957e-06 298.928 -4.59733e-05 79.9897 -5.77779e-05 16.8512Z"
        fill={`url(#${paintID})`}
      />
    </svg>
  );
}

CardTop.propTypes = {
  startColor: PropTypes.string.isRequired,
  endColor: PropTypes.string.isRequired,
  paintID: PropTypes.string.isRequired,
};