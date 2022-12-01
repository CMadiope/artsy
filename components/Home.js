import React from "react";
import Carousel from "./Carousel";

const HomePage = () => {
  return (
    <div className="">
      <div className="items-center pt-10">
        <h1 className="font-semibold text-7xl self-center">
          Photography is poetry & beautiful untold stories
        </h1>
        <p className="text-3xl self-center pt-10">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      <div>
        <Carousel/>
      </div>
    </div>
  );
};

export default HomePage;
