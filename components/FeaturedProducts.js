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

const FeaturedProducts = () => {
  return (
    <div className="p-10">
      <h3 className="text-2xl font-medium">Featured products</h3>
      <hr className="mt-6 bg-gray-200" />
      <div className="flex pt-10">
        <div className="group w-1/2 cursor-pointer relative overflow-hidden shadow-md hover:opacity-80">
          <Image
            src={egypt1}
            alt="img"
            objectFit="cover"
            className=" ease-in-out duration-500 group-hover:scale-110"
          />
          <div className="flex items-center gap-4 absolute top-1/3 left-1/3 ">
            <p className="hidden tracking-tight text-lg font-semibold group-hover:inline-block group-hover:text-white">
              View product
            </p>
            <div className="hidden text-lg text-white border p-2 rounded-full border-white group-hover:inline-block group-hover:text-white">
              <GrLinkNext className="" />
            </div>
          </div>
        </div>
        <div className="w-1/2 pl-5">
          <h3 className="text-lg font-bold font-stix_two">
            The Boolean Egyptian
          </h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div>
            <div className="">
              <div className="flex relative cursor-pointer mt-3 items-center">
                <div className="z-0 ">
                  <Image src={eclipse1} alt="img" className="w-8 h-8" />
                </div>
                <div className="z-10 absolute left-4">
                  <Image src={eclipse2} alt="img" className="w-8 h-8" />
                </div>
                <div className="z-20 absolute left-8">
                  <Image src={eclipse3} alt="img" className="w-8 h-8" />
                </div>
                <div className="z-30 absolute left-12">
                  <Image src={eclipse4} alt="img" className="w-8 h-8" />
                </div>
                <div className="z-40 absolute left-16">
                  <Image src={eclipse5} alt="img" className="w-8 h-8" />
                </div>
                <div className="pl-36">
                  <p className="text-sm ">64 major creators</p>
                </div>
                <div className="ml-1 border p-2 rounded-full border-black">
                  <GrLinkNext className=" " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6 bg-gray-200" />

      <div className="flex pt-10">
        <div className="w-1/2 pl-5">
          <h3 className="text-lg font-bold font-stix_two">
            The Boolean Egyptian
          </h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div>
            <div className="">
              <div className="flex relative cursor-pointer mt-3 items-center">
                <div className="z-0 ">
                  <Image src={eclipse1} alt="img" className="w-8 h-8" />
                </div>
                <div className="z-10 absolute left-4">
                  <Image src={eclipse2} alt="img" className="w-8 h-8" />
                </div>
                <div className="z-20 absolute left-8">
                  <Image src={eclipse3} alt="img" className="w-8 h-8" />
                </div>
                <div className="z-30 absolute left-12">
                  <Image src={eclipse4} alt="img" className="w-8 h-8" />
                </div>
                <div className="z-40 absolute left-16">
                  <Image src={eclipse5} alt="img" className="w-8 h-8" />
                </div>
                <div className="pl-36">
                  <p className="text-sm ">64 major creators</p>
                </div>
                <div className="ml-1 border p-2 rounded-full border-black">
                  <GrLinkNext className=" " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group w-1/2 cursor-pointer relative overflow-hidden shadow-md hover:opacity-80">
          <Image
            src={egypt2}
            alt="img"
            objectFit="cover"
            className=" ease-in-out duration-500 group-hover:scale-110"
          />
          <div className="flex items-center gap-4 absolute top-1/3 left-1/3 ">
            <p className="hidden tracking-tight text-lg font-semibold group-hover:inline-block group-hover:text-white">
              View product
            </p>
            <div className="hidden text-lg text-white border p-2 rounded-full border-white group-hover:inline-block group-hover:text-white">
              <GrLinkNext className="" />
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-6 bg-gray-200" />

      <div className="flex pt-10 pb-10">
        <div className="group w-1/2 cursor-pointer relative overflow-hidden shadow-md hover:opacity-80">
          <Image
            src={egypt3}
            alt="img"
            objectFit="cover"
            className=" ease-in-out duration-500 group-hover:scale-110"
          />
          <div className="flex items-center gap-4 absolute top-1/3 left-1/3 ">
            <p className="hidden tracking-tight text-lg font-semibold group-hover:inline-block group-hover:text-white">
              View product
            </p>
            <div className="hidden text-lg text-white border p-2 rounded-full border-white group-hover:inline-block group-hover:text-white">
              <GrLinkNext className="" />
            </div>
          </div>
        </div>
        <div className="w-1/2 pl-5">
          <h3 className="text-lg font-bold font-stix_two">
            The Boolean Egyptian
          </h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div>
            <div className="">
              <div className="flex relative cursor-pointer mt-3 items-center">
                <div className="z-0 ">
                  <Image src={eclipse1} alt="img" className="w-8 h-8" />
                </div>
                <div className="z-10 absolute left-4">
                  <Image src={eclipse2} alt="img" className="w-8 h-8" />
                </div>
                <div className="z-20 absolute left-8">
                  <Image src={eclipse3} alt="img" className="w-8 h-8" />
                </div>
                <div className="z-30 absolute left-12">
                  <Image src={eclipse4} alt="img" className="w-8 h-8" />
                </div>
                <div className="z-40 absolute left-16">
                  <Image src={eclipse5} alt="img" className="w-8 h-8" />
                </div>
                <div className="pl-36">
                  <p className="text-sm ">64 major creators</p>
                </div>
                <div className="ml-1 border p-2 rounded-full border-black">
                  <GrLinkNext className=" " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="p-8 max-h-[780px] bg-gradient-to-r from-cyan-200 via-sky-300 to-orange-200 relative">
        <h1 className="text-white text-xl pt-2">
          See Upcoming Auctions and Exhibitions
        </h1>
        <hr className="m-5" />
        <div>
          <Image src={monalisa} alt="img" objectFit="cover" />
          <div className="flex absolute top-1/3 items-center p-4">
            <div className="text-white text-2xl h-2 pr-4">01</div>
            <div className="w-1/2">
              <h3 className="font-bellefair text-white w-60  ">
                MONALISA REDEFINED IN STYLE.
              </h3>
              <span className="text-white text-sm">
                Start on : 08:00 GTS . Monday
              </span>
              <p className="text-sm text-white">
                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                HIGHEST AND LOWEST BIDS.
              </p>
            </div>
            <div className="text-white flex  gap-5 pl-10 pt-28">
              <p className="pt-2 cursor-pointer">see more</p>
              <button className="bg-transparent border p-2 rounded-lg">
                Set a reminder
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="mt-4 w-40 h-1 bg-gray-300 rounded-lg">
            <div className="w-10 h-full bg-white"></div>
          </div>
          <div className="flex text-xs gap-2">
            <div className="border-transparent p-2 rounded-full shadow-lg bg-orange-200 cursor-pointer hover:scale-125">
              <GrPrevious />
            </div>
            <div className="border-transparent p-2 rounded-full shadow-lg bg-orange-200 text-white cursor-pointer hover:scale-125">
              <GrNext />
            </div>
          </div>
        </div>
      </section>
      <hr className="mt-10" />
      <div className="group">
        <div className=" flex justify-between p-8 text-x cursor-pointer">
          <p className="group-hover:scale-110">Explore marketplace</p>
          <AiOutlineArrowRight className="group-hover:scale-125" />
        </div>
        <hr className="mt-1" />
      </div>
      <div>
        <div className="group flex justify-between p-8 ">
          <p className="group-hover:scale-110">See Auctions</p>
          <AiOutlineArrowRight className="group-hover:scale-125" />
        </div>
        <hr className="mt-1" />
      </div>
    </div>
  );
};

export default FeaturedProducts;
