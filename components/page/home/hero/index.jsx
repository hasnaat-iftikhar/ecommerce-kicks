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
        className={`
          w-fit mx-auto my-6 uppercase font-bold text-center text-gray_dark
          text-[15.4vw] leading-[100%]
          sm:leading-[90px]
          md:leading-[140px] 
          xxl:text-[224px] lg:leading-[170px] 
          xl:leading-tight 
          ${Rubik.className}`}
      >
        Do it <span className="text-blue">right</span>
      </h1>
      <div className="w-full sm:w-[92vw] xxl:w-full h-[86vw] sm:h-[53.6vw] xxl:h-[750px] rounded-[30px] lg:rounded-[48px] xl:rounded-[64px] relative overflow-hidden flex justify-start items-end">
        <div
          className="
          hidden sm:absolute
        bg-gray_dark px-[25px] rounded-b-2xl
          py-[20px] top-[130px] right-[-84px] trasnform rotate-90
          lg:py-[24px] lg:top-[0px] lg:left-[48px] lg:right-[auto] lg:transform lg:rotate-0
          xl:top-[166px] xl:left-[-84px] xl:transform xl:-rotate-90
        "
        >
          <p
            className="
            text-white leading-[18.96px] font-semibold
            text-[15px]
            lg:text-[16px] 
          "
          >
            Nike product of the year
          </p>
        </div>

        <div className="absolute top-0 right-0 left-0 bottom-0 z-[-1]">
          <Image
            src={BannerImage1}
            priority
            fill
            alt="NIKE AIR MAX - Banner image"
            className="object-cover sm:object-fill"
          />
        </div>

        <ImageSwitcher className="hidden lg:block absolute bottom-[32px] right-[32px]" />

        <div className="w-[58vw] sm:w-[40vw] md:w-[38vw] m-[30px] sm:m-[40px] lg:w-[390px] lg:m-12 xl:w-[490px]">
          <Text
            type="sectionHeading"
            className="max-w-[589px] text-white leading-[normal] lg:leading-[88px]"
          >
            NIKE AIR MAX
          </Text>
          <p className="text-[16px] leading-[20bpx] sm:text-[18px] sm:leading-[24px] lg:text-[20px] lg:leading-[28px] xl:text-[24px] xl:leading-[32px] text-gray">
            Nike introducing the new air max for everyone&apos;s comfort
          </p>
          <Button
            onClick={() => {
              router.push("/product/all");
            }}
            className="max-w-[138px] text-white bg-blue mt-[20px] lg:mt-6"
          >
            Shop now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
