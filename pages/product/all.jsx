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

const ProductsList = () => {
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
          <Products />
        </section>
        <Footer className="my-[68px]" />
      </Container>
    </MainLayout>
  );
};

export default ProductsList;
