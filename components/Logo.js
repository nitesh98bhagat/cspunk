import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"} className="cursor-pointer flex-1 sm:flex-none">
      <h1 className="text-2xl font-black   cursor-pointer">
        <span className="bg-teal-600 text-white px-1 mr-1  rounded-sm ">
          Cs
        </span>
        Punk
      </h1>
    </Link>
  );
}

export default Logo;
