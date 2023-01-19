import Image from "next/image";
import React from "react";
import confir from "../public/cart/confirm.png";
import Link from "next/link";

const confirm = () => {
  return (
    <div className=''>
      <div className='flex justify-center py-12'>
        <Image src={confir} alt='/' className='w-[250px]' />
      </div>
      <h3 className='text-center text-2xl font-semibold'>
        Hey Celestina, thank you for your purchase.{" "}
      </h3>
      <p className='text-center'>
        You are amazing. Cheers to being
        <Link href='/' className='text-blue-500 pl-1 hover:underline'>
          ARTSY!
        </Link>
      </p>
    </div>
  );
};

export default confirm;
