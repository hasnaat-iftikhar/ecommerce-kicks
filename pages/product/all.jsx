import React from "react";

// Font families
import { Filters, OpenSans } from "../../components";

// Layout and components
import { MainLayout } from "../../layouts";
import { Banner, Container, Header } from "../../components";

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
        <section className="mt-[32px]">
          <h3 className="text-[24px] leading-[28px] text-gray_dark font-semibold">
            Filters
          </h3>
          <Filters className="mt-[24px] max-w-[315px]" />
        </section>
      </Container>
    </MainLayout>
  );
};

export default ProductsList;
