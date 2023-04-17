import { BiSearch } from "react-icons/bi";
import Logo from "../Logo";
import useThemeChanger from "../../CustomsHooks/useThemeChanger";
import WhatsTrending from "../WhatsTrending";
import { AiFillBell, AiFillHome, AiOutlineUser } from "react-icons/ai";
import { HiHashtag } from "react-icons/hi2";
import Link from "next/link";
import { FiFeather, FiHelpCircle, FiSettings } from "react-icons/fi";
import { useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";

const LeftSection = () => {
  const user = useUser();

  return (
    <div className="hidden sm:flex flex-col flex-1 min-h-screen sticky top-0 py-3   ">
      {/* Logo */}

      <div className="flex items-center justify-between">
        <Logo />
      </div>

      {/* Menu Bar */}
      <MenuBar />

      <Link href={"/create-post"} className="">
        <button className="active:bg-transparent  bg-teal-700 text-white font-bold flex py-2 px-5 sm:px-10 sm:py-3 items-center justify-center space-x-2 rounded-full w-full">
          <FiFeather />
          <span>Post Now</span>
        </button>
      </Link>

      {/* <div className="bg-neutral-800 flex rounded-full"> */}
      <div className="flex p-2 mt-auto mb-5 flex-row space-x-2 items-center justify-between text-slate-800 dark:text-slate-300 bg-neutral-200 dark:bg-neutral-800/95 rounded-3xl ">
        <div className="flex-col px-5  items-start hidden sm:flex">
          <p className="text-xs">Signed in as</p>
          <p className="text-sm font-semibold">
            {user?.user_metadata.user_name}
          </p>
        </div>
        <Image
          src={user?.user_metadata.avatar_url}
          width={40}
          height={30}
          alt="user_dp"
          className="rounded-full"
        />
        {/* </div> */}
      </div>

      {/* Recommendation */}
      {/* <WhatsTrending /> */}
    </div>
  );
};

export default LeftSection;

export const MenuBar = () => {
  const changeTheme = useThemeChanger();

  return (
    <div className="flex flex-col items-start my-5 dark:bg-neutral-900 bg-neutral-100 rounded-3xl text-neutral-700 dark:text-neutral-400  p-2 space-y-2">
      {[
        { title: "Home", icon: <AiFillHome size={20} />, link: "/" },
        { title: "Notifications", icon: <AiFillBell size={20} />, link: "/" },
        { title: "Trending", icon: <HiHashtag size={20} />, link: "/" },

        { title: "Settings", icon: <FiSettings size={20} />, link: "/" },
        { title: "Help", icon: <FiHelpCircle size={20} />, link: "/" },
      ].map((e) => (
        <Link
          href={e.link}
          key={e.title}
          className="flex items-center space-x-2 w-full hover:bg-neutral-800/30  cursor-pointer rounded-full "
        >
          <span className="dark:bg-neutral-800 bg-neutral-200 rounded-2xl p-2">
            {e.icon}
          </span>
          <span>{e.title}</span>
        </Link>
      ))}
      <div className="flex items-center space-x-2 w-full hover:bg-neutral-800/30  cursor-pointer rounded-full ">
        <span className="dark:bg-neutral-800 bg-neutral-200 rounded-2xl p-2">
          {changeTheme()}
        </span>
        <span>Change theme</span>
      </div>
    </div>
  );
};
