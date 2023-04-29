import React from "react";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Components
import ProductCard from "../productCard";

const ProductCardsCarousel = ({ className = "", productsData = [] }) => {
  return (
    <section
      id="product-cards-carousel-section"
      className={`relative flex flex-col gap-y-8 ${className}`}
    >
      <h3 className="text-[48px] leading-[56.88px] text-gray_dark font-semibold">
        Categories
      </h3>
      <Splide options={{ perPage: 4, perMove: 1, gap: "16px" }}>
        {productsData?.map((p, i) => (
          <SplideSlide key={i}>
            <ProductCard
              className=""
              image={p.image}
              name={p.name}
              price={p.price}
              key={i}
            />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default ProductCardsCarousel;
