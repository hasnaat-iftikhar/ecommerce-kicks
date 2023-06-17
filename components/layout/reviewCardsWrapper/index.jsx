import React from "react";

// Components
import ReviewCard from "../reviewCard";

const ReviewCardsWrapper = ({ reviews, className = "" }) => {
  return (
    <div className={`flex flex-wrap justify-between gap-x-4 ${className}`}>
      {reviews?.map((r, i) => (
        <ReviewCard
          className="basis-[32%] h-[37vw] xl:h-[35vw] max-h-[504px] grow"
          image={r.image}
          feedback={r.feedback}
          description={r.description}
          rating={r.rating}
          userImage={r.userImage}
          key={i}
        />
      ))}
    </div>
  );
};

export default ReviewCardsWrapper;
