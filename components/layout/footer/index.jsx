import React from "react";
import Image from "next/image";

// Components
import Button from "../button";
import Input from "../input";

// Images
import NewsLetterLogo from "../../../assets/logo_newsletter.svg";

const Footer = () => {
  return (
    <div className="bg-blue pt-16 px-[72px]">
      <div className="flex flex-row items-center">
        <div className="flex-1">
          <h2 className="max-w-[510px] uppercase text-[48px] font-semibold text-white leading-[57px]">
            Join our KicksPlus Club & get 15% off
          </h2>
          <p className="mt-4 text-gray text-[20px] leading-[27px] font-semibold">
            Sign up for free! Join the community.
          </p>
          <form className="mt-8 max-w-[448px] flex flex-row gap-x-1">
            <Input
              name="email-address"
              placeholder="Email address"
              type="email"
              className="border-white flex-1 placeholder-[#E7E7E3]"
            />
            <Button className="max-w-[102px] bg-gray_dark text-white">
              Submit
            </Button>
          </form>
        </div>
        <div className="relative w-[367px] h-[112px]">
          <Image src={NewsLetterLogo} alt="Kicks - Ecommerce site" fill />
        </div>
      </div>
    </div>
  );
};

export default Footer;
