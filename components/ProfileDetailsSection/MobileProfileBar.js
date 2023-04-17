import { useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FiEdit, FiSettings } from "react-icons/fi";
import { RiUserFollowLine } from "react-icons/ri";
import { MdLocationOn, MdVerified } from "react-icons/md";
import { useEffect } from "react";
import UserFollowButton from "../UserFollowButton";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";

const MobileProfileBar = ({ profile, followerCount, session }) => {
  const user = useUser();
  const router = useRouter();

  return (
    <div className="flex sm:hidden flex-col  items-center">
      {/* Image */}
      <div className=" w-32 h-32 relative rounded-full my-2 border-2 ">
        <Image
          src={profile?.avatar_url}
          alt="nitesh_bhagat" // required
          fill
          className="rounded-full object-cover "
        />
      </div>

      {/* Full name */}
      <h1 className="text-lg font-semibold">{profile?.full_name}</h1>
      {/* Follower, Location */}
      <div className="flex space-x-1 items-center">
        <span>・</span>

        {/* location */}
        {profile?.location !== null ? (
          <div className="flex flex-row items-center  space-x-1 ">
            {/* <MdLocationOn size={18} /> */}
            <h1 className="text-sm">{profile?.location}</h1>
          </div>
        ) : (
          <h1 className="text-sm">nowhere</h1>
        )}
      </div>

      {/* Bio */}
      <p className="text-xs p-3 text-center">{profile?.bio}</p>

      {/* Edit button */}
      <div className="block sm:hidden w-full px-3">
        {profile?.id === user?.id && (
          <button className="  bg-teal-700 text-white font-bold flex p-1.5  items-center justify-center space-x-2 rounded-full w-full my-auto ">
            <FiEdit />
            <span>Edit </span>
          </button>
        )}
      </div>

      {/* Follow/Unfollow button*/}
      <div className="block sm:hidden w-full px-3">
        {profile?.id !== user?.id && (
          <UserFollowButton
            currentUser={session?.user.id}
            otherUser={profile?.id}
          />
        )}
      </div>
    </div>
  );
};

export default MobileProfileBar;
