import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={`btn-hoverEffect relative overflow-hidden w-full py-4 px-8 rounded-lg uppercase text-[14px] leading-[15.69px] font-medium tracking-[0.25px] ${
        className ?? ""
      }`}
    >
      <span className="relative z-[1]">{children}</span>
    </button>
  );
};

export default Button;
