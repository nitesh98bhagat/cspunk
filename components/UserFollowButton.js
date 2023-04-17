import React, { useEffect, useState } from "react";
import { RiUserFollowLine } from "react-icons/ri";
import { supabase } from "../utils/supabaseConfig";
import { useUser } from "@supabase/auth-helpers-react";

function UserFollowButton({ currentUser, otherUser }) {
  const [follower, setFollower] = useState(null);
  const user = useUser();

  useEffect(() => {
    console.log("follow btn rendered");
    getFollowingStatus();
  }, []);

  // Getting the status whether the currentUser is following it or not
  const getFollowingStatus = async () => {
    const { data, count } = await supabase
      .from("followers")
      .select("id", { count: "exact", head: true })
      .eq("follower_id", currentUser)
      .eq("following_id", otherUser);

    setFollower(count);
    console.log(count);
  };

  const handleClick = () => {
    console.log(currentUser, otherUser);
  };

  return (
    <button
      onClick={handleClick}
      className="  bg-teal-700 text-white font-bold flex p-1.5  items-center justify-center space-x-2 rounded-full w-full  my-auto "
    >
      <RiUserFollowLine />
      <span>{follower !== null && follower === 1 ? "Unfollow" : "Follow"}</span>
    </button>
  );
}

export default UserFollowButton;
