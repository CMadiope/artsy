import Image from "next/image";
import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import anime2 from "../public/img/anime2.png";
import anime3 from "../public/img/anime3.png";
import anime4 from "../public/img/anime4.png";

const slideImages = [
  {
    image: anime4,
  },
  {
    image: anime2,
  },
  {
    image: anime3,
  },
];

const SlideShow = () => {
  return (
    <div className="w-96 h-auto">
      <Zoom scale={0.4} arrows={false}>
        {slideImages.map((slideImage, index) => (
          <Image key={index} src={slideImage.image} alt={slideImage.image} />
        ))}
      </Zoom>
    </div>
  );
};

export default SlideShow;
