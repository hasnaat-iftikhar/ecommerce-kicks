import Image from "next/image";
import React from "react";

// Font families
import { Open_Sans } from "next/font/google";
const open_sans = Open_Sans({ subsets: ["hebrew"] });

// Icons
import StarIcon from "../../../assets/icons/star.svg";
import StarEmptyIcon from "../../../assets/icons/starEmpty.svg";

const StarRating = ({ className, rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = Math.floor(5 - rating);

  const starIcons = [];

  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<Image src={StarIcon} alt="Star" width={24} height={24} />);
  }

  for (let i = 0; i < emptyStars; i++) {
    starIcons.push(
      <Image src={StarEmptyIcon} alt="Star" width={24} height={24} />
    );
  }

  return (
    <div className={`flex items-center ${className ?? ""}`}>
      {starIcons}
      <span className="ml-1 text-[16px] leading-[21.79px] text-gray_dark font-medium">
        {rating}.0
      </span>
    </div>
  );
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
          <h4 className="text-[24px] leading-[28.44px] font-semibold text-gray_dark">
            {feedback ?? "Feedback Title"}
          </h4>
          <p
            className={`mt-2 text-[16px] leading-[21.79px] text-gray_dark opacity-80 ${open_sans.className} font-normal`}
          >
            {description ?? "Here will be the description of the feedback"}
          </p>
          <StarRating className="mt-2" rating={rating} />
        </div>
        <div className="w-fit rounded-full overflow-hidden">
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
