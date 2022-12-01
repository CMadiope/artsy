import React from 'react'
import { BsSearch } from "react-icons/bs";


const marketplace = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between">
        <div className="flex  w-53 h-15 items-center gap-2  bg-input rounded-md p-2">
          <BsSearch className="bg-transparent" />
          <input
            type="text"
            placeholder="Search"
            className="bg-input outline-none placeholder:text-lg"
          />
        </div>
        <div className="flex gap-10 items-center">
          <p className="text-lg">See 1-5 of 15 results</p>
          <select className="text-lg p-1 bg-transparent">
            <option>Newest</option>
            <option>Price (low to high)</option>
            <option>Price (high to low)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default marketplace