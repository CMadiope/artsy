import Image from "next/image";
import React from "react";
import { cardData } from "./CardData";
import image from "../public/marketplace/ellipsia.png";
import { useRouter } from "next/router";

const Card = () => {
  const router = useRouter();
  const handleClick = (e) => {
    router.push("/card_detail");
  };
  return (
    <div className=' sm:grid sm:grid-cols-2 md:grid-cols-3'>
      {cardData.map((card, index) => (
        <div
          key={index}
          className=' rounded-md shadow-2xl m-5 cursor-pointer p-3 hover:scale-110'
          onClick={handleClick}
        >
          <div className='w-full mb-5'>
            <Image src={image} alt={card.title} />
          </div>

          <p className='text-xs text-gray-500'>{card.title}</p>
          <h3 className='font-extrabold pt-2'>{card.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default Card;
