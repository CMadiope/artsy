import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import Slider from "react-slick";
import image1 from "../public/carousel/image-1.png";
import image2 from "../public/carousel/image-2.png";
import image3 from "../public/carousel/image-3.png";
import image4 from "../public/carousel/image-4.png";
import image5 from "../public/carousel/image-5.png";

const Carousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
  };

  return (
    <div className="p-10 ">
      <Slider className="mt-8" {...settings}>
        <div className="w-72">
          <Image src={image5} alt="img" />
        </div>
        <div className="">
          <Image src={image2} alt="img" />
        </div>
        <div className="">
          <Image src={image3} alt="img" />
        </div>
        <div className="">
          <Image src={image4} alt="img" />
        </div>
        <div className="">
          <Image src={image5} alt="img" />
        </div>
        <div className="">
          <Image src={image3} alt="img" />
        </div>
        <div className="">
          <Image src={image2} alt="img" />
        </div>
        <div className="">
          <Image src={image3} alt="img" />
        </div>
        <div className="">
          <Image src={image5} alt="img" />
        </div>
        <div className="">
          <Image src={image4} alt="img" />
        </div>
        <div className="">
          <Image src={image5} alt="img" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
