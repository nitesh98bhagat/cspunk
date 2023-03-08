import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";
import { FiFeather, FiMoreHorizontal } from "react-icons/fi";
import { HiArrowPath } from "react-icons/hi2";

function FeedPage() {
  return (
    <div className="min-h-screen flex flex-row">
      {/* <div className="flex-grow">
        <button className="  bg-slate-800/50 flex p-2 items-center justify-center space-x-2 rounded-lg">
          <FiFeather />
          <span>Post Now</span>
        </button>
      </div> */}
      
      <div className="flex-col flex w-full sm:w-3/5 py-5 mx-auto">
        {[
          {
            id: "eyeyeyeyeyye",
            postImage:
              "https://askboon.com/wp-content/uploads/2021/09/code-screenshot.png",
            postContent: "New Design",
          },
          {
            id: "hdhdkd",
            postContent: "Js is the new trend",
          },
          {
            id: "whejeirpokcdkd",
            postContent: "Flutter is Great, But feels a little janky ",
          },
          {
            id: "1ttu38wssji",
            postContent:
              "What I’ve achieved at @getstream_io in 2022. Contributed to increasing monthly downloads of Stream Android SDK by more than 6 times. Published new 12 open-source libraries & projects. Published 13 global blog posts and 8 regional blog posts. Attended 9 conferences.",
          },
          {
            id: "shwjhwjhjks",
            postContent: "Writing Readme is an art.",
          },
          {
            id: "shwjhwjhjks",
            postContent:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat, aut unde dignissimos quia adipisci mollitia, odio maxime similique aspernatur eum? Maxime cum debitis cumque. Hic, omnis doloribus nisi, at modi exercitationem cupiditate tempora repudiandae consectetur eveniet repellendus sit architecto rerum? Corporis aliquid illum natus fuga similique. Rem, dolorum fugiat?",
          },
        ].map((e) => (
          <PostCard key={e.postImage} props={e} />
        ))}
      </div>
    </div>
  );
}

{
  /* <PostCard key={e.postImage} props={e} /> */
}

export default FeedPage;

function PostCard({ props }) {
  const { postImage, postContent, userName, time } = props;
  const [upbit, setUpbit] = useState("none");

  return (
    <div className="flex flex-row pb-3 mb-3 border-b border-slate-800  space-x-2">
      {/* content area */}
      <div className="flex flex-col  flex-1 justify-start items-start space-y-1">
        {/* profile header */}
        <div className=" flex flex-row   items-center w-full space-x-2">
          <div className=" w-8 h-8 relative z-10 rounded-full border  border-teal-500">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/webAssets%2FWhatsApp%20Image%202020-02-17%20at%2011.44.18%20AM.jpeg?alt=media&token=ed3e9338-bbdd-4b6e-94db-8822931e6b83"
              }
              alt="nitesh bhagat"
              layout="fill" // required
              objectFit="cover"
              className="rounded-full "
            />
          </div>
          <div className="flex-col flex flex-1 ">
            <span className="text-sm font-medium">
              {userName ?? "Nitesh Bhagat"}
            </span>
            <p className="text-xs font-light -my-1">{time ?? "2 day ago"}</p>
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
        {postContent && (
          <h1 className="text-base sm:text-base py-2">{postContent ?? ""}</h1>
        )}

        {/* Post Picture */}
        {postImage && (
          <img
            src={
              postImage ??
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt="postImage"
            className=" rounded-3xl aspect-square w-full h-72  object-cover"
          />
        )}

        {/* Comment section */}
        <div className=" text-slate-600 w-full py-1 flex flex-row items-center">
          <BsFillChatFill />
          <span className="text-sm px-1">124</span>
          <input
            type="text"
            className=" w-full py-1 px-3 mx-1 focus:ring-0 rounded-md text-sm text-white bg-slate-800/20 hover:bg-slate-800/20 focus:bg-slate-800 outline-none flex-1 "
            placeholder="// add comment"
          />
        </div>
      </div>
      {/* Upbit/downbit */}
      <div className="flex-col justify-center border border-slate-800 rounded-lg items-center flex  overflow-hidden text-slate-500">
        {/* upbit */}
        <button
          className={`flex flex-col items-center cursor-pointer justify-center flex-1 p-1 ${
            upbit === true ? "bg-green-400/50 text-green-100" : ""
          }`}
          onClick={() => setUpbit(true)}
        >
          <AiFillCaretUp className="py-auto" size={25} />
          <span className="text-xs ">25.6k</span>
        </button>
        {/* divider */}
        <div className=" border w-full border-slate-800" />
        {/* downbit */}
        <button
          className={`flex flex-col items-center justify-center flex-1 p-1 cursor-pointer ${
            upbit === false ? "bg-red-400/70 text-red-100" : ""
          }`}
          onClick={() => setUpbit(false)}
        >
          <span className="text-xs ">1.21k</span>
          <AiOutlineCaretDown size={25} />
        </button>
      </div>
    </div>
  );
}
