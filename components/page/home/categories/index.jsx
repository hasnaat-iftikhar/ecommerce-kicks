import React from "react";

// Components
import Text from "../../../layout/text";
import Container from "../../../layout/container";

const CategoriesSection = ({ className }) => {
  return (
    <section className={`bg-gray_dark ${className ?? ""}`}>
      <Container>
        <Text className="text-white leading-[95%]">Categories</Text>
      </Container>
    </section>
  );
};

export default CategoriesSection;
