import React from "react";
import AuctionSlide from "../components/AuctionSlide";
import moon from "../public/auctions/moon.png";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

const auctions = () => {
  return (
    <div className=''>
      <h3 className='font-semibold md:text-xl'>
        Here’s an overview of products actively on auction, explore!
      </h3>
      <div>
        <AuctionSlide />
      </div>
      <div className='py-10'>
        <h3 className='font-semibold md:text-xl'>
          Top bids from popular creators
        </h3>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='w-[398px] h-[256px] md:w-[545px] md:h-[498px] py-8  '>
            <div className='border rounded-md'>
              <div className='group flex justify-end p-2'>
                <AiFillHeart className='text-red-500 group-hover:scale-125 text-sm' />
              </div>
              <Image src={moon} alt='moon' />
              <h3 className='font-semibold text-sm py-4 pl-4 md:text-lg'>
                Out of the box
              </h3>
            </div>
            <div className=''>
              <h3 className='text-xs md:text-base p-4'>
                Creator: <span className='font-semibold pl-1'>Dan Murray</span>
              </h3>
              <h3 className='text-xs md:text-base pl-4'>
                Date: <span className='font-semibold '>12/08/22</span>
              </h3>
              <h3 className='text-xs md:text-base pl-4 py-2'>
                Highest bid: <span className='font-semibold '>0.57 ETH</span>
              </h3>
              <div className='flex justify-between bg-gray-100 pl-4 py-4 rounded'>
                <div>
                  <p className='text-xs md:text-base pb-2'>Current bid</p>
                  <span className='text-xs font-semibold md:text-base'>
                    0.987 ETH
                  </span>
                </div>
                <button className='bg-indigo-700 text-white text-xs md:text-base px-12 mr-4  hover:bg-indigo-500'>
                  Place bid
                </button>
              </div>
            </div>
          </div>
          <div className='w-[398px] h-[256px] md:w-[545px] md:h-[498px] py-8 pt:52'>
            <div className='border rounded-md'>
              <div className='group flex justify-end p-2'>
                <AiFillHeart className='text-red-500 group-hover:scale-125 text-sm' />
              </div>
              <Image src={moon} alt='moon' />
              <h3 className='font-semibold text-sm md:text-lg py-4 pl-4'>
                Out of the box
              </h3>
            </div>
            <div>
              <h3 className='text-xs md:text-base p-4'>
                Creator: <span className='font-semibold pl-1'>Jacob Banks</span>
              </h3>
              <h3 className='text-xs md:text-base pl-4'>
                Date: <span className='font-semibold '>12/08/22</span>
              </h3>
              <h3 className='text-xs md:text-base pl-4 py-2'>
                Highest bid: <span className='font-semibold '>0.34 ETH</span>
              </h3>
              <div className='flex justify-between bg-gray-100 pl-4 py-4 rounded'>
                <div>
                  <p className='text-xs md:text-base pb-2'>Current bid</p>
                  <span className='text-xs font-semibold'>0.99 ETH</span>
                </div>
                <button className='bg-indigo-700 text-white text-xs md:text-base px-12 mr-4  hover:bg-indigo-500'>
                  Place bid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default auctions;
