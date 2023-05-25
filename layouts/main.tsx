import React from "react";
import Head from "next/head";

// Font families
import { Rubik } from "../components/layout/font";

const MainLayout = ({ pageTitle, className, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle ?? "Kicks - Ecommerce application"}</title>
        <meta
          name="description"
          content="Kicks, an open-source e-commerce app built with Next.js and Tailwind CSS. It's fully customizable with product pages, shopping cart, and checkout functionality. Our code follows best practices, ensuring it's bug-free and easy to maintain!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${Rubik.className} ${className ?? ""}`}>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
