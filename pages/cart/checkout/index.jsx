import React from "react";
import Link from "next/link";

// Layouts and Components
import { MainLayout } from "../../../layouts";
import {
  Container,
  OrderSummery,
  Header,
  Input,
  Button,
  Footer,
  ProductDetailCard,
} from "../../../components";

// Fonts
import { OpenSans, Rubik } from "../../../components/layout/font";

// Images
import DropProductImg1 from "../../../assets/products/drops_adidas1.png";
import { signinRoute } from "../../../constants/routes";

const SectionBox = ({ className = "", title, content, children }) => {
  return (
    <div className={`${className}`}>
      <h3
        className={`text-[32px] leading-[38px] font-semibold text-gray_dark ${Rubik.className}`}
      >
        {title}
      </h3>
      {content && (
        <p
          className={`mt-2 text-[16px] text-gray_dark leading-[21px] font-semibold opacity-80 ${OpenSans.className}`}
        >
          {content}
        </p>
      )}
      <div className="mt-8">{children}</div>
    </div>
  );
};

const Checkout = () => {
  return (
    <MainLayout pageTitle="Check our cart - Kicks" className="mt-8">
      <Container>
        <Header />

        <section className="mt-[42px] flex justify-between gap-[48px]">
          <div className="flex-1">
            <Link
              href={signinRoute}
              className={`underline text-blue_dark font-semibold text-[20px] leading-[28px] ${OpenSans.className}`}
            >
              Login and Checkout faster
            </Link>
            <div className="mt-8 flex flex-col gap-8">
              <SectionBox
                title="Contact Details"
                content="We will use these details to keep you inform about your delivery."
              >
                <div className="grid grid-cols-2 gap-5">
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email-address"
                    className="w-full border-gray_dark"
                    value=""
                    onChange={() => {}}
                  />
                </div>
              </SectionBox>
              <SectionBox title="Shipping Address">
                <div className="grid grid-cols-1 gap-5">
                  <div className="grid grid-cols-2 gap-5">
                    <Input
                      type="text"
                      placeholder="First name*"
                      name="first-name"
                      className="w-full border-gray_dark"
                      value=""
                      onChange={() => {}}
                    />
                    <Input
                      type="text"
                      placeholder="Last name*"
                      name="last-name"
                      className="w-full border-gray_dark"
                      value=""
                      onChange={() => {}}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Find Delivery Address*"
                      name="address"
                      className="w-full border-gray_dark"
                      value=""
                      onChange={() => {}}
                    />
                    <p className="mt-1 text-[12px] leading-[14.52px] text-[#36323B]">
                      Start typing your street address or zip code for
                      suggestion
                    </p>
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Phone Number*"
                      name="phone-number"
                      className="w-full border-gray_dark"
                      value=""
                      onChange={() => {}}
                    />
                    <p className="mt-1 text-[12px] leading-[14.52px] text-[#36323B]">
                      E.g. (123) 456-7890
                    </p>
                  </div>
                </div>
              </SectionBox>
            </div>
          </div>
          <div className="max-w-[466px] w-full flex flex-col gap-[47px]">
            <OrderSummery className="bg-white p-[24px] rounded-[24px]" />
            <div className="flex flex-col gap-6 bg-white p-6 rounded-[16px]">
              <h6 className="text-[24px] leading-[28px] text-gray_dark font-semibold">
                Order details
              </h6>

              <ProductDetailCard
                id={1}
                image={DropProductImg1}
                title="DROPSET TRAINER SHOES"
                details={[
                  "Men’s Road Running Shoes ",
                  "Enamel Blue/ University White",
                ]}
                size={10}
                quantity={1}
                price={130}
              />
            </div>
          </div>
        </section>
        <section className="mt-[64px] max-w-[782px]">
          <SectionBox title="Delivery Options">
            <div className="bg-white p-4 flex flex-row justify-between items-start rounded-[16px]">
              <div className="flex flex-col gap-2">
                <h4 className="text-[24px] leading-[28px] text-gray_dark font-semibold">
                  Standard Delivery
                </h4>
                <p
                  className={`text-[16px] leading-[21px] font-semibold opacity-80 ${OpenSans.className}`}
                >
                  Enter your address to see when you’ll get your order
                </p>
              </div>
              <h5 className="text-[20px] leading-[23px] font-semibold text-blue">
                $6.00
              </h5>
            </div>
          </SectionBox>
          <Button className="mt-[44px] max-w-[362px] bg-gray_dark text-white">
            Review and pay
          </Button>
        </section>
        <Footer className="mt-[48px] mb-[80px]" />
      </Container>
    </MainLayout>
  );
};

export default Checkout;
