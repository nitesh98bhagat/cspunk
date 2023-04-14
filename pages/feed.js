import React from "react";
import { useEffect, useState } from "react";

import Head from "next/head";
import PostCard from "../components/PostCard";
import { supabase } from "../utils/supabaseConfig";
import { MobileNavBar } from "../components/Header";
import Logo from "../components/Logo";
import { BiSearch } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { useUser } from "@supabase/auth-helpers-react";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { AiFillBell, AiFillHome } from "react-icons/ai";
import PeopleToFollow from "../components/PeopleToFollow";

function FeedPage() {
  const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    const getAllPostsFromDatabase = async () => {
      // let { data: posts, error } = await supabase.from("posts").select("*", profiles);

      let { data: posts, error } = await supabase
        .from("posts")
        .select(
          `
  *,  profiles (
    id,
    username,
    full_name,
    avatar_url
  )
`
        )
        .order("created_at", { ascending: false });

      console.log(posts);
      if (posts) {
        setPostArray(posts);
      }

      if (error) {
        console.log("ERROR:", error);
      }
    };

    getAllPostsFromDatabase();
  }, []);

  return (
    <>
      <Head>
        <title>Feed</title>
      </Head>
      <MobileNavBar />

      <div className="min-h-screen flex flex-row w-full items-start">
        {/* Search bar */}
        <SearchBar />
        {/* Main Content */}
        <div className="flex-col flex sm:mx-5  border-x flex-grow border-slate-200 dark:border-neutral-800">
          {/* Feed Tab */}
          <div className="flex p-3 border-b border-neutral-800 bg-neutral-900/95 z-50 sticky top-12 sm:top-0 space-x-5">
            {[
              {
                title: "Home",
                icon: <AiFillHome />,
              },
              {
                title: "Notification",
                icon: <AiFillBell />,
              },
            ].map((e) => (
              <div
                key={e.title}
                className="flex flex-row items-center space-x-1"
              >
                {e.icon}
                <span>{e.title}</span>
              </div>
            ))}
          </div>
          {/* Feed list */}
          {postArray.length === 0 && <h1>Loading...</h1>}
          {postArray.map((e) => (
            <PostCard key={e.post_id} {...e} />
          ))}
        </div>
        {/* Right Side */}
        {/* <TrendingSection /> */}
        <WhatsHappening />
      </div>
    </>
  );
}

export default FeedPage;

export const SearchBar = () => {
  return (
    <div className="hidden sm:flex flex-col w-2/3 min-h-screen sticky top-0 py-5 space-y-3">
      {/* Logo */}
      <Logo />

      <div className="flex flex-row items-center bg-neutral-800 p-2 space-x-1  rounded-full">
        <BiSearch size={22} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none focus:ring-0"
        />
      </div>

      {/* Recommendation */}

      <PeopleToFollow />
    </div>
  );
};

export const WhatsHappening = () => {
  const user = useUser();

  return (
    <div className="sm:flex flex-col hidden w-2/3 min-h-screen sticky  top-0 ">
      {/* Profile */}
      <div className="flex-col flex bg-neutral-800/30 my-2 rounded-2xl p-2">
        <div
          key={user?.user_metadata.username}
          className="flex flex-row items-center space-x-2 py-1"
        >
          <img
            src={user?.user_metadata.avatar_url}
            alt="dp"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-col flex -space-y-1 flex-grow">
            <p>{user?.user_metadata.full_name}</p>
            <span className="text-sm cursor-pointer hover:underline  text-slate-400">
              {user?.user_metadata.user_name}
            </span>
          </div>
          <RiArrowRightCircleFill />
        </div>
      </div>

      {/* Trending */}
      <div className="flex-col flex bg-neutral-800/30 p-3 rounded-3xl">
        <h1 className="text-xl font-bold">{`What's happening`}</h1>

        {/* list */}
        {["React", "Flutter", "TailwindCss", "ChatGPT", "Microsoft"].map(
          (e) => (
            <div key={e} className="p-1 hover:underline cursor-pointer">
              #{e}
            </div>
          )
        )}
      </div>
    </div>
  );
};
