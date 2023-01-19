import React from "react";
import Image from "next/image";
import { GrLinkNext, GrNext, GrPrevious } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";
import egypt1 from "../public/img/egypt-1.png";
import egypt2 from "../public/img/egypt-2.png";
import egypt3 from "../public/img/egypt-3.png";
import eclipse1 from "../public/img/Ellipse 19.png";
import eclipse2 from "../public/img/Ellipse 20.png";
import eclipse3 from "../public/img/Ellipse 21.png";
import eclipse4 from "../public/img/Ellipse 22.png";
import eclipse5 from "../public/img/Ellipse 23.png";
import monalisa from "../public/img/monalisa.png";
import SlideShow from "./SlideShow";
import Footer from "./Footer";

const FeaturedProducts = () => {
  return (
    <div className='p-10 mx-auto'>
      <h3 className='max-md:text-center text-2xl lg:text-4xl font-medium'>
        Featured products
      </h3>
      <hr className='mt-6 bg-gray-200' />
      <div className='flex max-sm:flex-col flex-row pt-10 max-sm:items-center'>
        <div className='group md:w-1/2 cursor-pointer relative overflow-hidden shadow-md hover:opacity-80'>
          <Image
            src={egypt1}
            alt='img'
            objectFit='cover'
            className=' ease-in-out duration-500 group-hover:scale-110'
          />
          <div className='flex items-center gap-4 absolute top-1/3 left-1/3 '>
            <p className='hidden tracking-tight text-lg font-semibold group-hover:inline-block group-hover:text-white'>
              View product
            </p>
            <div className='hidden text-lg text-white border p-2 rounded-full border-white group-hover:inline-block group-hover:text-white'>
              <GrLinkNext className='' />
            </div>
          </div>
        </div>
        <div className='md:w-1/2 pl-5 max-md:pb-8'>
          <h3 className='text-lg lg:text-2xl font-bold font-stix_two'>
            The Boolean Egyptian
          </h3>
          <p className='text-sm lg:text-lg py-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div>
            <div className=''>
              <div className='flex relative cursor-pointer mt-3 items-center max-md:'>
                <div className='z-0 '>
                  <Image src={eclipse1} alt='img' className='w-8 h-8' />
                </div>
                <div className='z-10 absolute left-4'>
                  <Image src={eclipse2} alt='img' className='w-8 h-8' />
                </div>
                <div className='z-20 absolute left-8'>
                  <Image src={eclipse3} alt='img' className='w-8 h-8' />
                </div>
                <div className='z-30 absolute left-12'>
                  <Image src={eclipse4} alt='img' className='w-8 h-8' />
                </div>
                <div className='z-40 absolute left-16'>
                  <Image src={eclipse5} alt='img' className='w-8 h-8' />
                </div>
                <div className='pl-36'>
                  <p className='text-sm '>64 major creators</p>
                </div>
                <div className='ml-1 border p-2 rounded-full border-black'>
                  <GrLinkNext className=' ' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='mt-6 bg-gray-200' />

      <div className='max-sm:flex-col flex-row pt-10 max-sm:items-center'>
        <div className='md:w-1/2 pl-5 max-md:pb-8'>
          <h3 className='text-lg lg:text-2xl font-bold font-stix_two'>
            The Boolean Egyptian
          </h3>
          <p className='text-sm lg:text-lg py-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div>
            <div className=''>
              <div className='flex relative cursor-pointer mt-3 items-center'>
                <div className='z-0 '>
                  <Image src={eclipse1} alt='img' className='w-8 h-8' />
                </div>
                <div className='z-10 absolute left-4'>
                  <Image src={eclipse2} alt='img' className='w-8 h-8' />
                </div>
                <div className='z-20 absolute left-8'>
                  <Image src={eclipse3} alt='img' className='w-8 h-8' />
                </div>
                <div className='z-30 absolute left-12'>
                  <Image src={eclipse4} alt='img' className='w-8 h-8' />
                </div>
                <div className='z-40 absolute left-16'>
                  <Image src={eclipse5} alt='img' className='w-8 h-8' />
                </div>
                <div className='pl-36'>
                  <p className='text-sm '>64 major creators</p>
                </div>
                <div className='ml-1 border p-2 rounded-full border-black'>
                  <GrLinkNext className=' ' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='group md:w-1/2 cursor-pointer relative overflow-hidden shadow-md hover:opacity-80'>
          <Image
            src={egypt2}
            alt='img'
            objectFit='cover'
            className=' ease-in-out duration-500 group-hover:scale-110'
          />
          <div className='flex items-center gap-4 absolute top-1/3 left-1/3 '>
            <p className='hidden tracking-tight text-lg font-semibold group-hover:inline-block group-hover:text-white'>
              View product
            </p>
            <div className='hidden text-lg text-white border p-2 rounded-full border-white group-hover:inline-block group-hover:text-white'>
              <GrLinkNext className='' />
            </div>
          </div>
        </div>
      </div>

      <hr className='mt-6 bg-gray-200' />

      <div className='flex max-sm:flex-col flex-row pt-10 max-sm:items-center'>
        <div className='group md:w-1/2 cursor-pointer relative overflow-hidden shadow-md hover:opacity-80'>
          <Image
            src={egypt3}
            alt='img'
            objectFit='cover'
            className=' ease-in-out duration-500 group-hover:scale-110'
          />
          <div className='flex items-center gap-4 absolute top-1/3 left-1/3 '>
            <p className='hidden tracking-tight text-lg font-semibold group-hover:inline-block group-hover:text-white'>
              View product
            </p>
            <div className='hidden text-lg text-white border p-2 rounded-full border-white group-hover:inline-block group-hover:text-white'>
              <GrLinkNext className='' />
            </div>
          </div>
        </div>
        <div className='md:w-1/2 pl-5 max-md:py-8'>
          <h3 className='text-lg lg:text-2xl font-bold font-stix_two'>
            The Boolean Egyptian
          </h3>
          <p className='text-sm lg:text-lg py-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div>
            <div className=''>
              <div className='flex relative cursor-pointer mt-3 items-center'>
                <div className='z-0 '>
                  <Image src={eclipse1} alt='img' className='w-8 h-8' />
                </div>
                <div className='z-10 absolute left-4'>
                  <Image src={eclipse2} alt='img' className='w-8 h-8' />
                </div>
                <div className='z-20 absolute left-8'>
                  <Image src={eclipse3} alt='img' className='w-8 h-8' />
                </div>
                <div className='z-30 absolute left-12'>
                  <Image src={eclipse4} alt='img' className='w-8 h-8' />
                </div>
                <div className='z-40 absolute left-16'>
                  <Image src={eclipse5} alt='img' className='w-8 h-8' />
                </div>
                <div className='pl-36'>
                  <p className='text-sm '>64 major creators</p>
                </div>
                <div className='ml-1 border p-2 rounded-full border-black'>
                  <GrLinkNext className=' ' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='p-8 max-h-[780px] bg-gradient-to-r from-cyan-200 via-sky-300 to-orange-200 relative'>
        <h1 className='text-white text-xl pt-2 lg:text-2xl max-md:hidden'>
          See Upcoming Auctions and Exhibitions
        </h1>
        <hr className='m-5' />
        <div className="">
          <Image src={monalisa} alt='img' objectFit='cover' />
          <div className='flex absolute top-10 sm:top-16 md:top-1/3 items-center p-4'>
            <div className='text-white  md:text-2xl h-2 pr-4'>01</div>
            <div className='md:w-1/2'>
              <h3 className='max-xs:text-xs max-sm:text-base font-bellefair text-white w-60 md:lg:text-2xl'>
                MONALISA REDEFINED IN STYLE.
              </h3>
              <span className='text-white text-xs md:text-sm'>
                Start on : 08:00 GTS . Monday
              </span>
              <p className='text-xs md:text-sm text-white lg:text-base'>
                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                HIGHEST AND LOWEST BIDS.
              </p>
            </div>
            <div className='text-white flex max-md:flex-col gap-5 pl-10 pt-28 max-md:pr-8  max-md:hide'>
              <p className='pt-2 cursor-pointer'>see more</p>
              <button className='bg-transparent border p-px md:p-2 rounded-lg max-md:text-xs'>
                Set a reminder
              </button>
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-3'>
          <div className='mt-4 w-40 h-1 bg-gray-300 rounded-lg'>
            <div className='w-10 h-full bg-white'></div>
          </div>
          <div className='flex text-xs gap-2'>
            <div className='border-transparent p-2 rounded-full shadow-lg bg-orange-200 cursor-pointer hover:scale-125'>
              <GrPrevious />
            </div>
            <div className='border-transparent p-2 rounded-full shadow-lg bg-orange-200 text-white cursor-pointer hover:scale-125'>
              <GrNext />
            </div>
          </div>
        </div>
      </section>
      <hr className='mt-10' />
      <div className='group'>
        <div className=' flex justify-between p-8 text-x cursor-pointer'>
          <p className='group-hover:scale-110 lg:text-2xl'>
            Explore marketplace
          </p>
          <AiOutlineArrowRight className='group-hover:scale-125 lg:text-2xl' />
        </div>
        <hr className='mt-1' />
      </div>
      <div>
        <div className='group flex justify-between p-8 '>
          <p className='group-hover:scale-110 lg:text-2xl'>See Auctions</p>
          <AiOutlineArrowRight className='group-hover:scale-125 lg:text-2xl' />
        </div>
        <hr className='mt-1' />
      </div>
      <section className='bg-sectionBG p-16 relative mb-36'>
        <div>
          <div className='flex justify-between items-center'>
            <div className="max-md:absolute max-md:top-5 max-md:left-1">
              <h1 className='font-clash_display font-bold text-lg  md:text-2xl lg:text-4xl w-52'>
                TOP CREATORS OF THE WEEK
              </h1>
            </div>

            <div className='flex'>
              <div className='mt-12 w-20 h-1 bg-gray-300 rounded-lg -rotate-90 max-md:hidden'>
                <div className='w-6 h-full bg-zinc-800 rounded'></div>
              </div>
              <div className='font-clash_display lg:text-2xl pb-4 font-thin max-md:absolute max-md:top-0 max-md:right-5 max-md:flex max-md:text-xs max-md:gap-1'>
                <h3>Editorials</h3>
                <h3>Fashion</h3>
                <h3>Lifestyle</h3>
                <h3>Blueprint</h3>
              </div>
            </div>
          </div>
          <p className=' mt-10 mb-10 font-clash_display lg:text-lg max-md:text-sm max-md:text-center'>
            “Everything always looked better in black and white. Everything
            always as if it were the first time; there’s always more people in a
            black and white photograph. It just makes it seem that there were
            more people at a gig, more people at a football match, than with
            colour photography. Everything looks more exciting.”– Jack Lowden
          </p>
        </div>
        <div className='absolute z-20 top-[50%] md:top-0 right-0 pr-12 md:pr-32 md:pt-28'>
          <SlideShow />
        </div>
        <div className='font-clash_display font-extrabold absolute max-md:bottom-0 z-10 right-0 md:pr-8  md:top-1/3'>
          <h3 className='text-xl md:text-3xl'>CIRCA</h3>
          <h1 className='text-6xl md:text-8xl lg:text-9xl'>1985</h1>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;
