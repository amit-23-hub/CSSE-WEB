import React from "react";

const Button = ({text}) => {
  return (
    <a
      href="#"
      className="relative inline-block px-7 py-3 text-white font-bold border-4 border-pink-500 bg-transparent overflow-hidden group transition-all duration-300"
    >
      <span className="absolute inset-0 bg-pink-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
      <span className="relative z-10">{text}</span>
    </a>
  );
};

export default Button;
