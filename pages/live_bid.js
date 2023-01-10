import React from "react";
import Image from "next/image";
import pic1 from "../public/auctions/live-bid.png";
import { MdOutlineCancel } from "react-icons/md";
import pic from "../public/livebid/pic1.png";
import pic2 from "../public/livebid/pic2.png";
import pic3 from "../public/livebid/pic3.png";
import pic4 from "../public/livebid/pic4.png";
import pic5 from "../public/livebid/pic5.png";
import pic6 from "../public/livebid/pic6.png";
import { AiFillHeart, AiOutlineArrowRight } from "react-icons/ai";
import {FiSend} from 'react-icons/fi'
import Link from "next/link";

const LiveBid = () => {
  return (
    <div className='max-w-[1240px] mx-auto'>
      <div className='flex flex-col items-center sm:flex-row border-[1px] border-black gap-8 sm:gap-0'>
        <div className='w-1/2 relative mt-8 sm:mt-0'>
          <Image src={pic1} alt='/' />
          <div className='absolute top-0 p-4 sm:p-8 md:p-12 cursor-pointer'>
            <MdOutlineCancel size={30} className='text-white' />
          </div>
          <div className='absolute top-0 right-0 p-4 sm:p-8 md:p-12 text-lg sm:text-xl md:text-2x cursor-pointer'>
            <p className='text-white uppercase bg-blue-400 px-4 sm:px-6 md:px-8 rounded-xl hover:bg-blue-300'>
              live
            </p>
          </div>
        </div>
        <div className='w-1/2 px-4 m-auto relative'>
          <div className='flex gap-2'>
            <Image
              src={pic}
              alt='/'
              className='w-[30px] h-[30px] sm:w-auto sm:h-auto'
            />
            <p className='text-gray-400 text-xs sm:text-base md:text-lg mt-2'>
              $45.00 instant bid
            </p>
          </div>
          <div className='flex gap-2 pt-2'>
            <Image
              src={pic2}
              alt='/'
              className='w-[30px] h-[30px] sm:w-auto sm:h-auto'
            />
            <div>
              <p className='font-satoshi text-sm sm:text-base md:text-lg text-gray-700 mb-2'>
                Ella Flynn
              </p>
              <p className='text-sm sm:text-base md:text-lg font-semibold'>
                Tight bid
              </p>
            </div>
          </div>
          <div className='flex gap-2 pt-2'>
            <Image
              src={pic3}
              alt='/'
              className='w-[30px] h-[30px] sm:w-auto sm:h-auto'
            />
            <div>
              <p className='font-satoshi text-sm sm:text-base md:text-lg text-gray-700 mb-2'>
                Uncle Luca
              </p>
              <p className='text-sm sm:text-base md:text-lg font-bold'>
                instant bid
              </p>
            </div>
          </div>
          <div className='flex gap-2 pt-2'>
            <Image
              src={pic4}
              alt='/'
              className='w-[30px] h-[30px] sm:w-auto sm:h-auto'
            />
            <div>
              <p className='font-satoshi text-sm sm:text-base md:text-lg text-gray-700 mb-2'>
                Opeyemi Tiwalope
              </p>
              <p className='text-sm sm:text-base md:text-lg'>$45.00</p>
            </div>
          </div>
          <div className='flex gap-2 pt-2'>
            <Image
              src={pic5}
              alt='/'
              className='w-[30px] h-[30px] sm:w-auto sm:h-auto'
            />
            <div>
              <p className='font-satoshi text-sm sm:text-base md:text-lg text-gray-700 mb-2'>
                Celestina Quinn
              </p>
              <p className='text-sm sm:text-base md:text-lg'>
                gm frens! ready to bidddd
              </p>
            </div>
          </div>
          <div className='flex gap-2 pt-2'>
            <Image
              src={pic6}
              alt='/'
              className='w-[30px] h-[30px] sm:w-auto sm:h-auto'
            />
            <div>
              <p className='font-satoshi text-sm sm:text-base md:text-lg text-gray-700 mb-2'>
                Samy Ellen
              </p>
              <p className='text-sm sm:text-base md:text-lg'>
                i love this. $20.00 for me
              </p>
            </div>
          </div>
          <div>
            <p className='font-inter text-gray-400 italic text-sm sm:text-base md:text-lg pt-4 sm:pt-6 md:pt-8'>
              Creator : Stormi Rylie
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-6 pb-8 sm:pb-0'>
              <div>
                <div className='flex border p-4 rounded-3xl '>
                  <input
                    className='outline-none '
                    type='text'
                    placeholder='Place a bid...'
                  />
                  <FiSend size={20} />
                </div>
              </div>
              <div className='text-red-600 border p-2 rounded-full border-black cursor-pointer group mr-[70%] sm:mr-0'>
                <AiFillHeart size={30} className='group-hover:scale-110' />
              </div>
            </div>
            <AiFillHeart className='absolute right-5 top-[45%] text-sky-200 rotate-45 md:right-[40%]' />
            <AiFillHeart
              className='absolute right-8 top-[50%] text-red-200 rotate-45 md:right-[50%]'
              size={25}
            />
            <AiFillHeart
              className='absolute right-6 top-[55%] text-sky-200 opacity-80 sm:opacity-100 md:right-[60%]'
              size={30}
            />
            <AiFillHeart
              className='absolute right-16 top-[60%] -rotate-45 text-green-300 opacity-70 md:opacity-100 md:right-[40%]'
              size={20}
            />
            <AiFillHeart className='absolute right-20 top-[63%] text-purple-500 -rotate-45 md:top-[70%] md:right-[60%]' />
            <AiFillHeart
              className='absolute right-24 top-[60%] text-red-800 rotate-45 md:top-[80%] md:right-[55%]'
              size={20}
            />
            <AiFillHeart
              className='absolute right-5 top-[70%] text-sky-800 rotate-45 md:top-[85%] md:right-[50%]'
              size={20}
            />
          </div>
        </div>
      </div>
      <Link href='/drop'>
        <div className='flex justify-center sm:justify-start font-satoshi pt-8 sm:pl-8 md:pl-12 cursor-pointer'>
        <div className='flex items-center gap-2 font-bold'>
          <h1 className='text-lg sm:text-xl md:text-2xl'>See Upcoming Drops</h1>
          <div className='text-xl md:text-2xl md:p-2 border border-black p-1 rounded-full'>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
      </Link>
      
    </div>
  );
};

export default LiveBid;
