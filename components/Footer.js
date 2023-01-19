import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useRouter } from "next/router";

const Footer = () => {

  const router = useRouter()
// 
  return (
    <footer className={router.pathname == '/confirm'? 'hidden': 'pt-56'}>
      <div className=' sm:text-center sm:pt-10 sm:border sm:pb-10 '>
        <h1 className='font-baskervville text-xl md:text-2xl self-center lg:text-4xl max-sm:text-left pb-4'>NEWSLETTER</h1>
        <p className='lg:text-lg text-gray-500'>
          Subscribe to get daily updates on new drops & exciting deals{" "}
        </p>
        <div className='pt-3 font-baskervville max-sm:flex max-sm:flex-col'>
          <input
            type='text'
            placeholder='Enter your email'
            className='p-2 border outline-none pl-8 text-sm'
          />
          <button className='p-2 bg-neutral-800 ml-3 pl-4 pr-4 text-white text-sm hover:bg-neutral-500 hover:text-bg-slate-200'>
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className='pt-10 mb-20'>
        <div className='flex max-sm:flex-col max-sm:gap-4 justify-between'>
          <div className="max-sm:hidden">
            <Link href='/'>
              <h1 className='text-2xl font-bold font-stix_two lg:text-4xl'>
                ARTSY.
              </h1>
            </Link>
          </div>
          <div>
            <ul className='flex flex-col lg:text-lg'>
              <Link href='/'>Home</Link>
              <Link href='/marketplace'>Marketplace</Link>
              <Link href='auctions'>Auctions</Link>
              <Link href='/drop'>Drops</Link>
            </ul>
          </div>
          <div className="max-sm:hidden">
            <ul className='flex flex-col lg:text-lg'>
              <Link href='#'>Blog</Link>
              <Link href='#'>Wallets</Link>
              <Link href='#'>Rates</Link>
              <Link href='#'>High bids</Link>
            </ul>
          </div>
          <div>
            <div className='flex items-center gap-2 text-lg cursor-pointer lg:text-xl'>
              <AiOutlineMail />
              <p>artsystudios@gmail.com</p>
            </div>
            <div className='flex items-center gap-2 text-lg cursor-pointer'>
              <GoLocation />
              <p>Johannesburg, South Africa</p>
            </div>
          </div>
        </div>
        <div className='text-center p-10'>
          <p className='text-sm font-bold font-rubik lg:text-base'>
            Artsystudios © 2022. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
