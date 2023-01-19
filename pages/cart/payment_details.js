import React from "react";
import CartNav from "../../components/CartNav";
import { AiFillLock } from "react-icons/ai";
import meta from "../../public/payment/MetaMask - jpeg.png";
import coinbase from "../../public/payment/Coinbase - png.png";
import wallet from "../../public/payment/WalletConnect - jpeg.png";
import phantom from "../../public/payment/Phantom - jpeg.png";
import Image from "next/image";

const payment_details = () => {
  return (
    <div className='m-auto'>
      <CartNav />
      <div className='flex justify-between pt-12'>
        <h3 className='font-semibold text-lg'>Payment method</h3>
        <div className='flex gap-2 items-center text-[#747474]'>
          <AiFillLock size={20} />
          <p className='text-lg'>Secure server</p>
        </div>
      </div>
      <div className='max-sm:flex-col max-sm:items-center flex '>
        <div className='w-1/2 border-2 flex flex-col pl-4 py-8 pr-2 rounded'>
          <div className='flex justify-between max-sm:flex-col'>
            <div className='flex gap-2 items-center'>
              <input type='radio' className=' accent-green-300' />
              <label className='md:text-lg'>Select your wallet</label>
            </div>
            <div className='grid max-md:grid max-md:grid-cols-2 max-sm:pt-4 md:flex '>
              <Image
                className='w-[40px] sm:w-[45] md:w-[50px]'
                src={meta}
                alt='/'
              />
              <Image
                className='w-[40px] sm:w-[45] md:w-[50px]'
                src={wallet}
                alt='/'
              />
              <Image
                className='w-[40px] sm:w-[45] md:w-[50px]'
                src={phantom}
                alt='/'
              />
              <Image
                className='w-[40px] sm:w-[45] md:w-[50px]'
                src={coinbase}
                alt='/'
              />
            </div>
          </div>
          <p className='text-center text-sm text-[#616161] pt-6 px-8'>
            Connect with one of our available wallet providers or add and
            connect a new wallet.{" "}
          </p>
          <div className='grid  gap-4 py-2'>
            <div className='flex flex-col'>
              <label className='text-[#888888] py-2'>Wallet type</label>
              <input
                className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#F2F2F2] placeholder:text-[#747474]'
                type='email'
                placeholder=''
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-[#888888] py-2'>Key</label>
              <div className='flex justify-between border-2 rounded-lg p-3 items-center border-gray-300 bg-[#F2F2F2]'>
                <p className='text-[#747474] text-sm'>Please enter your key</p>

                <Image className='w-[30px]' src={meta} alt='/' />
              </div>
            </div>
            <div className='flex max-md:flex-col md:gap-8'>
              <div className='flex flex-col w-1/2'>
                <label className='text-[#888888] py-2'>Expiry date</label>
                <input
                  className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#F2F2F2] placeholder:text-[#747474]'
                  type='date'
                  placeholder=''
                />
              </div>
              <div className='flex flex-col w-1/2'>
                <label className='text-[#888888] py-2'>CVV</label>
                <input
                  className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#F2F2F2] placeholder:text-[#747474]'
                  type='email'
                  placeholder='***'
                />
              </div>
            </div>
          </div>
          <div className='flex items-center gap-2 pt-6'>
            <input type='checkbox' className='accent-[#F2F2F2]' />
            <p className='text-sm text-[#747474]'>
              Save my wallet details & information for future transactions
            </p>
          </div>
        </div>

        <div className='w-1/2 p-4'>
          <h3 className='border-b pb-12'>Payment Summary</h3>
          <p className='py-8 text-lg'>Metamask wallet : 002345KJi90pzzz3</p>
          <p className='text-[#616161] border-b pb-6'>
            Actively linked to Yaba, Lagos Nigeria.
          </p>
          <p className='border-b-2 py-6'>
            Expected arrival date: Between 22nd September and 26th September
            20222
          </p>
          <div className='pt-8 w-full pl-8 md:px-12 '>
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
      <button className='bg-[#3341C1] text-white py-4 rounded px-8 w-1/2 mt-8'>
        Confirm
      </button>
    </div>
  );
};

export default payment_details;
