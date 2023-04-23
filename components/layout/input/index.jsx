import React from "react";

const Input = ({ type, placeholder, name, className, ...rest }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={`py-[14.5px] px-4 text-[16px] leading-[19px] font-normal text-gray bg-transparent rounded-[8px] border ${
        className ?? ""
      }`}
      {...rest}
    />
  );
};

export default Input;
