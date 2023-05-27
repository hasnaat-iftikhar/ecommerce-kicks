import React from "react";

// Components
import ProductCard from "../productCard";

const ProductCardsWrapper = ({
  productsData,
  columns = 4,
  gap = "16px",
  className = "",
}) => {
  const gridStyles = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: gap,
  };

  return (
    <div style={gridStyles} className={className}>
      {productsData?.map((d, i) => (
        <ProductCard image={d.image} name={d.name} price={d.price} key={i} />
      ))}
    </div>
  );
};

export default ProductCardsWrapper;
