import React from "react";

// Components
import Text from "../../../layout/text";
import Container from "../../../layout/container";

const CategoriesSection = ({ className }) => {
  return (
    <section className={`bg-gray_dark ${className ?? ""}`}>
      <Container className="pt-[90px]">
        <div>
          <Text type="sectionHeading" className="text-white leading-[95%]">
            Categories
          </Text>
        </div>
      </Container>
    </section>
  );
};

export default CategoriesSection;
