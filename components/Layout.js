import Header, { MobileNavBar, VerticleBar } from "./Header";
import { useRouter } from "next/router";

import { FiFeather } from "react-icons/fi";
import Link from "next/link";
import { AiFillBell, AiFillHome, AiOutlineUser } from "react-icons/ai";
import { HiHashtag } from "react-icons/hi2";
import LeftSection from "./Feed/LeftSection";

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
      : true && router.pathname === "/"
      ? false
      : true;

  return (
    <div className="flex flex-row  px-5 ">
      <div className="w-1/4 p-2 sticky top-0 pr-5">
        {showHeader && <LeftSection />}
      </div>
      <div className="min-h-screen w-full  ">{children}</div>
    </div>
  );
}
