import React from "react";
import { MdPostAdd } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

function HomeFeed() {
  return (
    <div className="flex-col sticky top-0  flex p-2 ">
      <div className=" text-slate-100 rounded-lg flex flex-row items-center justify-start space-x-2 pb-2">
        <MdPostAdd size={25} />
        <span>{"Add a post"}</span>
      </div>
     <button className="bg-teal-700 rounded-md p-1 flex items-center justify-center space-x-1"><TbEdit/> <span>Post</span> </button>
    </div>
  );
}

export default HomeFeed;
