import React from "react";

const Text = ({ type, className = "", children }) => {
  if (type == "sectionHeading") {
    return (
      <h2
        className={`${className} text-[8.4vw] sm:text-[6vw] md:text-[5.7vw] xl:text-[74px] uppercase font-semibold`}
      >
        {children}
      </h2>
    );
  }
};

export default Text;
