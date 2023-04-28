import React from "react";

// Layout and components
import { MainLayout } from "../../layouts";
import { Container, Header } from "../../components";

const ProductDetail = () => {
  return (
    <MainLayout pageTitle="Kicks - The name of the product" className="mt-8">
      <Container>
        <Header />
        <p>My product detail page</p>
      </Container>
    </MainLayout>
  );
};

export default ProductDetail;
