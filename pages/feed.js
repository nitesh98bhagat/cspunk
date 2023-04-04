import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillCaretUp, AiFillFire, AiOutlineCaretDown } from "react-icons/ai";
import { BsFillChatFill, BsFillPeopleFill } from "react-icons/bs";
import { FiFeather, FiMoreHorizontal } from "react-icons/fi";
import { HiArrowPath, HiBell, HiHome } from "react-icons/hi2";
import Head from "next/head";
import { BiBell, BiHome, BiSearch } from "react-icons/bi";
import TrendingSection from "../components/TrendingSection";
import PostCard from "../components/PostCard";
import { supabase } from "../utils/supabaseConfig";

function FeedPage() {
  const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    const getAllPostsFromDatabase = async () => {
      // let { data: posts, error } = await supabase.from("posts").select("*", profiles);

      let { data: posts, error } = await supabase
        .from("posts")
        .select(
          `
  *
`
        )
        .order("created_at", { ascending: false });

      console.log(posts);
      if (posts) {
        setPostArray(posts);
      }
    };

    getAllPostsFromDatabase();
  }, []);

  return (
    <>
      <Head>
        <title>Feed</title>
      </Head>
      <div className="min-h-screen flex flex-row items-start">
        {/* Main Content */}
        <div className="flex-col flex w-full  border-x  border-slate-800">
          {postArray.map((e) => (
            <PostCard key={e.post_id} {...e} />
          ))}
        </div>
        {/* Right Side */}
        <TrendingSection />
      </div>
    </>
  );
}

export default FeedPage;
