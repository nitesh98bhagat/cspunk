import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiSettings } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { MdVerified } from "react-icons/md";

const MobileNavBarForProfileHeader = ({ profile }) => {
  const router = useRouter();

  return (
    <div className="flex-col sm:hidden w-full flex sticky top-0 z-50 bg-white dark:bg-neutral-900">
      <div className="flex flex-row py-3 px-1 items-center justify-center   ">
        <IoIosArrowBack size={30} onClick={() => router.back()} />

        <Link href={"/"} className="mx-auto hover:bg-transparent">
          <div className="flex flex-row items-center  space-x-0.5">
            <h1 className="text-base  text-center font-black  ">
              {`@${profile?.username}`}
            </h1>
            {profile?.isVerified && <MdVerified className="text-teal-500" />}
          </div>
        </Link>

        <Link href={`/settings`}>
          <FiSettings size={25} />
        </Link>
      </div>

      <hr className="border-neutral-100 dark:border-neutral-800" />
    </div>
  );
};

export default MobileNavBarForProfileHeader;
