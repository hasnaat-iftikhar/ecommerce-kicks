import React from "react";

// Layout and components
import { MainLayout } from "../../layouts";
import {
  Banner,
  Container,
  Header,
  Filters,
  OpenSans,
  Products,
  Footer,
} from "../../components";

// Images
import DropProductImg1 from "../../assets/products/drops_adidas1.png";
import DropProductImg2 from "../../assets/products/drops_adidas2.png";
import DropProductImg3 from "../../assets/products/drops_adidas3.png";
import DropProductImg4 from "../../assets/products/drops_adidas4.png";

const ProductsList = () => {
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
      price: 135,
    },
    {
      image: DropProductImg4,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 135,
    },
    {
      image: DropProductImg4,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 135,
    },
    {
      image: DropProductImg4,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 135,
    },
    {
      image: DropProductImg4,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 135,
    },
  ];

  return (
    <MainLayout pageTitle="Kicks - All products" className="mt-8">
      <Container>
        <Header />
        <Banner className="mt-[80px]" />
        <div className="mt-[32px]">
          <h3 className="text-gray_dark text-[36px] leading-[42.66px] font-semibold">
            Life Style Shoes
          </h3>
          <p
            className={`text-[16px] text-gray_dark leading-[22px] font-semibold ${OpenSans.className}`}
          >
            122 items
          </p>
        </div>
        <section className="mt-[32px] flex flex-row gap-[19px]">
          <Filters className="max-w-[315px]" />
          <Products productsData={data} />
        </section>

        <Footer className="my-[68px]" />
      </Container>
    </MainLayout>
  );
};

export default ProductsList;
