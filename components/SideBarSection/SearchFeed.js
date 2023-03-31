import React from "react";
import { BiSearch } from "react-icons/bi";

function SearchFeed() {
  return (
    <div className="flex-col sticky top-0  flex p-2 ">
      <div className=" text-slate-100 rounded-lg flex flex-row items-center justify-start space-x-2 pb-2">
        <span>{"Search"}</span>
      </div>
      {/* search */}
      <div className="bg-slate-700 ml-auto focus-within:flex-1 text-slate-100 rounded-full flex flex-row  space-x-1 p-1">
        <BiSearch size={25} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:ring-0 outline-none"
        />
      </div>
    </div>
  );
}

export default SearchFeed;
