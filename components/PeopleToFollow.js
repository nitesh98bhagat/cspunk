import React from "react";
import PeoplePill from "./PeoplePill";
import { FiExternalLink } from "react-icons/fi";

function PeopleToFollow({ userList }) {
  return (
    <div className="flex-col hidden sm:flex sticky top-16  w-1/2 items-center">
      <div className="flex-col flex  bg-neutral-100  dark:bg-neutral-800/70  m-2 p-4 rounded-3xl">
        <h1 className="text-lg font-semibold ">People to follow</h1>
        {/* People Pill */}
        {userList?.map((user) => (
          <PeoplePill key={user?.id} {...user} />
        ))}
      </div>
      <a
        href="http://niteshbhagat.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center space-x-1 flex-row">
          <span>Developer Credit</span>

          <FiExternalLink />
        </div>
      </a>
    </div>
  );
}

export default PeopleToFollow;
