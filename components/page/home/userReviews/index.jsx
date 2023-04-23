import React from "react";

// Components
import Button from "../../../layout/button";
import Text from "../../../layout/text";
import Container from "../../../layout/container";
import ReviewCardsWrapper from "../../../layout/reviewCardsWrapper";

// Images
import Reviews1 from "../../../../assets/products/reviews1.png";
import Reviews2 from "../../../../assets/products/reviews2.png";
import Reviews3 from "../../../../assets/products/reviews3.png";
import Person1 from "../../../../assets/persons/person1.png";
import Person2 from "../../../../assets/persons/person2.png";
import Person3 from "../../../../assets/persons/person3.png";

const ReviewsSection = ({ className }) => {
  const reviews = [
    {
      image: Reviews1,
      feedback: "Good Quality",
      description: "I highly recommend shopping from kicks",
      rating: 5,
      userImage: Person1,
    },
    {
      image: Reviews2,
      feedback: "Good Quality",
      description: "I highly recommend shopping from kicks",
      rating: 5,
      userImage: Person2,
    },
    {
      image: Reviews3,
      feedback: "Good Quality",
      description: "I highly recommend shopping from kicks",
      rating: 5,
      userImage: Person3,
    },
  ];

  return (
    <section className={`${className ?? ""}`}>
      <Container>
        <div className="flex justify-between items-end">
          <Text
            type="sectionHeading"
            className="max-w-[589px] leading-[95%] text-gray_dark"
          >
            Reviews
          </Text>
          <Button className="max-w-[121px] mt-6 text-white bg-blue">
            See all
          </Button>
        </div>
        <ReviewCardsWrapper className="mt-12" reviews={reviews} />
      </Container>
    </section>
  );
};

export default ReviewsSection;
