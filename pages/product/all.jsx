import React from "react";

// Layout and components
import { MainLayout } from "../../layouts";
import { Banner, Container, Header } from "../../components";

const ProductsList = () => {
  return (
    <MainLayout pageTitle="Kicks - All products" className="mt-8">
      <Container>
        <Header />
        <Banner className="mt-[80px]" />
      </Container>
    </MainLayout>
  );
};

export default ProductsList;
