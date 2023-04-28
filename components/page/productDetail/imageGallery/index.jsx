import Image from "next/image";
import React from "react";

const ImageGallery = ({ className, galleryImages, productName }) => {
  return (
    <div
      className={`w-[67.43%] flex flex-wrap gap-4 rounded-[48px] overflow-hidden ${
        className ?? ""
      }`}
    >
      {galleryImages.map((img, i) => (
        <div className="relative basis-[49%] grow h-[40vw] max-h-[510px]">
          <Image
            src={img.image}
            alt={productName ?? "Name of your product"}
            fill
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
