import React from "react";
import Image from "next/image";
import Link from "next/link";

// Font families
import { Open_Sans } from "next/font/google";
const open_sans = Open_Sans({ subsets: ["hebrew"] });

// Components
import Button from "../button";
import Input from "../input";

// Images
import NewsLetterLogo from "../../../assets/logo_newsletter.svg";
import FacebookIcon from "../../../assets/icons/socialFacebook.svg";
import InstagramIcon from "../../../assets/icons/socialInstagram.svg";
import TwitterIcon from "../../../assets/icons/socialTwitter.svg";
import TiktokIcon from "../../../assets/icons/socialTiktok.svg";
import FooterLogo from "../../../assets/logo_footer.svg";

const ColumnHeading = ({ className, size, children }) => (
  <h5
    className={`text-yellow font-semibold ${
      size === "lg"
        ? "text-[36px] leading-[42.66px]"
        : size === "md"
        ? "text-[24px] leading-[28px]"
        : ""
    } ${className ?? ""}`}
  >
    {children}
  </h5>
);

const ColumnText = ({ className, children }) => (
  <p
    className={`text-[20px] leading-[27px] text-gray font-medium ${
      open_sans.className
    } ${className ?? ""}`}
  >
    {children}
  </p>
);

const Footer = ({ className }) => {
  const categoriesCol = [
    {
      name: "Runners",
      url: "/",
    },
    {
      name: "Sneakers",
      url: "/",
    },
    {
      name: "Basketball",
      url: "/",
    },
    {
      name: "Outdoor",
      url: "/",
    },
    {
      name: "Golf",
      url: "/",
    },
    {
      name: "Hiking",
      url: "/",
    },
  ];

  const companyCol = [
    {
      name: "About",
      url: "/",
    },
    {
      name: "Contact",
      url: "/",
    },
    {
      name: "Blogs",
      url: "/",
    },
  ];

  const socialLinks = [
    {
      icon: FacebookIcon,
      name: "Facebook",
      url: "/",
    },
    {
      icon: InstagramIcon,
      name: "Instagram",
      url: "/",
    },
    {
      icon: TwitterIcon,
      name: "Twitter",
      url: "/",
    },
    {
      icon: TiktokIcon,
      name: "Tiktok",
      url: "/",
    },
  ];

  return (
    <div
      className={`relative bg-blue rounded-[48px] overflow-hidden ${
        className ?? ""
      }`}
    >
      <div className="pt-16  px-[72px] flex flex-row items-center">
        <div className="flex-1">
          <h2 className="max-w-[510px] uppercase text-[48px] font-semibold text-white leading-[57px]">
            Join our KicksPlus Club & get 15% off
          </h2>
          <ColumnText className="mt-4">
            Sign up for free! Join the community.
          </ColumnText>
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

      <div className="mt-[40px] pb-[305px] bg-gray_dark rounded-[48px] p-10 flex justify-between gap-x-[122px]">
        <div className="max-w-[446px] w-full flex flex-col gap-y-1">
          <ColumnHeading size="lg">About us</ColumnHeading>
          <ColumnText>
            We are the biggest hyperstore in the universe. We got you all cover
            with our exclusive collections and latest drops.
          </ColumnText>
        </div>
        <div className="flex-1 flex justify-between">
          <div className="flex flex-col gap-y-4">
            <ColumnHeading size="md">Categories</ColumnHeading>
            <div className="flex flex-col gap-y-2">
              {categoriesCol.map((c, i) => (
                <Link href={c.url} key={i}>
                  <ColumnText className="cursor-pointer">{c.name}</ColumnText>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <ColumnHeading size="md">Company</ColumnHeading>
            <div className="flex flex-col gap-y-2">
              {companyCol.map((c, i) => (
                <Link href={c.url} key={i}>
                  <ColumnText className="cursor-pointer">{c.name}</ColumnText>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <ColumnHeading size="md">Follow us</ColumnHeading>
            <div className="flex flex-row gap-x-6">
              {socialLinks.map((s, i) => (
                <Link href={s.url} key={i}>
                  <Image
                    className="cursor-pointer"
                    src={s.icon}
                    alt={s.name}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full px-[29px] h-[208px]">
        <Image src={FooterLogo} alt="Kicks - Ecommerce website" fill />
      </div>
    </div>
  );
};

export default Footer;
