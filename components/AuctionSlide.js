import Image from "next/image";
import React from "react";
import { Slide } from "react-slideshow-image";
import pic1big from "../public/auctions/pic1-big.png";
import pic2big from "../public/auctions/pic2-big.png";
import pic3big from "../public/auctions/pic3-big.png";
import { Zoom } from "react-slideshow-image";
import Slider from "react-slick";

const slideImages = [
  {
    image: pic1big,
  },
  {
    image: pic2big,
  },
  {
    image: pic2big,
  },
];

const AuctionSlide = () => {
  return (
    <div className="py-10 w-52">
      <Slide arrows={false} slidesToSho={3}>
        {slideImages.map((slider, index) => (
          <Image src={slider.image} alt="img" key={index} />
        ))}
      </Slide>
    </div>
  );
};

export default AuctionSlide;
