import Link from "next/link";
import React from "react";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between items-center py-10">
      <Link href="/">
        <h1 className="text-2xl font-bold font-stix_two ">ARTSY.</h1>
      </Link>
      <ul className="flex items-center gap-10 text-lg">
        <Link
          href="/"
          className={`${
            router.pathname == "/" ? " underline underline-offset-4" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="marketplace"
          className={`${
            router.pathname == "/marketplace"
              ? " underline underline-offset-4"
              : ""
          }`}
        >
          Marketplace
        </Link>
        <Link
          href="auctions"
          className={`${
            router.pathname == "/auctions"
              ? " underline underline-offset-4"
              : ""
          }`}
        >
          Auctions
        </Link>
        <Link
          href="drop"
          className={`${
            router.pathname == "/drop"
              ? " underline underline-offset-4"
              : ""
          }`}
        >
          Drop
        </Link>
      </ul>
      <div className="flex gap-5 items-center cursor-pointer text-lg">
        <AiOutlineSearch />
        <AiOutlineShoppingCart />
        <AiOutlineBell />
      </div>
    </nav>
  );
};

export default Navbar;
