import React from "react";

const ColorSelector = ({
  color = "#000",
  isSelected = false,
  shape = "circle",
  onClick,
  className,
}) => {
  const outlineStyle = {
    borderColor: isSelected ? color : "transparent",
    cursor: isSelected ? "pointer" : "default",
  };

  const innerStyle = {
    backgroundColor: color,
  };

  return (
    <div
      onClick={onClick}
      className={`w-[48px] h-[48px] ${
        shape === "circle"
          ? "rounded-full"
          : shape === "square"
          ? "rounded-[12px]"
          : ""
      } p-[5px] flex justify-center items-center border-[3px] ${
        className ?? ""
      }`}
      style={outlineStyle}
    >
      <div
        style={innerStyle}
        className={`w-full h-full ${
          shape === "circle"
            ? "rounded-full"
            : shape === "square"
            ? "rounded-[6px]"
            : ""
        } cursor-pointer`}
      />
    </div>
  );
};

export default ColorSelector;
