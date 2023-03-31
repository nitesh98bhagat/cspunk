import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillCaretUp, AiFillFire, AiOutlineCaretDown } from "react-icons/ai";
import { BsFillChatFill, BsFillPeopleFill } from "react-icons/bs";
import { FiFeather, FiMoreHorizontal } from "react-icons/fi";
import { HiArrowPath, HiBell, HiHome } from "react-icons/hi2";
import Head from "next/head";
import { BiBell, BiHome, BiSearch } from "react-icons/bi";

function FeedPage() {
  return (
    <>
      <Head>
        <title>Feed</title>
      </Head>
      <div className="min-h-screen flex flex-row items-start">
      
        {/* Main Content */}
        <div className="flex-col flex w-full  border-x  border-slate-800">
          <div className=" text-slate-100 flex flex-row items-center sticky top-0 bg-slate-900 z-40 justify-start p-3">
            {/* <HiHome size={25} /> */}
            <span className="mx-2">{"Home"}</span>
            
          </div>
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
            {
              id: "hdhdkd",
              postContent: "Js is the new trend",
            },
            {
              id: "whejeirpokcdkd",
              postContent: "Flutter is Great, But feels a little janky ",
            },
          ].map((e) => (
            <PostCard key={e.postImage} props={e} />
          ))}
        </div>
        {/* Right Side */}
        <div className="flex flex-col w-2/3 sticky  top-0 p-2">
          <h1 className="text-lg font-bold flex flex-row items-center space-x-2 py-2">
            <AiFillFire />
            <span>{"What's happening..."}</span>
          </h1>
          <div className="flex-col flex  dark:bg-slate-800/50 bg-slate-200  rounded-xl p-2  ">
            {[
              "#Flutter",
              "#JavaScript",
              "#Ui/Ux",
              "#PythonRules",
              "#NewDartEngine",
              "#ChatGPTNewEra",
              "#Iphone15",
            ].map((e) => (
              <p
                key={e}
                className="p-1 cursor-pointer text-base hover:underline  "
              >
                {e}
              </p>
            ))}
          </div>
          <div className="flex-col flex    rounded-md  py-2 ">
            <h1 className="text-xl flex flex-row items-center space-x-2">
              <BsFillPeopleFill />
              <span>{"Recommended Groups"}</span>
            </h1>
            {[
              {
                groupName: "Js Ninja",
                username: "@jsNinja",
                image:
                  "https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/js2.jpg ",
              },
              {
                groupName: "Dart Community",
                username: "@dartKings",
                image:
                  "https://play-lh.googleusercontent.com/qbeCduZblOk80GaY164lw47gIRjXq9QIzSmgFwqQj1PyhNhTWxYR0OqPzm8BumnmJQ",
              },
              {
                groupName: "Dart Community",
                username: "@dartKings",
                image:
                  "https://play-lh.googleusercontent.com/qbeCduZblOk80GaY164lw47gIRjXq9QIzSmgFwqQj1PyhNhTWxYR0OqPzm8BumnmJQ",
              },
            ].map((e) => (
              <div
                key={e.username}
                className="flex flex-row items-center space-x-2 p-2"
              >
                <img
                  src={e.image}
                  alt="dp"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-col flex -space-y-1 flex-grow">
                  <p>{e.groupName}</p>
                  <span className="text-sm cursor-pointer hover:underline  text-slate-400">
                    {e.username}
                  </span>
                </div>

                <button>Join</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
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
    <div className="flex flex-row pb-3 mb-3 border-b dark:border-slate-800 border-slate-200  space-x-2 p-3">
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
          <h1 className="text-base sm:text-base py-2 ">{postContent ?? ""}</h1>
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
          <span className="text-xs ">25.6k</span>
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
          <span className="text-xs ">1.21k</span>
          <AiOutlineCaretDown size={25} />
        </button>
      </div>
    </div>
  );
}
