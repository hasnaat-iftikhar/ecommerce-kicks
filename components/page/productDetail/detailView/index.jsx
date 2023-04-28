import React from "react";

// Components
import Badge from "../../../layout/badge";

const DetailView = ({ className, productName, price }) => {
  return (
    <div className={`w-[32.57%] ${className ?? ""}`}>
      <div className="flex flex-col gap-y-4">
        <Badge type="primary">New Release</Badge>
        <h3 className="text-gray_dark text-[32px] leading-[37.92px] font-semibold">
          {productName ?? "Name of your product"}
        </h3>
        <h4 className="text-[24px] leading-[28px] text-blue font-semibold">
          ${price ?? "00.00"}.00
        </h4>
      </div>
    </div>
  );
};

export default DetailView;
