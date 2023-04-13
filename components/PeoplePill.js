import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdVerified } from "react-icons/md";

function PeoplePill({ id, full_name, username, isVerified, avatar_url }) {
  return (
    <Link href={`/${username}`}>
      <div className="flex items-center space-x-2 my-2 dark:hover:bg-neutral-800 hover:bg-neutral-100">
        <Image
          src={avatar_url}
          alt={`${username}' picture`}
          width={25}
          height={25}
          className="w-10 aspect-square rounded-full"
        />
        <div className="flex-col flex -space-y-0.5 text-sm flex-1">
          <h1>{full_name}</h1>
          <div className="flex flex-row items-center  space-x-0.5">
            <h1 className="text-sm  text-center font-semibold  ">
              {`@${username}`}
            </h1>
            {isVerified && <MdVerified className="text-teal-500" />}
          </div>
        </div>
        <button>Follow</button>
      </div>
    </Link>
  );
}

export default PeoplePill;
