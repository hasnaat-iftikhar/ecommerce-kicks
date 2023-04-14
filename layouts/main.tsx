import React from "react";

// Font families
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["hebrew"] });

const MainLayout = ({ className, children }) => {
  return (
    <main className={`${rubik.className} ${className ?? ""}`}>{children}</main>
  );
};

export default MainLayout;
