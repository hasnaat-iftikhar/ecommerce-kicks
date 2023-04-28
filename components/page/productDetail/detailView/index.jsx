import React, { useState } from "react";

// Components
import Badge from "../../../layout/badge";
import ColorSelector from "../../../layout/colorSelector";

const BlockTitle = ({ className, children }) => (
  <h6
    className={`text-gray_dark font-semibold text-[16px] leading-[18.96px] uppercase ${
      className ?? ""
    }`}
  >
    {children}
  </h6>
);

const DetailView = ({ className, productName, price, colorVarients }) => {
  const [activeColors, setActiveColors] = useState(
    colorVarients?.map(() => false)
  );

  const handleColorClick = (index) => {
    const newActiveColors = [...activeColors];
    newActiveColors[index] = !newActiveColors[index];
    setActiveColors(newActiveColors);
  };

  return (
    <div className={`w-[32.57%] flex flex-col gap-y-8 ${className ?? ""}`}>
      <div className="flex flex-col gap-y-4">
        <Badge type="primary">New Release</Badge>
        <h3 className="text-gray_dark text-[32px] leading-[37.92px] font-semibold">
          {productName ?? "Name of your product"}
        </h3>
        <h4 className="text-[24px] leading-[28px] text-blue font-semibold">
          ${price ?? "00.00"}.00
        </h4>
      </div>
      <div className="flex flex-col gap-y-2">
        <BlockTitle>Color</BlockTitle>
        <div className="flex gap-4 items-center justify-start">
          {colorVarients?.map((c, i) => (
            <ColorSelector
              key={i}
              color={c}
              isSelected={activeColors[i]}
              onClick={() => {
                handleColorClick(i);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailView;
