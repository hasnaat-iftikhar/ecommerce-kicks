import React from "react";
import Link from "next/link";
import Image from "next/image";

// Font families
import { Open_Sans } from "next/font/google";
const open_sans = Open_Sans({ subsets: ["hebrew"] });

// Images
import HeaderLogo from "../../../assets/logo_header.svg";
import SearchIcon from "../../../assets/icons/search.svg";
import UserIcon from "../../../assets/icons/user.svg";

const Header = ({ className }) => {
  const menu = [
    {
      name: "New Drops 🔥",
      link: "/",
    },
    {
      name: "Men",
      link: "/",
    },
    {
      name: "Women",
      link: "/",
    },
  ];

  return (
    <header
      className={`bg-fa_white p-8 rounded-3xl flex justify-between items-center ${
        className ?? ""
      }`}
    >
      <div className="w-[40%] flex justify-start items-center gap-x-10">
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
      <div className="w-[20%] flex justify-center items-center">
        <Image
          src={HeaderLogo}
          alt="Kicks - Ecommerce store"
          width={128}
          height={32}
          priority={true}
          as="image"
        />
      </div>
      <div className="w-[40%] flex justify-end items-center gap-x-10">
        <button>
          <Image
            src={SearchIcon}
            alt="Search your fav shoe now!"
            width={28}
            height={28}
          />
        </button>
        <button>
          <Image
            src={UserIcon}
            alt="View your profile"
            width={28}
            height={28}
          />
        </button>
        <button className="bg-yellow w-[32px] h-[32px] flex justify-center items-center rounded-full">
          <p
            className={`text-gray_dark text-base ${open_sans.className} font-semibold`}
          >
            0
          </p>
        </button>
      </div>
    </header>
  );
};

export default Header;
