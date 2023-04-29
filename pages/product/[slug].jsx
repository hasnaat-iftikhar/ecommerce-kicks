import React from "react";

// Layout and components
import { MainLayout } from "../../layouts";
import { Container, DetailView, Header, ImageGallery } from "../../components";

// Images
import GalleryImg1 from "../../assets/products/detail-page/drops_adidas1_1.png";
import GalleryImg2 from "../../assets/products/detail-page/drops_adidas1_2.png";
import GalleryImg3 from "../../assets/products/detail-page/drops_adidas1_3.png";
import GalleryImg4 from "../../assets/products/detail-page/drops_adidas1_4.png";

const ProductDetail = () => {
  const images = [
    {
      image: GalleryImg1,
    },
    {
      image: GalleryImg2,
    },
    {
      image: GalleryImg3,
    },
    {
      image: GalleryImg4,
    },
  ];

  const colorVarients = ["#253043", "#707E6E", "#afe714"];

  const sizeVarients = [
    {
      value: 25,
      isAvailable: true,
    },
    {
      value: 26,
      isAvailable: false,
    },
    {
      value: 27,
      isAvailable: false,
    },
    {
      value: 28,
      isAvailable: false,
    },
    {
      value: 29,
      isAvailable: true,
    },
    {
      value: 30,
      isAvailable: true,
    },
    {
      value: 31,
      isAvailable: true,
    },
    {
      value: 32,
      isAvailable: true,
    },
    {
      value: 33,
      isAvailable: true,
    },
  ];

  return (
    <MainLayout pageTitle="Kicks - The name of the product" className="mt-8">
      <Container>
        <Header />
        <section
          id="product-detail"
          className="mt-[32px] flex flex-row justify-between items-start gap-4"
        >
          <ImageGallery galleryImages={images} productName="My product name" />
          <DetailView
            productName="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
            price={125}
            colorVarients={colorVarients}
            sizeVarients={sizeVarients}
            about={
              <span>
                Shadow Navy / Army Green
                <br />
                <br />
                This product is excluded from all promotional discounts and
                offers.
              </span>
            }
          />
        </section>
      </Container>
    </MainLayout>
  );
};

export default ProductDetail;
