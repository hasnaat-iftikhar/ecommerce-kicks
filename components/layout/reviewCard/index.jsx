import Image from "next/image";
import React from "react";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = Math.floor(5 - rating);

  const starIcons = [];

  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<i className="fa fa-star" key={`star-${i}`} />);
  }

  if (hasHalfStar) {
    starIcons.push(<i className="fa fa-star-half-o" key="half-star" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    starIcons.push(<i className="fa fa-star-o" key={`empty-star-${i}`} />);
  }

  return <div>{starIcons}</div>;
};

const ReviewCard = ({
  className,
  feedback,
  description,
  rating,
  image,
  userImage,
}) => {
  return (
    <div
      className={`rounded-[32px] overflow-hidden flex flex-col ${
        className ?? ""
      }`}
    >
      <div className="bg-white p-8 flex flex-row justify-start items-start gap-x-2">
        <div className="flex-1">
          <h4>{feedback ?? "Feedback Title"}</h4>
          <p>{description ?? "Here will be the description of the feedback"}</p>
          <StarRating rating={rating} />
        </div>
        <div className="w-fit">
          <Image src={userImage} alt="User image" width={64} height={64} />
        </div>
      </div>
      <div className="relative w-full h-[325px]">
        <Image src={image} alt={`Kicks product image - ${description}`} fill />
      </div>
    </div>
  );
};

export default ReviewCard;
