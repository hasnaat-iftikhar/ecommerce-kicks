// Fonts
import LocalFont from "next/font/local";

const Rubik = LocalFont({
  src: [
    {
      path: "../../../assets/fonts/Rubik-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/Rubik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/Rubik-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/Rubik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/Rubik-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/Rubik-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

const OpenSans = LocalFont({
  src: [
    {
      path: "../../../assets/fonts/OpenSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/OpenSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/OpenSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/OpenSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/OpenSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/OpenSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export { Rubik, OpenSans };
