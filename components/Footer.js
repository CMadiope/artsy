import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <footer>
      <div className=" text-center pt-10 border pb-10">
        <h1 className="font-baskervville self-center">NEWSLETTER</h1>
        <p>Subscribe to get daily updates on new drops & exciting deals </p>
        <div className="pt-3 font-baskervville ">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 border outline-none pl-8 text-sm"
          />
          <button className="p-2 bg-neutral-800 ml-3 pl-4 pr-4 text-white text-sm hover:bg-neutral-500 hover:text-bg-slate-200">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="pt-10 mb-20">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold font-stix_two ">ARTSY.</h1>
          </div>
          <div>
            <ul className="flex flex-col">
              <Link href="/">Home</Link>
              <Link href="/marketplace">Marketplace</Link>
              <Link href="auctions">Auctions</Link>
              <Link href="/drops">Drops</Link>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col">
              <Link href="#">Blog</Link>
              <Link href="#">Wallets</Link>
              <Link href="#">Rates</Link>
              <Link href="#">High bids</Link>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 text-lg cursor-pointer">
              <AiOutlineMail />
              <p>artsystudios@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 text-lg cursor-pointer">
              <GoLocation />
              <p>Johannesburg, South Africa</p>
            </div>
          </div>
        </div>
        <div className="text-center p-10">
          <p className="text-sm font-bold font-rubik">
            Artsystudios © 2022. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
