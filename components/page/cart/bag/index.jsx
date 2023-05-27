import React from "react";
import Image from "next/image";

// Layouts and Components
import OrderSummery from "../../../layout/orderSummery";
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

        <CartProduct
          className="mt-[48px]"
          id={1}
          image={DropProductImg1}
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

      <OrderSummery className="mr-[30px]" />
    </section>
  );
};

export default Bag;
