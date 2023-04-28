import React from "react";

const ColorSelector = ({
  color = "#000",
  isSelected = false,
  onClick,
  className,
}) => {
  const circleOutlineStyle = {
    borderColor: color,
    borderWidth: isSelected && "3px",
  };

  const innerCircleStyle = {
    backgroundColor: color,
  };

  return (
    <div
      onClick={onClick}
      className={`w-[48px] h-[48px] rounded-full ${
        isSelected ? "p-[5px]" : ""
      } ${className ?? ""}`}
      style={circleOutlineStyle}
    >
      <div style={innerCircleStyle} className={`w-full h-full rounded-full`} />
    </div>
  );
};

export default ColorSelector;
