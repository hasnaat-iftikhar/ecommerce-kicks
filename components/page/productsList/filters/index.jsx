import React, { useState } from "react";

// Components
import SizeSelector from "../../../layout/sizeSelector";
import ColorSelector from "../../../layout/colorSelector";

const FilterBox = ({ className = "", title = "", children }) => {
  return (
    <div className={`flex flex-col gap-y-[18.5px] ${className}`}>
      <h4 className="uppercase text-gray_dark text-[16px] leading-[18px] font-semibold">
        {title}
      </h4>
      {children}
    </div>
  );
};

const Filters = ({ className = "" }) => {
  const colorVarients = ["#253043", "#707E6E", "#afe714"];

  const sizeVarients = [
    {
      value: 25,
      isAvailable: true,
    },
    {
      value: 26,
      isAvailable: false,
    },
    {
      value: 27,
      isAvailable: false,
    },
    {
      value: 28,
      isAvailable: false,
    },
    {
      value: 29,
      isAvailable: true,
    },
    {
      value: 30,
      isAvailable: true,
    },
    {
      value: 31,
      isAvailable: true,
    },
    {
      value: 32,
      isAvailable: true,
    },
    {
      value: 33,
      isAvailable: true,
    },
  ];

  const [state, setState] = useState({
    activeColor: colorVarients[0],
    activeSize: sizeVarients[0].value,
  });

  const { activeColor, activeSize } = state;

  const handleSizeClick = (size) => {
    setState({ activeColor, activeSize: size });
  };

  const handleColorClick = (color) => {
    setState({ activeColor: color, activeSize });
  };

  return (
    <div className={`flex flex-col gap-y-[24px] ${className}`}>
      <FilterBox title="Size">
        <div className="flex flex-wrap gap-4 items-center justify-start">
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
      </FilterBox>
      <FilterBox title="Color">
        <div className="flex flex-wrap gap-4 items-center justify-start">
          {colorVarients.map((c, i) => (
            <ColorSelector
              key={i}
              shape="square"
              color={c}
              isSelected={colorVarients[i] === activeColor}
              onClick={() => activeColor !== c && handleColorClick(c)}
            >
              {c.value}
            </ColorSelector>
          ))}
        </div>
      </FilterBox>
    </div>
  );
};

export default Filters;
