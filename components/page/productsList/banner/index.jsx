import React from "react";
import Image from "next/image";

// Font families
import { Open_Sans } from "next/font/google";
const open_sans = Open_Sans({ subsets: ["hebrew"] });

// Images
import BannerImage from "../../../../assets/products/list-page/banner.png";

const Banner = ({ className = "" }) => {
  return (
    <section
      className={`relative w-full h-[27.4vw] rounded-[48px] overflow-hidden ${className}`}
    >
      <Image src={BannerImage} alt="Explore new drops 🔥" fill priority />
      <div className="absolute bottom-[6vw] left-[3vw] z-[1] flex flex-col gap-y-2">
        <h3
          className={`text-white text-[24px] leading-[33px] font-semibold ${open_sans.className}`}
        >
          Limited time only
        </h3>
        <h1 className="text-white text-[74px] leading-[88px] font-semibold">
          Get 30% off
        </h1>
        <p className="max-w-[490px] text-[20px] leading-[27px] font-normal text-gray">
          Sneakers made with your comfort in mind so you can put all of your
          focus into your next session.
        </p>
      </div>
    </section>
  );
};

export default Banner;
