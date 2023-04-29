import React, { useState } from "react";

// Components
import Badge from "../../../layout/badge";
import ColorSelector from "../../../layout/colorSelector";
import SizeSelector from "../../../layout/sizeSelector";

const BlockTitle = ({ className = "", children }) => (
  <h6
    className={`text-gray_dark font-semibold text-[16px] leading-[18.96px] uppercase ${className}`}
  >
    {children}
  </h6>
);

const DetailView = ({
  className = "",
  productName = "Name of your product",
  price = "00.00",
  colorVarients = [],
  sizeVarients = [],
}) => {
  const [state, setState] = useState({
    activeColor: colorVarients[0],
    activeSize: sizeVarients[0].value,
  });

  const { activeColor, activeSize } = state;

  const handleColorClick = (color) => {
    setState({ activeColor: color, activeSize });
  };

  const handleSizeClick = (size) => {
    setState({ activeColor, activeSize: size });
  };

  return (
    <div className={`w-[32.57%] flex flex-col gap-y-8 ${className}`}>
      <div className="flex flex-col gap-y-4">
        <Badge type="primary">New Release</Badge>
        <h3 className="text-gray_dark text-[32px] leading-[37.92px] font-semibold">
          {productName}
        </h3>
        <h4 className="text-[24px] leading-[28px] text-blue font-semibold">
          ${price}.00
        </h4>
      </div>
      <div className="flex flex-col gap-y-2">
        <BlockTitle>Color</BlockTitle>
        <div className="flex flex-wrap gap-2 items-center justify-start">
          {colorVarients.map((c, i) => (
            <ColorSelector
              key={i}
              color={c}
              isSelected={colorVarients[i] === activeColor}
              onClick={() => activeColor !== c && handleColorClick(c)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <BlockTitle>Size</BlockTitle>
        <div className="flex flex-wrap gap-1 items-center justify-start">
          {sizeVarients.map((s, i) => (
            <SizeSelector
              key={i}
              isAvailable={s.isAvailable}
              onClick={() =>
                s.isAvailable
                  ? activeSize !== s.value && handleSizeClick(s.value)
                  : {}
              }
              isSelected={sizeVarients[i].value === activeSize}
            >
              {s.value}
            </SizeSelector>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailView;
