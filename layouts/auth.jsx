import React from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";

// Components
import { Container, Footer, Header } from "../components";

// Font families
import { OpenSans, Rubik } from "../components/layout/font";
import { forgotPassRoute, signinRoute, signupRoute } from "../constants/routes";
import Link from "next/link";

const AuthLayout = ({ pageTitle, className, children }) => {
  const currentPath = usePathname();

  const getPageTitle = () => {
    return currentPath === signinRoute
      ? "login"
      : currentPath === signupRoute
      ? "Signup"
      : currentPath === forgotPassRoute
      ? "Reset your password"
      : "";
  };

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
        <Container>
          <Header className="mt-[32px]" />
          <section className="mt-[32px] flex justify-between items-start gap-[48px]">
            <div className="flex-1">
              <h2 className="text-[32px] leading-[38px] font-semibold text-gray_dark">
                {getPageTitle()}
              </h2>
              {currentPath === signinRoute && (
                <Link
                  href={forgotPassRoute}
                  className={`underline mt-2 text-[16px] leading-[22px] font-semibold ${OpenSans.className}`}
                >
                  Forgot your password
                </Link>
              )}

              {children}
              {currentPath === signinRoute && (
                <p
                  className={`mt-[24px] text-[16px] leading-[21px] text-gray_dark font-semibold ${OpenSans.className}`}
                >
                  By clicking <span className="underline">Log In</span> you
                  agree to our website KicksClub Terms & Conditions, Kicks
                  Privacy Notice and Terms & Conditions.
                </p>
              )}
              <p
                className={`mt-[24px] text-[16px] leading-[21px] text-gray_dark font-semibold ${OpenSans.className}`}
              >
                {currentPath === signinRoute ? (
                  <span>
                    Want to create an account?{" "}
                    <Link className="text-blue underline" href={signupRoute}>
                      Signup
                    </Link>
                  </span>
                ) : currentPath === signupRoute ? (
                  <span>
                    Already have an account?{" "}
                    <Link className="text-blue underline" href={signinRoute}>
                      Signin
                    </Link>
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div className="max-w-[704px] bg-white rounded-[24px] p-[24px] flex flex-col gap-[24px]">
              <h2 className="text-gray_dark tex-[36px] leading-[42px] font-semibold">
                Join Kicks Club Get Rewarded Today.
              </h2>
              <p
                className={`opacity-80 text-[16px] leading-[21px] text-gray_dark font-semibold ${OpenSans.className}`}
              >
                As kicks club member you get rewarded with what you love for
                doing what you love. Sign up today and receive immediate access
                to these Level 1 benefits:
              </p>
              <ul className="ml-[20px]">
                {[
                  "Free shipping​",
                  "A 15% off voucher for your next purchase​",
                  "Access to Members Only products and sales​",
                  "Access to adidas Running and Training apps​",
                  "Special offers and promotions​",
                ].map((list, i) => (
                  <li
                    style={{ listStyle: "initial" }}
                    className={`opacity-80 text-[16px] leading-[21px] text-gray_dark font-semibold ${OpenSans.className}`}
                    key={i}
                  >
                    {list}
                  </li>
                ))}
              </ul>
              <p
                className={`opacity-80 text-[16px] leading-[21px] text-gray_dark font-semibold ${OpenSans.className}`}
              >
                Join now to start earning points, reach new levels and unlock
                more rewards and benefits from adiClub.​
              </p>
            </div>
          </section>
          <Footer className="mt-[55px] mb-[80px]" />
        </Container>
      </main>
    </>
  );
};

export default AuthLayout;
