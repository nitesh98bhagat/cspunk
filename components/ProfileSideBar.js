import { useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BiLink, BiUser } from "react-icons/bi";
import dateFormat from "dateformat";
import { MdLocationOn, MdVerified } from "react-icons/md";

function ProfileSideBar({ profile, followerCount }) {
  const user = useUser();

  return (
    <div className="flex-col hidden sm:flex  py-3 px-5  sticky -top-48 w-1/4 ">
      {/* image */}
      <div className=" w-56 h-56 relative rounded-full my-2 border-4 border-teal-400">
        <Image
          src={profile?.avatar_url}
          alt="nitesh_bhagat" // required
          fill="fill"
          className="rounded-full object-cover "
        />
      </div>
      {/* details */}
      <div className="flex flex-col w-full ">
        <div className="text-lg  sm:text-xl font-bold flex flex-row items-center space-x-1">
          <span>{profile?.full_name ?? "default"}</span>
        </div>
        {/* Username */}
        <div className="flex flex-row items-center  space-x-1">
          <BiUser size={20} />
          <h1 className="text-sm">{profile?.username ?? "default"}</h1>

          <MdVerified className="text-teal-400" />
        </div>
        {/* Followers */}
        <p className="font-bold p-1">{followerCount} Followers </p>

        {/* bio */}
        <h1 className="text-sm  text-slate-800 dark:text-slate-300   py-2">
          {profile?.bio ?? "default"}
        </h1>

        {/* edit button */}
        {user && user.id === profile?.id && (
          <Link
            href={"/settings"}
            className="bg-teal-400  rounded-md py-1 font-medium my-2 text-center"
          >
            Edit profile
          </Link>
        )}
        {/* location */}
        {profile.location !== null && (
          <div className="flex flex-row items-center  space-x-1">
            <MdLocationOn size={20} />
            <h1 className="text-base">{profile?.location}</h1>
          </div>
        )}
        <h1 className="text-sm font-medium    py-2">
          Joined: {dateFormat(profile?.updated_at, "dd-mmm-yyyy")}
        </h1>
        {/* email */}
        <div className="flex flex-row items-center  space-x-1">
          <AiOutlineMail size={20} />
          <span className="text-sm">{profile?.email}</span>
        </div>

        <h1 className="pb-1 pt-4 text-lg">Social Links</h1>
        {/* Social Links */}

        {profile?.social_links &&
          profile.social_links.map((e) => (
            <a key={e} href={e} target="_blank" rel="noreferrer">
              <div className="flex flex-row  text-sm  items-start my-1 justify-start space-x-2 hover:underline ">
                <BiLink size={20} />
                <span>
                  {e.replace("https://www.", "").replace("https://", "")}
                </span>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}

export default ProfileSideBar;
