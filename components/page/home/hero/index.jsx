import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Components
import Button from "../../../layout/button";
import Text from "../../../layout/text";

// Images
import BannerImage1 from "../../../../assets/products/heroBanner1.png";
import BannerImage2 from "../../../../assets/products/heroBanner2.png";
import BannerImage3 from "../../../../assets/products/heroBanner3.png";

// Font families
import { Rubik } from "../../../layout/font";

const ImageSwitcher = ({ className = "" }) => {
  return (
    <div className={`flex flex-col gap-y-4 ${className}`}>
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
  const router = useRouter();

  return (
    <section>
      <h1
        className={`w-fit mx-auto my-6 uppercase font-bold text-center text-[15.4vw] xxl:text-[224px] leading-[170px] xl:leading-tight text-gray_dark ${Rubik.className}`}
      >
        Do it <span className="text-blue">right</span>
      </h1>
      <div className="w-[92vw] xxl:w-full h-[53.6vw] xxl:h-[750px] lg:rounded-[48px] xl:rounded-[64px] relative overflow-hidden flex justify-start items-end">
        <div
          className="
        bg-gray_dark absolute py-[24px] px-[25px] rounded-b-2xl 
        top-[0px] left-[48px] transform rotate-0 
        xl:top-[166px] xl:left-[-84px] xl:transform xl:-rotate-90
        "
        >
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

        <div className="w-[390px] xl:w-[490px] m-12">
          <Text
            type="sectionHeading"
            className="max-w-[589px] leading-[88px] text-white"
          >
            NIKE AIR MAX
          </Text>
          <p className="text-[20px] leading-[28px] xl:text-[24px] xl:leading-[32px] text-gray">
            Nike introducing the new air max for everyone&apos;s comfort
          </p>
          <Button
            onClick={() => {
              router.push("/product/all");
            }}
            className="max-w-[138px] mt-6 text-white bg-blue"
          >
            Shop now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
