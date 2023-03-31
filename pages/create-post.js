import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { MdClear } from "react-icons/md";

function CreatePost() {
  const router = useRouter();
  return (
    <>
    <Head>
        <title>Create Post</title>
    </Head>

    <div className="px-52">
      <div className="flex py-4 justify-between items-center border-b">
        <h1 className="text-xl font-bold flex-1">Create Post</h1>
        <button className="bg-teal-500 px-3 py-1 mx-5 text-white rounded-lg">Post now </button>
        <button onClick={() => router.back()}>
          <MdClear size={25} />
        </button>
      </div>
      <textarea placeholder="Write a post..." className="w-full py-5 focus:ring-0 outline-none text-xl" rows="15"></textarea>
    </div>
    </>
  );
}

export default CreatePost;
