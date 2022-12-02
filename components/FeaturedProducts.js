import React from "react";
import Image from "next/image";
import { GrLinkNext } from "react-icons/gr";
import egypt1 from "../public/img/egypt-1.png";
import egypt2 from "../public/img/egypt-2.png";
import egypt3 from "../public/img/egypt-3.png";
import eclipse1 from "../public/img/Ellipse 19.png";
import eclipse2 from "../public/img/Ellipse 20.png";
import eclipse3 from "../public/img/Ellipse 21.png";
import eclipse4 from "../public/img/Ellipse 22.png";
import eclipse5 from "../public/img/Ellipse 23.png";

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
          <h3 className="text-lg font-bold">The Boolean Egyptian</h3>
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
          <h3 className="text-lg font-bold">The Boolean Egyptian</h3>
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

      <div className="flex pt-10">
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
          <h3 className="text-lg font-bold">The Boolean Egyptian</h3>
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
      <section className="pt-10 max-h-[780px] bg-gradient-to-r from-blue-500 via-sky-300 to-amber-300"></section>
    </div>
  );
};

export default FeaturedProducts;
