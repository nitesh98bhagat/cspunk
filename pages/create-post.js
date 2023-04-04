import { useUser } from "@supabase/auth-helpers-react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdClear } from "react-icons/md";
import { supabase } from "../utils/supabaseConfig";

function CreatePost() {
  const user = useUser();
  const router = useRouter();
  const [postContent, setPostContent] = useState(null);

  const addPostToDatabase = async () => {
    const postObject = {
      content: postContent,
      user_id: user.id,
    };

    const { data, error } = await supabase.from("posts").insert([postObject]);

    if (data) {
      console.log(data);
    }

    // console.log(data);
    if (error) throw error;

    router.back();
  };

  return (
    <>
      <Head>
        <title>Create Post</title>
      </Head>

      <div className="max-w-2xl mx-auto">
        <div className="flex py-4 justify-between items-center border-b">
          <h1 className="text-xl font-bold flex-1">Create Post</h1>
          <button
            className="bg-teal-500 px-3 py-1 mx-5 text-white rounded-lg"
            onClick={addPostToDatabase}
          >
            Post now{" "}
          </button>
          <button onClick={() => router.back()}>
            <MdClear size={25} />
          </button>
        </div>
        <textarea
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="Write a post..."
          className="w-full bg-transparent py-5 focus:ring-0 outline-none text-xl"
          rows="15"
        ></textarea>
      </div>
    </>
  );
}

export default CreatePost;
