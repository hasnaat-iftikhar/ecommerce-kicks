import React from "react";

const Text = ({ type, className, children }) => {
  if (type == "sectionHeading") {
    return (
      <h2 className={`${className ?? ""} text-[74px] uppercase font-semibold`}>
        {children}
      </h2>
    );
  }
};

export default Text;
