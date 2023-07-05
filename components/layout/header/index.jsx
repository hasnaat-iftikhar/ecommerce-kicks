import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Font families
import { OpenSans } from "../font";

// Images
import HeaderLogo from "../../../assets/logo_header.svg";
import SearchIcon from "../../../assets/icons/search.svg";
import UserIcon from "../../../assets/icons/user.svg";

const Header = ({ className }) => {
  const router = useRouter();

  const menu = [
    {
      name: "New Drops 🔥",
      link: "/product/all",
    },
  ];

  return (
    <header
      className={`bg-fa_white rounded-3xl flex justify-between items-center p-[28px] lg:p-8  ${className}`}
    >
      <div className="w-[40%] justify-start items-center gap-x-10 hidden sm:flex">
        {menu.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            className="font-semibold text-base text-gray_dark"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="sm:w-[20%] flex justify-center items-center">
        <Image
          className="cursor-pointer w-[80px] h-[auto] sm:w-[128px] sm:h-[32px]"
          src={HeaderLogo}
          alt="Kicks - Ecommerce store"
          width={128}
          height={32}
          priority
          as="image"
          onClick={() => {
            router.push("/");
          }}
        />
      </div>
      <div className="w-[40%] flex justify-end items-center gap-x-[28px] sm:gap-x-[20px] md:gap-x-[28px] lg:gap-x-10">
        <button>
          <Image
            className="cursor-pointer w-[22px] h-[22px] md:w-[28px] md:h-[28px]"
            src={SearchIcon}
            alt="Search your fav shoe now!"
            width={28}
            height={28}
          />
        </button>
        <button>
          <Image
            className="cursor-pointer w-[22px] h-[22px] md:w-[28px] md:h-[28px]"
            src={UserIcon}
            alt="View your profile"
            width={28}
            height={28}
          />
        </button>
        <Link
          href="/cart"
          className="bg-yellow w-[28px] h-[28px] md:w-[32px] md:h-[32px] flex justify-center items-center rounded-full"
        >
          <p
            className={`text-gray_dark text-base ${OpenSans.className} font-semibold cursor-pointer`}
          >
            0
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
