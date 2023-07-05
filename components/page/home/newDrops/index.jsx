import React from "react";
import { useRouter } from "next/navigation";

// Components
import Button from "../../../layout/button";
import Text from "../../../layout/text";
import ProductCardsWrapper from "../../../layout/productCardsWrapper";

// Images
import DropProductImg1 from "../../../../assets/products/drops_adidas1.png";
import DropProductImg2 from "../../../../assets/products/drops_adidas2.png";
import DropProductImg3 from "../../../../assets/products/drops_adidas3.png";
import DropProductImg4 from "../../../../assets/products/drops_adidas4.png";

const NewDropsSection = ({ className = "" }) => {
  const router = useRouter();

  const data = [
    {
      image: DropProductImg1,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
    },
    {
      image: DropProductImg2,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
    },
    {
      image: DropProductImg3,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
    },
    {
      image: DropProductImg4,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
    },
  ];

  return (
    <section className={`${className}`}>
      <div className="flex justify-between flex-col items-start sm:flex-row sm:items-end">
        <Text
          type="sectionHeading"
          className="max-w-[68vw] sm:max-w-[50vw] md:max-w-[46vw] lg:max-w-[589px] leading-[95%] text-gray_dark"
        >
          Don’t miss out new drops
        </Text>
        <Button
          onClick={() => {
            router.push("/product/all");
          }}
          className="max-w-[190px] mt-6 text-white bg-blue"
        >
          Shop New Drops
        </Button>
      </div>
      <ProductCardsWrapper
        className="mt-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[10px] xl:gap-[16px]"
        productsData={data}
        productImageClassName="max-h-[360px] lg:max-h-[399px]"
      />
    </section>
  );
};

export default NewDropsSection;
