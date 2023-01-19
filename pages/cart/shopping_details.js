import React from "react";
import CartNav from "../../components/CartNav";
import Link from "next/link";
import pic1 from "../../public/cart/Rectangle 35.png";
import pic2 from "../../public/cart/warped.png";
import pic3 from "../../public/cart/elipsia.png";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

const shopping_details = () => {
  return (
    <div className='m-auto'>
      <CartNav />
      <div className='flex max-sm:flex-col max-sm:items-center py-12'>
        <div className='w-1/2 grid gap-4 py-2'>
          <div className='flex flex-col'>
            <label className='text-[#888888] py-2'>Your email</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#F2F2F2] placeholder:text-[#747474]'
              type='email'
              placeholder='example@email.com'
            />
          </div>
          <div className='flex items-center gap-2'>
            <input type='checkbox' className='accent-[#F2F2F2]' />
            <p className='text-sm text-[#747474]'>
              Get updates about new drops & exclusive offers
            </p>
          </div>
          <div className='flex flex-col'>
            <label className='text-[#888888] py-2'>Your full name</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#F2F2F2] placeholder:text-[#747474] placeholder:text-sm'
              type='text'
              placeholder='Confidence Madiope'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-[#888888] py-2'>Choose a wallet</label>
            <select
              className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#F2F2F2] placeholder:text-[#747474]'
              type='text'
              placeholder='Confidence Madiope'
            ></select>
          </div>
          <div className='flex'>
            <div className=' flex flex-col  w-1/2'>
              <label className='text-[#888888] py-2'>Country</label>
              <select
                className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#F2F2F2] placeholder:text-[#747474]'
                type='text'
                placeholder='Confidence Madiope'
              ></select>
            </div>
            <div className='flex flex-col pl-2 w-1/2'>
              <label className='text-[#888888] py-2'>Postal code</label>
              <input
                className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#F2F2F2] placeholder:text-[#747474] placeholder:text-sm'
                type='text'
                placeholder='001024'
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-[#888888] py-2'>Phone number</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#F2F2F2] placeholder:text-[#747474]'
              type='text'
              placeholder='080044934'
            />
          </div>
          <Link href='/cart/payment_details'>
            <button className='bg-[#3341C1] text-white py-4 rounded-lg px-8 w-full'>
              Proceed to payment
            </button>
          </Link>
        </div>

        <div class className='w-1/2 py-12 pl-8 border-t'>
          <div className='md:flex md:justify-evenly border-b'>
            <div className='flex flex-col  max-sm:items-center md:pb-8 sm:flex-row sm:gap-6 '>
              <div className='w-[100px]'>
                <Image src={pic1} alt='/' />
              </div>
              <div className='pl-4 flex flex-col sm:justify-evenly justify-between'>
                <h3 className='font-bold '>Philomena ‘22</h3>
                <p className='text-sm text-gray-400'>Clearamane</p>
                <p className='text-xs text-gray-400 '>
                  Size: <span className='text-black'>200 ft</span>
                </p>
                <div className='flex items-center gap-2 '>
                  <AiOutlineMinus />
                  <p>1</p>
                  <AiOutlinePlus />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between max-sm:items-center max-sm:pt-4'>
              <RxCrossCircled
                size={20}
                className='cursor-pointer text-gray-400'
              />
              <p className='font-cardo text-lg font-light'>$35.50</p>
            </div>
          </div>
          <div className='md:flex md:justify-evenly'>
            <div className='flex flex-col  max-sm:items-center md:pb-8 sm:flex-row sm:gap-6 '>
              <div className='w-[100px]'>
                <Image src={pic2} alt='/' />
              </div>
              <div className='pl-4 flex flex-col sm:justify-evenly justify-between'>
                <h3 className='font-bold '>Philomena ‘22</h3>
                <p className='text-sm text-gray-400'>Clearamane</p>
                <p className='text-xs text-gray-400 '>
                  Size: <span className='text-black'>200 ft</span>
                </p>
                <div className='flex items-center gap-2 '>
                  <AiOutlineMinus />
                  <p>1</p>
                  <AiOutlinePlus />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between max-sm:items-center max-sm:pt-4'>
              <RxCrossCircled
                size={20}
                className='cursor-pointer text-gray-400'
              />
              <p className='font-cardo text-lg font-light'>$35.50</p>
            </div>
          </div>
          <div className='md:flex md:justify-evenly'>
            <div className='flex flex-col  max-sm:items-center md:pb-8 sm:flex-row sm:gap-6 '>
              <div className='w-[100px]'>
                <Image src={pic3} alt='/' />
              </div>
              <div className='pl-4 flex flex-col sm:justify-evenly justify-between'>
                <h3 className='font-bold '>Philomena ‘22</h3>
                <p className='text-sm text-gray-400'>Clearamane</p>
                <p className='text-xs text-gray-400 '>
                  Size: <span className='text-black'>200 ft</span>
                </p>
                <div className='flex items-center gap-2 '>
                  <AiOutlineMinus />
                  <p>1</p>
                  <AiOutlinePlus />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between max-sm:items-center max-sm:pt-4'>
              <RxCrossCircled
                size={20}
                className='cursor-pointer text-gray-400'
              />
              <p className='font-cardo text-lg font-light'>$35.50</p>
            </div>
          </div>
          <div className='pt-8 w-full pl-8 md:px-12'>
            <div className='flex justify-between pb-2'>
              <p className='text-gray-400'>Products in cart:</p>
              <p className='text-[#292929]'>3 items</p>
            </div>
            <div className='flex justify-between pb-2'>
              <p className='text-gray-400'>Shipping:</p>
              <p className='text-[#292929]'>$ 2.50</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-gray-400'>Total:</p>
              <p className='text-[#292929]'>$ 144.00</p>
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default shopping_details;
