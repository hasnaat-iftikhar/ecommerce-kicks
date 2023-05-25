import React from "react";

// Components
import ProductCard from "../productCard";

const ProductCardsWrapper = ({ productsData, columns = 4, className }) => {
  return (
    <div className={`grid grid-cols-${columns} gap-4 ${className ?? ""}`}>
      {productsData?.map((d, i) => (
        <ProductCard image={d.image} name={d.name} price={d.price} key={i} />
      ))}
    </div>
  );
};

export default ProductCardsWrapper;
