import React from 'react';

interface HeartProps {
  className: string;
}

const Heart: React.FC<HeartProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 15 12"
  >
    <path
      fill="#fff"
      d="M1.813 1.468A3.338 3.338 0 014.346.334c1.384 0 2.263.822 2.756 1.512.128.18.236.358.326.53.09-.17.2-.35.326-.53.493-.69 1.372-1.512 2.756-1.512.986 0 1.886.403 2.533 1.134.619.7.96 1.635.96 2.634 0 1.089-.426 2.1-1.343 3.187-.82.97-1.998 1.97-3.365 3.127-.508.432-1.035.877-1.595 1.365l-.018.015a.383.383 0 01-.254.095.383.383 0 01-.254-.095l-.018-.015c-.56-.488-1.087-.933-1.595-1.365C4.194 9.26 3.015 8.26 2.196 7.29 1.279 6.203.852 5.19.852 4.102c0-.999.342-1.934.961-2.634zm4.248 8.366c.44.373.892.754 1.367 1.165.475-.412.927-.795 1.366-1.165 2.674-2.267 4.439-3.764 4.439-5.732 0-.812-.272-1.568-.768-2.125A2.574 2.574 0 0010.51 1.1c-1.056 0-1.739.647-2.127 1.19-.346.489-.529.98-.59 1.169a.386.386 0 01-.735 0 4.558 4.558 0 00-.59-1.168C6.084 1.747 5.4 1.1 4.345 1.1c-.76 0-1.457.31-1.955.876-.496.56-.768 1.313-.768 2.125 0 1.968 1.765 3.465 4.438 5.732z"
    />
  </svg>
);

export default Heart;
