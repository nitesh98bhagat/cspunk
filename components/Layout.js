import Header, { VerticleBar } from "./Header";
import { useRouter } from "next/router";
import Footer from "./Footer";
import { BiBell } from "react-icons/bi";
import HomeFeed from "./SideBarSection/HomeFeed";
import { useState } from "react";
import ActivityFeed from "./SideBarSection/ActivityFeed";
import SearchFeed from "./SideBarSection/SearchFeed";

export default function Layout({ children }) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/auth"
      ? false
      : true && router.pathname === "/help-center"
      ? false
      : true && router.pathname === "/signin"
      ? false
      : true && router.pathname === "/create-post"
      ? false
      : true;



  return (
    <div className="flex flex-col  bg-white dark:bg-slate-900 ">
      {showHeader && <Header />}
      

      <div className="min-h-screen w-full px-20 ">{children}</div>
    </div>
  );
}
