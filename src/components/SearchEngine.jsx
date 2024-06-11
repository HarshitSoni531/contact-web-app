import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
export default function SearchEngine({ onOpen }) {
  // Make sure to include an empty dependency array to run the effect only once

  return (
    <div className="flex items-center text-[20px] gap-1 relative mt-4">
      <IoMdSearch className="absolute text-[32px] text-white ml-1" />
      <input
        type="search"
        placeholder="search"
        aria-label="Search"
        className="rounded-lg h-[40px] flex-grow bg-transparent border border-white pl-9 text-white"
      />
      <IoIosAddCircle
        onClick={onOpen}
        className="text-[#fff4d4] hover:transition duration-200 transform hover:scale-140"
        size={40}
      />
    </div>
  );
}
