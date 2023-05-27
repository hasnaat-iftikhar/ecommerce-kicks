import React from "react";
import Image from "next/image";

// Layouts and Components
import Button from "../../../layout/button";

// Fonts
import { OpenSans } from "../../../layout/font";

// Images
import DropProductImg1 from "../../../../assets/products/drops_adidas1.png";

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

const Bag = () => {
  return (
    <section className="mt-[32px] flex justify-between items-center gap-[47px]">
      <div className="bg-fa_white p-[24px] rounded-[16px] flex-1">
        <h3 className="text-gray_dark text-[32px] leading-[38px] font-semibold">
          Your Bag
        </h3>
        <p
          className={`text-[16px] leading-[22px] font-normal opacity-80 text-gray_dark ${OpenSans.className}`}
        >
          Items in your bag not reserved- check out now to make them yours.
        </p>
        <div className="mt-[48px] flex gap-[24px]">
          <div className="relative w-[207px] h-[255px] rounded-[24px] overflow-hidden">
            <Image src={DropProductImg1} alt="DROPSET TRAINER SHOES" fill />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-[24px] leading-[28px] text-gray_dark font-semibold">
                  DROPSET TRAINER SHOES
                </h4>
                <p
                  className={`mt-[8px] text-[20px] leading-[28px] font-semibold opacity-80 ${OpenSans.className}`}
                >
                  Men’s Road Running Shoes
                </p>
                <p
                  className={`mt-[8px] text-[20px] leading-[28px] font-semibold opacity-80 ${OpenSans.className}`}
                >
                  Enamel Blue/ University White
                </p>
                <div className="mt-[20px] flex gap-[40px] items-center justify-start">
                  <p
                    className={`text-[20px] leading-[28px] font-semibold opacity-80 ${OpenSans.className}`}
                  >
                    Size 10
                  </p>
                  <p
                    className={`text-[20px] leading-[28px] font-semibold opacity-80 ${OpenSans.className}`}
                  >
                    Quantity 1
                  </p>
                </div>
              </div>
              <h3 className="text-[24px] leading-[28px] text-blue font-semibold">
                $130.00
              </h3>
            </div>
            <div className="flex gap-[24px]">
              <button className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M11.0291 2.5C9.00032 2.5 8.00032 4.5 8.00032 4.5C8.00032 4.5 7.00032 2.5 4.97157 2.5C3.32282 2.5 2.01719 3.87937 2.00032 5.52531C1.96594 8.94187 4.71063 11.3716 7.71907 13.4134C7.80201 13.4699 7.9 13.5 8.00032 13.5C8.10063 13.5 8.19863 13.4699 8.28157 13.4134C11.2897 11.3716 14.0344 8.94187 14.0003 5.52531C13.9834 3.87937 12.6778 2.5 11.0291 2.5V2.5Z"
                    stroke="#232321"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <button className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <path
                    d="M27.8184 9L26.0265 26.2337C25.9692 26.7203 25.7353 27.169 25.3692 27.4946C25.0031 27.8201 24.5302 28 24.0402 28H9.59711C9.10716 28 8.63426 27.8201 8.26813 27.4946C7.90201 27.169 7.66812 26.7203 7.61086 26.2337L5.81836 9"
                    stroke="#232321"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29.8184 4H3.81836C3.26607 4 2.81836 4.44772 2.81836 5V8C2.81836 8.55228 3.26607 9 3.81836 9H29.8184C30.3706 9 30.8184 8.55228 30.8184 8V5C30.8184 4.44772 30.3706 4 29.8184 4Z"
                    stroke="#232321"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.3184 15L13.3184 22M20.3184 22L13.3184 15"
                    stroke="#232321"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[418px] mr-[30px]">
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
        <Button className="mt-[24px] bg-gray_dark text-white">Checkout</Button>
      </div>
    </section>
  );
};

export default Bag;
