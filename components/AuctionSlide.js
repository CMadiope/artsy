import Image from "next/image";
import React from "react";
import { Slide } from "react-slideshow-image";
import pic1big from "../public/auctions/pic1-big.png";
import pic2big from "../public/auctions/pic2-big.png";
import pic3big from "../public/auctions/pic3-big.png";
import Slider from "react-slick";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";

const AuctionSlide = () => {
  const router = useRouter();

  let settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  const handleClick = (e) => {
    router.push("/live_bid");
  };

  return (
    <div className='py-10 '>
      <Slider {...settings}>
        <div className='group relative'>
          <Image
            className='group-hover:scale-75 duration-500 '
            src={pic1big}
            alt='/'
          />
          <div
            className='hidden absolute top-0 p-2  md:top-[10%] md:left-[10%] lg:top-[30%] lg:left-[20%] group-hover:scale-50 duration-500 
          cursor-pointer
          md:group-hover:scale-85 lg:group-hover:scale-100
          group-hover:block '
            onClick={handleClick}
          >
            <div className='flex items-center gap-3 text-xs md:text-2xl text-white'>
              <p>Join livestream</p>
              <div className='border rounded-full p-2'>
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className='text-white bg-stone-300 px-2 rounded-md text-xs mt-4 md:text-xl'>
              <p>6hr : 40mins: 15s</p>
            </div>
          </div>
        </div>
        <div className='group relative'>
          <Image
            src={pic2big}
            alt='/'
            className='group-hover:scale-75 duration-500'
          />
          <div
            className='hidden absolute top-0 p-2  md:top-[10%] md:left-[10%] lg:top-[30%] lg:left-[20%] group-hover:scale-50 duration-500 
          cursor-pointer
          md:group-hover:scale-85 lg:group-hover:scale-100
          group-hover:block '
            onClick={handleClick}
          >
            <div className='flex items-center gap-3 text-xs md:text-2xl text-white'>
              <p>Join livestream</p>
              <div className='border rounded-full p-2'>
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className='text-white bg-stone-300 px-2 rounded-md text-xs mt-4 md:text-xl'>
              <p>6hr : 40mins: 15s</p>
            </div>
          </div>
        </div>
        <div className='group relative'>
          <Image
            src={pic3big}
            alt='/'
            className='group-hover:scale-75 duration-500'
          />
          <div
            className='hidden absolute top-0 p-2  md:top-[10%] md:left-[10%] lg:top-[30%] lg:left-[20%] group-hover:scale-50 duration-500 
          cursor-pointer
          md:group-hover:scale-85 lg:group-hover:scale-100
          group-hover:block '
            onClick={handleClick}
          >
            <div className='flex items-center gap-3 text-xs md:text-2xl text-white'>
              <p>Join livestream</p>
              <div className='border rounded-full p-2'>
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className='text-white bg-stone-300 px-2 rounded-md text-xs mt-4 md:text-xl'>
              <p>6hr : 40mins: 15s</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AuctionSlide;
