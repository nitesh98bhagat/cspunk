import React, { Fragment, useEffect, useState } from "react";
import { RiUserFollowLine } from "react-icons/ri";
import { supabase } from "../utils/supabaseConfig";
import { useUser } from "@supabase/auth-helpers-react";

function UserFollowButton({ currentUser, otherUser }) {
  const [isFollowing, setIsFollowing] = useState(null);
  const [numberOfFollowers, setNumberOfFollowers] = useState(null);
  const [refreshUI, setRefreshUI] = useState(null);

  useEffect(() => {
    getFollowingStatus();
  }, [refreshUI]);

  // Getting the status whether the currentUser is following it or not
  const getFollowingStatus = async () => {
    const { count } = await supabase
      .from("followers")
      .select("id", { count: "exact", head: true })
      .eq("follower_id", currentUser)
      .eq("following_id", otherUser);

    setIsFollowing(count);
    getNumberOfFollowers();
  };

  const getNumberOfFollowers = async () => {
    const { count } = await supabase
      .from("followers")
      .select("follower_id", { count: "exact", head: true })
      .eq("following_id", otherUser);

    setNumberOfFollowers(count);
  };

  const addFollow = async () => {
    const { data, error } = await supabase
      .from("followers")
      .insert([{ follower_id: currentUser, following_id: otherUser }]);

    setRefreshUI(true);
  };

  const removeFollow = async () => {
    const { data, error } = await supabase
      .from("followers")
      .delete()
      .eq("follower_id", currentUser)
      .eq("following_id", otherUser);

    setRefreshUI(false);
  };

  return (
    <Fragment>
      <h1 className="font-semibold my-2">{numberOfFollowers} Followers</h1>

      <button
        onClick={
          isFollowing !== null && isFollowing === 1 ? removeFollow : addFollow
        }
        className={`    font-bold flex p-1.5  items-center justify-center space-x-2 rounded-full w-full  my-auto 
        ${
          isFollowing !== null && isFollowing === 1
            ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:bg-neutral-200"
            : "bg-teal-700 text-white"
        }
        `}
      >
        <RiUserFollowLine />
        <span>
          {isFollowing !== null && isFollowing === 1 ? "Unfollow" : "Follow"}
        </span>
      </button>
    </Fragment>
  );
}

export default UserFollowButton;
