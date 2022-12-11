import Image from "next/image";
import React from "react";
import detail from "../public/img/detail.png";
import diamond from "../public/img/diamond.png";
import { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import Collapsible from "../components/Collapsible";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import sassy from "../public/img/sassy.png";
import escape from "../public/img/escape.png";

const card_detail = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="pt-10">
      <Link href="/marketplace">
        <button className="p-2 shadow-md rounded-lg bg-neutral-800 text-white text-sm hover:bg-neutral-500">
          <AiOutlineArrowLeft />
        </button>
      </Link>

      <div className="flex pt-4">
        <div className="w-1/2 border px-6 py-12">
          <Image src={detail} alt="img" />
        </div>
        <div className="border w-1/2">
          <div className="p-10 flex gap-12 border-y">
            <h3 className="font-extrabold">Boolean Egyptian</h3>
            <div className="flex gap-2">
              <Image src={diamond} widt={20} height={20} alt="img" />
              <span>0.09</span>
            </div>
          </div>
          <div className="px-10 pt-20 pb-20 border-y ">
            <p className="text-sm">
              Creator : <span className="text-sky-500">Ali Dava</span>
            </p>
            <span className="text-xs">Made in Italy</span>
            <p className="text-sm">Total views: 1.7k views</p>
            <div className="flex gap-2 pt-5">
              <button
                onClick={() => setCount(count - 1)}
                className="px-4 rounded bg-red-400"
              >
                -
              </button>
              <p>{count}</p>
              <button
                onClick={() => setCount(count + 1)}
                className="px-4 bg-green-400 rounded"
              >
                +
              </button>
            </div>
            <div className="flex pt-5 gap-8">
              <button className="flex items-center gap-2 text-sm px-6 py-2 bg-indigo-700 text-white hover:bg-indigo-500">
                Add to cart <AiOutlineArrowRight />
              </button>
              <button className="group border px-4 hover:bg-black hover:text-white">
                <AiOutlineHeart className="group-hover:scale-125" />
              </button>
            </div>
          </div>
          <div className="px-10 border-y">
            <Collapsible label="Description">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate nesciunt ullam voluptatum delectus fugit assumenda
                odit id corrupti, voluptatem dolore nostrum, quis veniam
                voluptatibus asperiores ad. Officiis nihil deserunt atque?
              </p>
            </Collapsible>
          </div>
          <div className="px-10 border-y">
            <Collapsible label="Listings">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate nesciunt ullam voluptatum delectus fugit assumenda
                odit id corrupti, voluptatem dolore nostrum, quis veniam
                voluptatibus asperiores ad. Officiis nihil deserunt atque?
              </p>
            </Collapsible>
          </div>
          <div className="px-10 border-y ">
            <Collapsible label="Status">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate nesciunt ullam voluptatum delectus fugit assumenda
                odit id corrupti, voluptatem dolore nostrum, quis veniam
                voluptatibus asperiores ad. Officiis nihil deserunt atque?
              </p>
            </Collapsible>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-8 py-4 shadow-xl m-8 items-center">
        <h3 className="text-sm">Explore more from this collection</h3>
        <div className="flex gap-2">
          <div className=" border cursor-pointer rounded-full p-2 hover:bg-gray-200 hover:scale-90">
            <MdNavigateBefore />
          </div>
          <div className="border cursor-pointer rounded-full p-2 hover:bg-gray-200 hover:scale-90">
            <MdNavigateNext />
          </div>
        </div>
      </div>
      <div className="flex py-8 gap-8">
        <div className="border w-72 p-5 cursor-pointer hover:scale-90">
          <div className="group flex justify-end py-2">
            <AiOutlineHeart className="group-hover:scale-125" />
          </div>
          <div className=" ">
            <Image src={sassy} alt="img" />
          </div>
          <div className="flex justify-between pt-2">
            <p>Sassy</p>
            <div className="flex gap-1">
              <Image src={diamond} width={10} heigh={2} />
              <p>3.20</p>
            </div>
          </div>
        </div>
        <div className="border w-72 p-5 cursor-pointer hover:scale-90">
          <div className="group flex justify-end py-2">
            <AiOutlineHeart className="group-hover:scale-125" />
          </div>
          <div className=" ">
            <Image src={escape} alt="img" />
          </div>
          <div className="flex justify-between pt-2">
            <p>Escape</p>
            <div className="flex gap-1">
              <Image src={diamond} width={10} heigh={2} />
              <p>0.03</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-8 ">
        <div className="rounded-md items-center p-px bg-gradient-to-r from-cyan-200 via-sky-300 to-orange-200 w-36 cursor-pointer hover:scale-90">
          <div className="h-full w-full bg-white rounded pl-8 py-2 ">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-orange-200">
              Explore all
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card_detail;
