import React from "react";

// Components
import Button from "../../../layout/button";
import Text from "../../../layout/text";

const NewDropsSection = ({ className }) => {
  return (
    <section className={`${className ?? ""}`}>
      <div className="flex justify-between items-end">
        <Text type="sectionHeading" className="max-w-[589px]">
          Don’t miss out new drops
        </Text>
        <Button className="max-w-[190px] mt-6 text-white bg-blue">
          Shop New Drops
        </Button>
      </div>
    </section>
  );
};

export default NewDropsSection;
