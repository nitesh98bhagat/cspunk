import Header, { MobileNavBar, VerticleBar } from "./Header";
import { useRouter } from "next/router";

import { FiFeather } from "react-icons/fi";
import Link from "next/link";

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
    <div className="flex flex-col  bg-white dark:bg-slate-900 ">
      {showHeader && <Header />}

      {showHeader && <MobileNavBar />}

      {/* <button className="bg-teal-400  top-1/2 sticky ">Post</button> */}

      <div className="min-h-screen w-full sm:px-20 ">{children}</div>

      {showHeader && (
        <div className="flex justify-end sticky bottom-10   z-50 active:bg-transparent">
          <Link href={"/create-post"} className="">
            <button className="active:bg-transparent  bg-teal-700 text-white font-bold flex py-2 px-5 sm:px-20 sm:py-3 items-center justify-center space-x-2 rounded-full mr-5 sm:mr-52">
              <FiFeather />
              <span>Post Now</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
