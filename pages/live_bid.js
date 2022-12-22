import React from "react";
import Image from "next/image";
import pic1 from "../public/auctions/live-bid.png";
import { MdOutlineCancel } from "react-icons/md";

const LiveBid = () => {
  return (
    <div className='max-w-[1240px]'>
      <div className='flex '>
        <div className='w-1/2 relative'>
          <Image src={pic1} alt='/' />
          <div className='absolute text-xl top-0 flex'>
            <MdOutlineCancel />
            <p className='flex-end'>live</p>
          </div>
        </div>
        <div className='w-1/2'> test 2</div>
      </div>
    </div>
  );
};

export default LiveBid;
