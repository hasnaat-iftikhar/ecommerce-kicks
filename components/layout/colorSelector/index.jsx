import React from "react";

const ColorSelector = ({
  color = "#000",
  isSelected = false,
  onClick,
  className,
}) => {
  const circleOutlineStyle = {
    borderColor: isSelected ? color : "transparent",
    cursor: isSelected ? "pointer" : "default",
  };

  const innerCircleStyle = {
    backgroundColor: color,
  };

  return (
    <div
      onClick={onClick}
      className={`w-[48px] h-[48px] rounded-full p-[5px] flex justify-center items-center border-[3px] ${
        className ?? ""
      }`}
      style={circleOutlineStyle}
    >
      <div
        style={innerCircleStyle}
        className={`w-full h-full rounded-full cursor-pointer`}
      />
    </div>
  );
};

export default ColorSelector;
