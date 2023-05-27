import React from "react";
import Image from "next/image";

// Components
import { OpenSans } from "../../../layout/font";

const ProductDetailCard = ({
  id = "",
  image,
  title = "",
  details = [""],
  size = "",
  quantity = 0,
  price = 0,
}) => {
  return (
    <div className="flex gap-[24px]">
      <div className="relative w-[138px] h-[158px] rounded-[24px] overflow-hidden">
        <Image src={image} alt="DROPSET TRAINER SHOES" fill />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div>
          <h4 className="text-[20px] leading-[23px] text-gray_dark font-semibold">
            {title}
          </h4>
          <div className="mt-2 flex flex-col gap-1">
            {details.map((detail, index) => (
              <p
                key={index}
                className={`text-[16px] leading-[21px] font-semibold opacity-80 ${OpenSans.className}`}
              >
                {detail}
              </p>
            ))}
          </div>
          <div className="mt-[16px] flex gap-[40px] items-center justify-start">
            <p
              className={`text-[16px] leading-[21px] font-semibold opacity-80 ${OpenSans.className}`}
            >
              Size {size}
            </p>
            <p
              className={`text-[16px] leading-[21px] font-semibold opacity-80 ${OpenSans.className}`}
            >
              Quantity {quantity}
            </p>
          </div>
        </div>
        <h3 className="text-[20px] leading-[23px] text-blue font-semibold">
          ${price}
        </h3>
      </div>
    </div>
  );
};

export default ProductDetailCard;
