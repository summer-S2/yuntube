import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <svg
        className="mx-4"
        width={50}
        height={50}
        x="0px"
        y="0px"
        viewBox="0 0 158 110"
        // enable-background="new 0 0 158 110" // 에러
      >
        <path
          fill="#f00"
          d="M154.4,17.5c-1.8-6.7-7.1-12-13.9-13.8C128.2,0.5,79,0.5,79,0.5s-48.3-0.2-60.6,3
c-6.8,1.8-13.3,7.3-15.1,14C0,29.7,0.3,55,0.3,55S0,80.3,3.3,92.5c1.8,6.7,8.4,12.2,15.1,14c12.3,3.3,60.6,3,60.6,3s48.3,0.2,60.6-3
c6.8-1.8,13.1-7.3,14.9-14c3.3-12.1,3.3-37.5,3.3-37.5S157.7,29.7,154.4,17.5z"
        />
        <polygon fill="#fff" points="63.9,79.2 103.2,55 63.9,30.8 " />
      </svg>
      <h1 className="font-bold text-3xl">Yuntube</h1>
    </Link>
  );
}
