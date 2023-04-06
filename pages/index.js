import Image from "next/image";
import Head from "next/head";
import { GoPrimitiveDot } from "react-icons/go";
import { useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/feed");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>CsPunk | Home of the Devs</title>
      </Head>
      {/* Logo */}
      <Link href={"/"} className="cursor-pointer flex-1 sm:flex-none pt-4">
        <h1 className="text-3xl font-black   cursor-pointer">
          <span className="bg-teal-600 text-white px-1 mr-1  rounded-sm ">
            Cs
          </span>
          Punk
        </h1>
      </Link>

      <div className="flex flex-col-reverse sm:flex-row  w-full   py-10 ">
        <div className="w-full sm:w-1/2 p-2">
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-700 dark:text-slate-300  p-2">
            Be With The Smartest
            <span className="text-emerald-700 font-black">{" NERD "}</span>
            around the world
          </h1>
          <p className="text-slate-400 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            mollitia quam quis molestiae molestias ex at dignissimos corporis!
          </p>
          {user && (
            <Link
              href={`/${user.user_metadata.user_name}`}
              className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-800/70  w-fit  px-5 py-3 rounded-xl flex flex-row items-center justify-center space-x-3"
            >
              <span>Go to your Profile</span>
              <Image
                src={user?.user_metadata.avatar_url}
                width={30}
                height={30}
                alt="user_dp"
                className="rounded-full"
              />
            </Link>
          )}

          {!user && (
            <Link
              href={"/signin"}
              className="bg-teal-800 flex flex-row items-center w-full justify-center text-white py-1 px-3 rounded-md space-x-2 "
            >
              <span className="text-sm font-[600]">Continue with GitHub</span>
              <AiFillGithub size={25} />
            </Link>
          )}
        </div>
        {/* terminal window */}
        <div className="flex-col flex flex-1 bg-gray-200 dark:bg-gray-800 shadow-xl font-bold rounded-md mx-10 overflow-hidden border border-slate-300 dark:border-slate-700 pb-28">
          {/* <Image src="/full_logo.png" width={200} height={50} /> */}
          <div className="flex-row flex bg-zinc-300 dark:bg-zinc-800 p-1 justify-end">
            <GoPrimitiveDot className="text-red-500" />
            <GoPrimitiveDot className="text-yellow-500" />
            <GoPrimitiveDot className="text-green-500" />
          </div>
          <h1 className="text-slate-700 dark:text-slate-200  text-4xl p-2">
            Welcome
            <span className="text-emerald-500 font-black">{"  //: DEVs"}</span>
          </h1>
          <h1 className="text-base font-semibold text-lime-500  tracking-widep px-2">
            {
              "$>> Get Started with creating your own profile || By searching an existing Developer"
            }
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-center items-center py-10 w-full">
        <div className="flex-col flex  items-center p-5">
          <h1 className="text-6xl font-bold">100,000+</h1>
          <h1 className="text-2xl">Developers on the Site</h1>
        </div>
        <div className="flex-col flex  items-center p-5">
          <h1 className="text-6xl font-bold">13,000+</h1>
          <h1 className="text-2xl">Post by developers</h1>
        </div>{" "}
        <div className="flex-col flex  items-center p-5">
          <h1 className="text-6xl font-bold">58,000+</h1>
          <h1 className="text-2xl">Open source</h1>
        </div>
      </div>
    </div>
  );
}
