import React from "react";

// Components
import ProductCardsWrapper from "../../../layout/productCardsWrapper";

// Images
import DropProductImg1 from "../../../../assets/products/drops_adidas1.png";
import DropProductImg2 from "../../../../assets/products/drops_adidas2.png";
import DropProductImg3 from "../../../../assets/products/drops_adidas3.png";
import DropProductImg4 from "../../../../assets/products/drops_adidas4.png";

const Products = () => {
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

  return <ProductCardsWrapper productsData={data} columns="3" />;
};

export default Products;
