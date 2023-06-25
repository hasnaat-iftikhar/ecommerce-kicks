import React from "react";

// Components
import ReviewCard from "../reviewCard";

const ReviewCardsWrapper = ({ reviews, className = "" }) => {
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {reviews?.map((r, i) => (
        <ReviewCard
          className="h-[52vw] lg:h-[39vw] max-h-[550px] grow"
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
