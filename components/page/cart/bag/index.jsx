import React from "react";
import Image from "next/image";

// Layouts and Components
import OrderSummery from "../orderSummary";
import CartProduct from "../cartProduct";

// Fonts
import { OpenSans } from "../../../layout/font";

// Images
import DropProductImg1 from "../../../../assets/products/drops_adidas1.png";

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
          <CartProduct
            id={1}
            title="DROPSET TRAINER SHOES"
            details={[
              "Men’s Road Running Shoes ",
              "Enamel Blue/ University White",
            ]}
            size={10}
            quantity={1}
            price={130}
          />
        </div>
      </div>

      <OrderSummery className="mr-[30px]" />
    </section>
  );
};

export default Bag;
