import React from "react";
import { useRouter, usePathname } from "next/navigation";

// Components
import Button from "../button";

// Fonts
import { OpenSans } from "../font";

const SummeryList = ({ name, value }) => {
  return (
    <div className="flex justify-between items-center">
      <p
        className={`text-[20px] leading-[27px] text-gray_dark font-semibold ${OpenSans.className}`}
      >
        {name}
      </p>
      <p
        className={`text-[20px] leading-[27px] text-gray_dark font-semibold opacity-80 ${OpenSans.className}`}
      >
        {value}
      </p>
    </div>
  );
};

const OrderSummery = ({ className = "" }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={`w-full ${className}`}>
      <h3 className="text-gray_dark text-[32px] leading-[38px] font-semibold">
        Order Summary
      </h3>
      <div className="mt-[24px] flex flex-col gap-[16px]">
        <SummeryList name="1 ITEM" value="$130.00" />
        <SummeryList name="Delivery" value="$6.99" />
        <SummeryList name="Sales Tax" value="-" />
      </div>
      <div className="mt-[16px] flex justify-between items-center">
        <p
          className={`text-[24px] leading-[29px] text-gray_dark font-semibold`}
        >
          Total
        </p>
        <p
          className={`text-[24px] leading-[28px] text-gray_dark font-semibold opacity-80`}
        >
          $136.99
        </p>
      </div>
      {pathname !== "/cart/checkout" && (
        <Button
          onClick={() => {
            router.push("/cart/checkout");
          }}
          className="mt-[24px] bg-gray_dark text-white"
        >
          Checkout
        </Button>
      )}
    </div>
  );
};

export default OrderSummery;
