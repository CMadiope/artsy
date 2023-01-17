import React from "react";
import CartNav from "../../components/CartNav";
import pic1 from "../../public/cart/Rectangle 35.png";
import pic2 from "../../public/cart/warped.png";
import pic3 from "../../public/cart/elipsia.png";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import Link from "next/link";

const cart = () => {
  return (
    <div>
      <CartNav />
      <div className='flex flex-col max-xs:items-center sm:flex-row sm:justify-between mx-auto mt-16 py-12 sm:border-y'>
        <div className='flex flex-col  max-sm:items-center sm:flex-row sm:gap-6 '>
          <div>
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
          <RxCrossCircled size={30} className='cursor-pointer text-gray-400' />
          <p className='font-cardo text-lg font-light'>$35.50</p>
        </div>
      </div>
      <div className='flex flex-col max-xs:items-center sm:flex-row sm:justify-between mx-auto mt-4 py-12 sm:border-b'>
        <div className='flex flex-col  max-sm:items-center sm:flex-row sm:gap-6 '>
          <div>
            <Image src={pic2} alt='/' />
          </div>
          <div className='pl-4 flex flex-col sm:justify-evenly justify-between'>
            <h3 className='font-bold '>Warped ‘99</h3>
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
          <RxCrossCircled size={30} className='cursor-pointer text-gray-400' />
          <p className='font-cardo text-lg font-light'>$35.50</p>
        </div>
      </div>
      <div className='flex flex-col max-xs:items-center sm:flex-row sm:justify-between mx-auto mt-4 py-12 sm:border-b'>
        <div className='flex flex-col  max-sm:items-center sm:flex-row sm:gap-6 '>
          <div>
            <Image src={pic3} alt='/' />
          </div>
          <div className='pl-4 flex flex-col sm:justify-evenly justify-between'>
            <h3 className='font-bold '>Ellipsia</h3>
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
          <RxCrossCircled size={30} className='cursor-pointer text-gray-400' />
          <p className='font-cardo text-lg font-light'>$35.50</p>
        </div>
      </div>
      <div className='flex pt-8'>
        <div className='w-1/2'>
          <div className='flex flex-col'>
            <button className='bg-[#3341C1] text-white py-4 px-8 md:text-lg '>
              Proceed to checkout
            </button>
            <Link
              href='/'
              className='underline text-[#006CA2] text-center pt-4 md:text-lg'
            >
              Continue shopping
            </Link>
          </div>
        </div>
        <div className='w-1/2 pl-8'>
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
    </div>
  );
};

export default cart;
