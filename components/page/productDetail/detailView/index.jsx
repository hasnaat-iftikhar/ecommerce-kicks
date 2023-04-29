import React, { useState } from "react";
import Image from "next/image";

// Components
import Badge from "../../../layout/badge";
import ColorSelector from "../../../layout/colorSelector";
import SizeSelector from "../../../layout/sizeSelector";
import Button from "../../../layout/button";

// Icons
import HeartIcon from "../../../../assets/icons/heart.svg";

const BlockWrapper = ({ className = "", children }) => (
  <div className={`flex flex-col gap-y-2 ${className}`}>{children}</div>
);

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
  about = "",
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
      <BlockWrapper>
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
      </BlockWrapper>
      <BlockWrapper>
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
      </BlockWrapper>
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-2">
          <Button className="bg-gray_dark text-white" onClick={() => {}}>
            Add to cart
          </Button>
          <SizeSelector
            className="flex-none"
            isAvailable={true}
            onClick={() => {}}
            isSelected={true}
          >
            <Image
              src={HeartIcon}
              alt="Add to favourites"
              width={16}
              height={16}
            />
          </SizeSelector>
        </div>
        <Button className="bg-blue text-white" onClick={() => {}}>
          Buy it now
        </Button>
      </div>
      <div className="flex flex-col gap-y-2">
        <BlockTitle>About the product</BlockTitle>
        <p className="text-[16px] leading-[22px] text-gray_dark opacity-80">
          {about}
        </p>
      </div>
    </div>
  );
};

export default DetailView;
