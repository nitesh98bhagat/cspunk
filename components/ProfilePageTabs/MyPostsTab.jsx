import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseConfig";
import PostCard from "../PostCard";
import { useUser } from "@supabase/auth-helpers-react";

function MyPostsTab({ user_id }) {
  const [postArray, setPostArray] = useState([]);
  useEffect(() => {
    const getAllMyPostsFromDatabase = async () => {
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
        .eq("user_id", user_id)
        .order("created_at", { ascending: false });

      console.log(posts);
      if (posts) {
        setPostArray(posts);
      }

      if (error) {
        console.log("ERROR:", error);
      }
    };

    getAllMyPostsFromDatabase();
    console.log(postArray);
  }, [user_id]);

  return (
    <div>
      {postArray.length === 0 && <h1>Loading...</h1>}
      {postArray.map((e) => (
        <PostCard key={e.post_id} {...e} />
      ))}
    </div>
  );
}

export default MyPostsTab;
