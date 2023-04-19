import React from "react";
import Image from "next/image";

// Components
import Button from "../../../layout/button";

// Images
import BannerImage1 from "../../../../assets/products/heroBanner1.png";
import BannerImage2 from "../../../../assets/products/heroBanner2.png";
import BannerImage3 from "../../../../assets/products/heroBanner3.png";

const ImageSwitcher = ({ className }) => {
  return (
    <div className={`flex flex-col gap-y-4 ${className ?? ""}`}>
      <Image
        src={BannerImage2}
        className="border-[3px] border-gray rounded-[32px]"
        alt="NIKE AIR MAX - Another Image"
        width={160}
        height={160}
      />
      <Image
        src={BannerImage3}
        className="border-[3px] border-gray rounded-[32px]"
        alt="NIKE AIR MAX - Another Image"
        width={160}
        height={160}
      />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section>
      <h1 className="w-fit mx-auto my-6 uppercase font-bold text-center text-[15.4vw] xxl:text-[224px] leading-tight text-gray_dark">
        Do it <span className="text-blue">right</span>
      </h1>
      <div className="w-[92vw] xxl:w-full h-[53.6vw] xxl:h-[750px] rounded-[64px] relative overflow-hidden flex justify-start items-end">
        <div className="bg-gray_dark absolute top-[166px] left-[-84px] transform -rotate-90 py-6 px-[25px] rounded-b-2xl">
          <p className="text-white text-[16px] leading-[18.96px] font-semibold">
            Nike product of the year
          </p>
        </div>

        <div className="absolute top-0 right-0 left-0 bottom-0 z-[-1]">
          <Image
            src={BannerImage1}
            priority
            fill
            alt="NIKE AIR MAX - Banner image"
          />
        </div>

        <ImageSwitcher className="absolute bottom-[32px] right-[32px]" />

        <div className="w-[490px] m-12">
          <h2 className="uppercase w-fit text-[74px] leading-tight font-semibold text-white">
            NIKE AIR MAX
          </h2>
          <p className="text-[24px] leading-[32px] text-gray">
            Nike introducing the new air max for everyone&apos;s comfort
          </p>
          <Button className="max-w-[138px] mt-6 text-white bg-blue">
            Shop now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
