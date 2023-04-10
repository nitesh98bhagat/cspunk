import { useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiUserFollowLine } from "react-icons/ri";
import { MdLocationOn, MdVerified } from "react-icons/md";

const MobileProfileBar = ({ profile, followerCount }) => {
  const user = useUser();
  return (
    <div className="flex sm:hidden flex-col p-2 space-y-2 ">
      <div className="flex-row flex  space-x-3">
        {/* image */}
        <div className=" w-24 h-24 relative rounded-full my-2 border-2 ">
          <Image
            src={profile?.avatar_url}
            alt="nitesh_bhagat" // required
            fill="fill"
            className="rounded-full object-cover "
          />
        </div>
        {/* Image, Name, details */}
        <div className="flex-col flex  flex-1">
          {/* Full name */}
          <h1 className="text-lg font-semibold">{profile?.full_name}</h1>

          {/* Username */}
          <div className="flex flex-row items-center  space-x-1">
            <BiUser size={20} />
            <h1 className="text-sm">{profile?.username ?? "default"}</h1>
            <MdVerified className="text-teal-400" />
          </div>

          {/* Edit button */}
          {profile.id === user?.id && (
            <button className="  bg-teal-700 text-white font-bold flex p-1  items-center justify-center space-x-2 rounded-full w-full my-auto ">
              <FiEdit />
              <span>Edit </span>
            </button>
          )}

          {/* Follow/Unfollow button*/}
          {profile.id !== user?.id && (
            <button className="  bg-teal-700 text-white font-bold flex p-1  items-center justify-center space-x-2 rounded-full w-full my-auto ">
              <RiUserFollowLine />
              <span>Follow </span>
            </button>
          )}
        </div>
      </div>

      {/* Bio */}
      <p className="text-base ">{profile?.bio}</p>

      {/* location */}
      {profile?.location !== null && (
        <div className="flex flex-row items-center  space-x-1 ">
          <MdLocationOn size={20} />
          <h1 className="text-sm">{profile?.location}</h1>
        </div>
      )}
      {/* FOLLOWER COUNT */}
      <div className="flex flex-row items-center  space-x-1">
        <BsPeopleFill size={18} />
        <p className="font-bold ">{followerCount} Followers </p>
      </div>
    </div>
  );
};

export default MobileProfileBar;
