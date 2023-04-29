import React from "react";

const SizeSelector = ({
  isSelected = false,
  isAvailable = false,
  onClick = () => {},
  className = "",
  children,
}) => {
  const isSelectedClassNames =
    isSelected === true ? "bg-gray_dark text-white" : "bg-white text-gray_dark";

  const isAvailableClassNames =
    isAvailable === true ? isSelectedClassNames : "text-[#8F8C91] bg-[#D2D1D3]";

  return (
    <div
      onClick={onClick}
      className={`w-[50px] h-[48px] rounded-[8px] cursor-pointer flex justify-center items-center font-medium ${isAvailableClassNames} ${className}`}
    >
      {children}
    </div>
  );
};

export default SizeSelector;
