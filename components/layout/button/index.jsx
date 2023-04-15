import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={`w-full py-4 px-8 rounded-lg uppercase text-[14px] leading-[15.69px] font-medium tracking-[0.25px] ${
        className ?? ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
