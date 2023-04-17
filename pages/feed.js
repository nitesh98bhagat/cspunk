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
import useThemeChanger from "../CustomsHooks/useThemeChanger";
import Link from "next/link";
import RightSection from "../components/Feed/RightSection";

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
        {/* Main Content */}
        <div className="flex-col flex sm:mx-5  border-x w-3/5 border-neutral-200 dark:border-neutral-800">
          {/* Feed Tab */}
          <div className="flex p-3 border-b border-neutral-200  dark:border-neutral-900 bg-white dark:bg-neutral-900 z-50 sticky top-12 sm:top-0 space-x-5">
            Home feed
          </div>
          {/* Feed list */}
          {postArray.length === 0 && <h1>Loading...</h1>}
          {postArray.map((e) => (
            <PostCard key={e.post_id} {...e} />
          ))}
        </div>
        {/* Right Side */}
        <RightSection />
      </div>
    </>
  );
}

export default FeedPage;
