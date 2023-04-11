import React from "react";
import { useEffect, useState } from "react";

import Head from "next/head";
import TrendingSection from "../components/TrendingSection";
import PostCard from "../components/PostCard";
import { supabase } from "../utils/supabaseConfig";
import { MobileNavBar } from "../components/Header";

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
      <div className="min-h-screen flex flex-row items-start">
        {/* Main Content */}
        <div className="flex-col flex w-full  border-x  border-slate-200 dark:border-neutral-800">
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
