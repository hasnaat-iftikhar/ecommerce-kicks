import React from "react";

// Components
import ProductCard from "../productCard";

const ProductCardsWrapper = ({
  productsData,
  className = "",
  productImageClassName = "",
}) => {
  return (
    <div className={`${className} grid`}>
      {productsData?.map((d, i) => (
        <ProductCard
          image={d.image}
          imageClassName={productImageClassName}
          name={d.name}
          price={d.price}
          key={i}
        />
      ))}
    </div>
  );
};

export default ProductCardsWrapper;
