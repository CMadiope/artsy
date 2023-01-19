import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const router = useRouter();
  return (
    <nav className='relative flex justify-between items-center py-10 absolutes z-10'>
      <Link href='/' className='max-sm:absolute max-sm:left-[50%]'>
        <h1 className='text-lg md:text-2xl font-bold font-stix_two xl:text-3xl '>
          ARTSY.
        </h1>
      </Link>
      <ul className='hidden sm:flex items-center gap-10  md:text-lg lg:text-2xl'>
        <Link
          href='/'
          className={`${
            router.pathname == "/" ? " underline underline-offset-4" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href='marketplace'
          className={`${
            router.pathname == "/marketplace"
              ? " underline underline-offset-4"
              : ""
          } ${
            router.pathname == "/card_detail"
              ? "underline underline-offset-8"
              : ""
          }`}
        >
          Marketplace
        </Link>
        <Link
          href='auctions'
          className={`${
            router.pathname == "/auctions"
              ? " underline underline-offset-4"
              : ""
          }`}
        >
          Auctions
        </Link>
        <Link
          href='drop'
          className={`${
            router.pathname == "/drop" ? " underline underline-offset-4" : ""
          }`}
        >
          Drop
        </Link>
      </ul>

      <div className='flex items-center  '>
        <div className='flex gap-4 cursor-pointer text-lg lg:text-2xl max-sm:absolute max-sm:right-0'>
          <AiOutlineSearch className='' />
          <Link href='/cart'>
            <AiOutlineShoppingCart />
          </Link>
        </div>
        <div className='pl-4 max-sm:hidden cursor-pointer text-lg lg:text-2xl'>
          <AiOutlineBell />
        </div>
      </div>
      <div
        onClick={handleNav}
        className=' z-30 sm:hidden absolute  top-15 left-0'
      >
        {nav ? (
          <RxCross1 size={20} className='mr-4 cursor-pointer text-black' />
        ) : (
          <FaBars size={20} className='mr-4 cursor-pointer' />
        )}
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-white px-4 py-7 flex flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className='h-full w-full text-left pt-20 flex flex-col text-2xl text-black gap-8 '>
          <Link href='/'>
            <h1 className='text-4xl font-bold font-stix_two  absolute top-20 '>
              ARTSY.
            </h1>
          </Link>
          <Link
            href='/'
            className={`${
              router.pathname == "/" ? " underline underline-offset-4" : ""
            }'text-2xl py-8'`}
          >
            Home
          </Link>
          <Link
            href='marketplace'
            className={`${
              router.pathname == "/marketplace"
                ? " underline underline-offset-4"
                : ""
            } ${
              router.pathname == "/card_detail"
                ? "underline underline-offset-8"
                : ""
            }'text-2xl py-8'`}
          >
            Marketplace
          </Link>
          <Link
            href='auctions'
            className={`${
              router.pathname == "/auctions"
                ? " underline underline-offset-4"
                : ""
            }'text-2xl py-8'`}
          >
            Auctions
          </Link>
          <Link
            href='drop'
            className={`${
              router.pathname == "/drop" ? " underline underline-offset-4" : ""
            }'text-2xl py-8'`}
          >
            Drop
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
