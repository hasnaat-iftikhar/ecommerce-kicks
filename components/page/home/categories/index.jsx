import React from "react";
import Image from "next/image";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Components
import Text from "../../../layout/text";
import Container from "../../../layout/container";

import BasketBallCategoryImage from "../../../../assets/products/categories_basketBallShoes.png";
import LifeStyleShoesCategoryImage from "../../../../assets/products/categories_lifestyleShoes.png";
import RedirectIcon from "../../../../assets/icons/arrowTopRight.svg";

const CategoriesSection = ({ className }) => {
  const categoriesInfo = [
    {
      image: LifeStyleShoesCategoryImage,
      name: "Lifestyle Shoes",
      url: "/",
    },
    {
      image: BasketBallCategoryImage,
      name: "Basketball Shoes",
      url: "/",
    },
  ];

  return (
    <section
      id="product-categories-section"
      className={`bg-gray_dark ${className ?? ""}`}
    >
      <Container className="relative mt-[90px] flex flex-col gap-y-16">
        <Text type="sectionHeading" className="text-white leading-[95%]">
          Categories
        </Text>

        <Splide options={{ perPage: 2, perMove: 1 }}>
          {categoriesInfo?.map((s, i) => (
            <SplideSlide
              key={i}
              className={`${
                i % 2 === 0 ? "bg-[#ECEEF0]" : "bg-[#F6F6F6]"
              } relative w-[38vw] xl:h-[40vw] xxl:h-[600px]`}
            >
              <Image src={s.image} alt={s.name} fill className="px-[100px]" />
              <div className="flex flex-row justify-between items-end absolute bottom-[30px] w-full px-[48px]">
                <h4 className="w-[min-content] text-4xl font-semibold text-gray_dark uppercase">
                  {s.name}
                </h4>
                <button className="cursor-pointer bg-gray_dark w-[48px] h-[48px] rounded-lg flex justify-center items-center">
                  <Image
                    className="cursor-pointer"
                    src={RedirectIcon}
                    width={32}
                    height={32}
                    alt={`Checkout ${s.name}`}
                  />
                </button>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </Container>
    </section>
  );
};

export default CategoriesSection;
