import Image from "next/image";
import React from "react";
import { BsSearch } from "react-icons/bs";
import Card from "../components/Card";
import DropDownSelect from "../components/DropDownSelect";
import MultiRangeSlider from "../components/MultiRangeSlider";
import filter from "../public/img//filter.png";

const marketplace = () => {
  return (
    <div className="pt-10">
      <div className="flex justify-between">
        <div className="flex  w-53 h-15 items-center gap-2  bg-input rounded-md p-2">
          <BsSearch className="bg-transparent text-sm" />
          <input
            type="text"
            placeholder="Search"
            className="bg-input outline-none text-sm placeholder:text-sm"
          />
        </div>
        <div className="flex gap-10 items-center shadow-lg  p-2 rounded-lg pl-10 ">
          <p className="text-sm">See 1-5 of 15 results</p>
          <select className="text-sm p-1 bg-transparent">
            <option>Sort by</option>
            <option>Newest</option>
            <option>Price (low to high)</option>
            <option>Price (high to low)</option>
          </select>
        </div>
      </div>
      <div className="pt-10 flex">
        <div className="w-1/4">
          <div className="flex gap-2">
            <Image src={filter} width={20} height={20} alt="filter" />
            <h4 className="font-semibold text-sm">Filter</h4>
          </div>
          <div>
            <DropDownSelect
              id="long-value-select"
              instanceId="long-value-select"
            />
          </div>
          <div className="pt-5">
            <h3 className="font-semibold">By price</h3>
            <MultiRangeSlider />
          </div>
          <div className="pt-10">
            <h3 className="font-semibold">By artist</h3>
            <select className="text-sm p-1 bg-transparent">
              <option>All</option>
              <option>Below $100.00</option>
              <option>$150.00 - $200.00</option>
              <option>Above $200.00</option>
            </select>
          </div>
        </div>
        <div className="pl-10">
          <Card />
        </div>
      </div>
      <div className="text-center p-10 ">
        <button className="border p-2 rounded-lg pl-4 pr-4 hover:bg-slate-50">See more</button>
      </div>
    </div>
  );
};

export default marketplace;
