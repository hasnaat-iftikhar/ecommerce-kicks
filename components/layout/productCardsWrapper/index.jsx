import React from "react";

// Components
import ProductCard from "../productCard";

const ProductCardsWrapper = ({ productsData, className }) => {
  return (
    <div
      className={`flex flex-wrap justify-between gap-x-4 ${className ?? ""}`}
    >
      {productsData?.map((d, i) => (
        <ProductCard
          className="basis-[23%] grow"
          image={d.image}
          name={d.name}
          price={d.price}
          key={i}
        />
      ))}
    </div>
  );
};

export default ProductCardsWrapper;
