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
          className="cursor-pointer"
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
      <div className="w-[40%] flex justify-end items-center gap-x-10">
        <button>
          <Image
            className="cursor-pointer"
            src={SearchIcon}
            alt="Search your fav shoe now!"
            width={28}
            height={28}
          />
        </button>
        <button>
          <Image
            className="cursor-pointer"
            src={UserIcon}
            alt="View your profile"
            width={28}
            height={28}
          />
        </button>
        <button className="bg-yellow w-[32px] h-[32px] flex justify-center items-center rounded-full">
          <p
            className={`text-gray_dark text-base ${OpenSans.className} font-semibold cursor-pointer`}
          >
            0
          </p>
        </button>
      </div>
    </header>
  );
};

export default Header;
