import Image from "next/image";
import React from "react";
import ghost from "../public/drop/ghost.png";
import woods from '../public/drop/woods.png'
import water from '../public/drop/water.png'
import warped from '../public/drop/warped.png'

const drop = () => {
  return (
    <div className='mx-auto'>
      <h1 className='text-center text-xl sm:text-2xl  md:text-3xl font-bold sm:font-semibold md:font-normal pt-8 sm:pt-12'>
        Upcoming drops
      </h1>
      <p className='text-center text-sm  sm:text-base md:lg pt-4 md:pt-6 text-gray-500'>
        Turn on notifications so that no drops will miss you.
      </p>
      <div className='flex justify-center pt-8 '>
        <button className='py-2  sm:px-16 px-12 border border-black rounded-md md:text-lg hover:bg-gray-100'>
          Notify me
        </button>
      </div>
      <div className='flex flex-col justify-center pt-8 md:pt-12'>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='relative'>
            <Image src={ghost} alt='/' />
            <div className='absolute bottom-0 text-white flex gap-8 items-center py-6 px-8 bg-white/20 rounded-lg ml-4 mb-6'>
              <div>
                <p>Time remaining</p>
                <h1 className='text-xl font-stix_two'>
                  06 hrs : 45 min : 22 s
                </h1>
              </div>
              <button className=' bg-blue-400 py-px px-4 rounded-xl hover:bg-blue-300'>
                Join
              </button>
            </div>
          </div>
          <div className='pt-6  md:pt-0 md:pl-8 max-md:text-center'>
            <button className='py-1 px-6 bg-blue-400 rounded-lg text-white hover:bg-blue-300 uppercase font-inter md:text-lg md:py-2 md:px-8'>
              upcoming
            </button>
            <p className='text-sm text-gray-500 pt-4 md:text-base'>
              November 21 at 11 am WAT
            </p>
            <h3 className='font-semibold text-xl pt-4 md:text-2xl'>
              Eyo : Eko For Show
            </h3>
            <p className='text-xs md:text-sm text-gray-500 pt-4'>
              Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
              vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
            </p>
            <p className='pt-4 md:text-lg'>
              Creator : <span className='text-blue-400'>Aliya Minat</span>
            </p>
            <p className='text-blue-400 underline cursor-pointer pt-4 md:text-lg'>
              Get notified
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center md:flex-row max-md:pt-12 md:pt-20'>
          <div className='relative'>
            <Image src={woods} alt='/' />
            <div className='absolute bottom-0 text-white flex gap-8 items-center py-6 px-8 bg-white/20 rounded-lg ml-4 mb-6'>
              <div>
                <p>Time remaining</p>
                <h1 className='text-xl font-stix_two'>
                  06 hrs : 45 min : 22 s
                </h1>
              </div>
              <button className=' bg-blue-400 py-px px-4 rounded-xl hover:bg-blue-300'>
                Join
              </button>
            </div>
          </div>
          <div className='pt-6  md:pt-0 md:pl-8 max-md:text-center'>
            <button className='py-1 px-6 bg-green-400 rounded-lg text-white hover:bg-green-300 uppercase font-inter md:text-lg md:py-2 md:px-8'>
              live now
            </button>
            <p className='text-sm text-gray-500 pt-4 md:text-base'>
              November 21 at 11 am WAT
            </p>
            <h3 className='font-semibold text-xl pt-4 md:text-2xl'>
              Ginger Suburbs
            </h3>
            <p className='text-xs md:text-sm text-gray-500 pt-4'>
              Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
              vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
            </p>
            <p className='pt-4 md:text-lg'>
              Creator : <span className='text-blue-400'>Tina Benson</span>
            </p>
            <p className='text-blue-400 underline cursor-pointer pt-4 md:text-lg'>
              Join now
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center md:flex-row max-md:pt-12 md:pt-20'>
          <div className='relative'>
            <Image src={water} alt='/' />
            <div className='absolute bottom-0 text-white flex gap-8 items-center py-6 px-8 bg-white/20 rounded-lg ml-4 mb-6'>
              <div>
                <p>Auction ended</p>
                <h1 className='text-xl font-stix_two'>2 hours ago</h1>
              </div>
              <button className=' bg-gray-400 py-px px-4 rounded-xl hover:bg-gray-300'>
                view
              </button>
            </div>
          </div>
          <div className='pt-6  md:pt-0 md:pl-8 max-md:text-center'>
            <button className='py-1 px-6 bg-gray-400 rounded-lg text-white hover:bg-gray-300 uppercase font-inter md:text-lg md:py-2 md:px-8'>
              ended
            </button>
            <p className='text-sm text-gray-500 pt-4 md:text-base'>
              November 21 at 11 am WAT
            </p>
            <h3 className='font-semibold text-xl pt-4 md:text-2xl'>Sink</h3>
            <p className='text-xs md:text-sm text-gray-500 pt-4'>
              Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
              vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
            </p>
            <p className='pt-4 md:text-lg'>
              Creator : <span className='text-blue-400'>Aliya Minat</span>
            </p>
            <p className='text-blue-400 underline cursor-pointer pt-4 md:text-lg'>
              View
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center md:flex-row max-md:pt-12 md:pt-20'>
          <div className='relative z-9'>
            <Image src={warped} alt='/' />
            <div className='absolute  bottom-0 text-white flex gap-8 items-center py-6 px-8 bg-white/20 rounded-lg ml-4 mb-6'>
              <div>
                <p>Auction ended</p>
                <h1 className='text-xl font-stix_two'>5 hours ago</h1>
              </div>
              <button className=' bg-gray-400 py-px px-4 rounded-xl hover:bg-gray-300'>
                view
              </button>
            </div>
          </div>
          <div className='pt-6  md:pt-0 md:pl-8 max-md:text-center'>
            <button className='py-1 px-6 bg-gray-400 rounded-lg text-white hover:bg-gray-300 uppercase font-inter md:text-lg md:py-2 md:px-8'>
              ended
            </button>
            <p className='text-sm text-gray-500 pt-4 md:text-base'>
              November 21 at 11 am WAT
            </p>
            <h3 className='font-semibold text-xl pt-4 md:text-2xl'>
              Warped ‘99
            </h3>
            <p className='text-xs md:text-sm text-gray-500 pt-4'>
              Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
              vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
            </p>
            <p className='pt-4 md:text-lg'>
              Creator : <span className='text-blue-400'>Aliya Minat</span>
            </p>
            <p className='text-blue-400 underline cursor-pointer pt-4 md:text-lg'>
              View
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-8 md:pt-16">
        <button className="py-2 px-12 rounded-md border border-black hover:bg-slate-50 md:text-lg md:px-16">See more</button>
      </div>
    </div>
  );
};

export default drop;
