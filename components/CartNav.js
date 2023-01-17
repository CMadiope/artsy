import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const CartNav = () => {
  const router = useRouter();

  return (
    <div>
      <div className='flex justify-evenly text-gray-400  '>
        <Link
          href='/cart'
          className={
            router.pathname == "/cart"
              ? "underline decoration-2 decoration-black underline-offset-[5px]"
              : ""
          }
        >
          Shopping Cart
        </Link>
        <Link
          href='/cart/shopping_details'
          className={
            router.pathname == "/cart/shopping_details"
              ? "underline decoration-2 decoration-black underline-offset-[5px]"
              : ""
          }
        >
          Shopping Details
        </Link>
        <Link
          href='/cart/payment_details'
          className={
            router.pathname == "/cart/payment_details"
              ? "underline decoration-2 decoration-black underline-offset-[5px]"
              : ""
          }
        >
          Payment Details
        </Link>
      </div>
      <hr className='w-[59%] ml-[25%] h-px bg-black' />
    </div>
  );
};

export default CartNav;
