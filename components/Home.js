import React from "react";
import Carousel from "./Carousel";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div className=''>
      <div className='items-center pt-10 px-16'>
        <h1 className='font-semibold text-4xl self-center font-clash_display xl:text-7xl'>
          Photography is poetry & beautiful untold stories
        </h1>
        <p className='text-lg  self-center pt-10'>
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      <div className=''>
        <Carousel />
      </div>
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
