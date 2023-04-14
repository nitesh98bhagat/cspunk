import { useUser } from "@supabase/auth-helpers-react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdClear } from "react-icons/md";
import { supabase } from "../utils/supabaseConfig";
import Image from "next/image";

function CreatePost() {
  const user = useUser();
  const router = useRouter();
  const [postContent, setPostContent] = useState("");

  const addPostToDatabase = async () => {
    const postObject = {
      content: postContent,
      user_id: user.id,
    };

    if (postContent.length > 0) {
      const { data, error } = await supabase.from("posts").insert([postObject]);

      if (data) {
        console.log(data);
      }

      // console.log(data);
      if (error) throw error;

      setPostContent("");
      console.log(postObject);

      router.back();
    }
  };

  return (
    <>
      <Head>
        <title>Create Post</title>
      </Head>

      <div className="max-w-2xl mx-auto ">
        {/* Header */}
        <div className="flex p-2 justify-between items-center ">
          <button onClick={() => router.back()}>
            <MdClear size={25} />
          </button>
          <button
            disabled={postContent.trim().length <= 0}
            className="bg-teal-700 text-sm px-6 py-1.5 text-white rounded-full disabled:bg-gray-100 dark:disabled:bg-neutral-800  active:bg-teal-500 "
            onClick={addPostToDatabase}
          >
            Post now{" "}
          </button>
        </div>

        <div className="flex p-2">
          {/* Current User */}
          <div className=" w-11 h-11 relative z-10 rounded-full border">
            <Image
              src={user?.user_metadata.avatar_url}
              alt="nitesh bhagat"
              layout="fill" // required
              objectFit="cover"
              className="rounded-full "
            />
          </div>

          {/* Text editor */}
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Write a post..."
            className="flex-1 py-2 bg-transparent  focus:ring-0 outline-none text-xl px-3"
            rows="15"
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
