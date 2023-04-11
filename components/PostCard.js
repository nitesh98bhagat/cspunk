import { useState } from "react";
import { AiFillCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiArrowPath } from "react-icons/hi2";

import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";
import Link from "next/link";
import Image from "next/image";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");

export default function PostCard({ content, created_at, profiles }) {
  // const { postImage, content, userName, time } = props;
  const [upbit, setUpbit] = useState("none");

  const date = new Date(created_at);

  return (
    <div className="flex flex-row pb-3  border-b dark:border-neutral-800 border-neutral-200  space-x-2 p-3">
      {/* content area */}
      <div className="flex flex-col  flex-1 justify-start items-start space-y-1">
        {/* profile header */}

        <div className=" flex flex-row   items-center w-full space-x-2">
          <div className=" w-8 h-8 relative z-10 rounded-full">
            <Image
              src={
                profiles.avatar_url ??
                "https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/webAssets%2FWhatsApp%20Image%202020-02-17%20at%2011.44.18%20AM.jpeg?alt=media&token=ed3e9338-bbdd-4b6e-94db-8822931e6b83"
              }
              alt="nitesh bhagat"
              layout="fill" // required
              objectFit="cover"
              className="rounded-full "
            />
          </div>

          <div className="flex-col flex flex-1 -space-y-1 ">
            <span className="text-sm font-medium">
              {profiles.full_name ?? "Full Name"}
            </span>

            <div className="flex items-center ">
              <Link
                href={`/${profiles.username}`}
                className=" hover:underline hover:text-slate-600"
              >
                <span className="text-sm font-light text-slate-400">
                  {"@" + profiles.username ?? "Username"}
                </span>
              </Link>
              <span>・</span>
              <p className="text-xs font-light ">
                {/* {dateFormat(created_at, "dd-mmm-yyyy") ?? "2 day ago"} */}
                {timeAgo.format(date, "twitter")}
              </p>
            </div>
          </div>

          {/* repost button */}
          <button>
            <HiArrowPath size={25} className="text-slate-600 " />
          </button>
          <div className="px-0.5" />
          {/* more options */}
          <button>
            <FiMoreHorizontal size={25} className="text-slate-600" />
          </button>
        </div>

        {/* Caption */}
        {content && (
          <h1 className="text-base sm:text-base py-2 ">{content ?? ""}</h1>
        )}

        {/* Post Picture */}
        {/* {postImage && (
          <img
            src={
              postImage ??
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt="postImage"
            className=" rounded-3xl aspect-square w-full h-72  object-cover"
          />
        )} */}

        {/* Comment section */}
        <div className=" text-slate-600 w-full py-1 flex flex-row items-center">
          <BsFillChatFill />
          <span className="text-sm px-1">0</span>
          <input
            type="text"
            className=" w-full py-1 px-3 mx-1 focus:ring-0 rounded-md text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800/5 hover:bg-slate-800/10 dark:focus:bg-slate-800/50 focus:bg-slate-800/10 outline-none flex-1 "
            placeholder="// add comment"
          />
        </div>
      </div>
      {/* Upbit/downbit */}
      <div className="flex-col justify-center border dark:border-slate-800 border-slate-200 rounded-lg items-center flex  overflow-hidden text-slate-500">
        {/* upbit */}
        <button
          className={`flex flex-col items-center cursor-pointer justify-center flex-1 p-1 ${
            upbit === true ? "text-green-600 dark:text-green-400  " : ""
          }`}
          onClick={() => setUpbit(true)}
        >
          <AiFillCaretUp className="py-auto" size={25} />
          <span className="text-xs ">0</span>
        </button>
        {/* divider */}
        <div className=" border w-full dark:border-slate-800 border-slate-200" />
        {/* downbit */}
        <button
          className={`flex flex-col items-center justify-center flex-1 p-1 cursor-pointer ${
            upbit === false && "text-red-700 dark:text-red-400"
          }`}
          onClick={() => setUpbit(false)}
        >
          <span className="text-xs ">0</span>
          <AiOutlineCaretDown size={25} />
        </button>
      </div>
    </div>
  );
}

// {
//   "post_id": "174a6f3f-3ca3-4d03-aea4-a491e3513cf4",
//   "created_at": "2023-04-04T11:57:40.001812+00:00",
//   "content": "working on fetching relational data from different tables on post  ",
//   "user_id": "e343dcdd-fd8c-48eb-b176-6e513b4af679",
//   "profiles": {
//       "id": "e343dcdd-fd8c-48eb-b176-6e513b4af679",
//       "username": "nitesh98bhagat"
//   }
// }
