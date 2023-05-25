import React from "react";

// Layouts and Components
import { MainLayout } from "../../layouts";
import {
  Bag,
  Container,
  Footer,
  Header,
  OpenSans,
  ProductCardsCarousel,
} from "../../components";

// Images
import DropProductImg1 from "../../assets/products/drops_adidas1.png";
import DropProductImg2 from "../../assets/products/drops_adidas2.png";
import DropProductImg3 from "../../assets/products/drops_adidas3.png";
import DropProductImg4 from "../../assets/products/drops_adidas4.png";

const Cart = () => {
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

  return (
    <MainLayout pageTitle="Check our cart - Kicks" className="mt-8">
      <Container>
        <Header />
        <div className="mt-[32px] flex flex-col gap-2">
          <h2 className="text-[32px] leading-[38px] font-semibold">
            Saving to celebrate{" "}
          </h2>
          <p
            className={`text-[14px] leading-[19px] font-semibold text-gray_dark opacity-80 ${OpenSans.className}`}
          >
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while suppiles last. No code needed.
          </p>
          <p
            className={`text-[14px] leading-[19px] font-semibold text-gray_dark opacity-80 ${OpenSans.className}`}
          >
            Join us or Sign-in
          </p>
          <Bag />
        </div>
        <ProductCardsCarousel className="mt-[40px]" productsData={data} />
        <Footer className="mt-[78px] mb-[68px]" />
      </Container>
    </MainLayout>
  );
};

export default Cart;
