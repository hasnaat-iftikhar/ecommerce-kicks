import React from "react";
import Image from "next/image";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Components
import Text from "../../../layout/text";
import Container from "../../../layout/container";

// Icons and Images
import RedirectIcon from "../../../../assets/icons/arrowTopRight.svg";
import BasketBallCategoryImage from "../../../../assets/products/categories_basketBallShoes.png";
import LifeStyleShoesCategoryImage from "../../../../assets/products/categories_lifestyleShoes.png";

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
      <Container className="relative mt-[90px] flex flex-col gap-y-[44px] xl:gap-y-16">
        <Text type="sectionHeading" className="text-white leading-[95%]">
          Categories
        </Text>

        <Splide
          options={{
            perPage: 2,
            perMove: 1,
            breakpoints: {
              640: {
                perPage: 1,
              },
            },
          }}
        >
          {categoriesInfo?.map((s, i) => (
            <SplideSlide
              key={i}
              className={`${
                i % 2 === 0 ? "bg-[#ECEEF0]" : "bg-[#F6F6F6]"
              } relative w-[38vw] h-[100vw] sm:h-[50vw] md:h-[46vw] lg:h-[40vw] xxl:h-[600px]`}
            >
              <Image
                src={s.image}
                alt={s.name}
                fill
                className="px-[30px] md:px-[50px] lg:px-[70px] xl:px-[100px]"
              />
              <div className="flex flex-row justify-between items-end absolute bottom-[30px] w-full px-[40px] md:px-[48px]">
                <h4 className="w-[min-content] text-[6vw] leading-[6.2vw] sm:text-[3vw] sm:leading-[3.2vw] lg:text-[28px] lg:leading-[28px] xl:text-[30px] xl:leading-[30px] xxl:text-4xl font-semibold text-gray_dark uppercase">
                  {s.name}
                </h4>
                <button className="w-[46px] h-[46px] sm:w-[36px] sm:h-[36px] md:w-[44px] md:h-[44px] xl:w-[48px] xl:h-[48px] rounded-lg flex justify-center items-center cursor-pointer bg-gray_dark ">
                  <Image
                    className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] cursor-pointer"
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
