import React, { useEffect, useState } from "react";
import PeoplePill from "./PeoplePill";
import { FiExternalLink } from "react-icons/fi";
import { supabase } from "../utils/supabaseConfig";
import { useUser } from "@supabase/auth-helpers-react";

function PeopleToFollow({ username }) {
  const user = useUser();
  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    const fetchPeopleSuggestion = async () => {
      // Fetching People to follow
      const { data: peopleToFollow, error } = await supabase
        .from("profiles")
        .select("id, full_name, username, isVerified, avatar_url")
        .neq("username", user?.user_metadata.user_name)
        .neq("username", username)
        .limit(6);

      if (peopleToFollow) {
        setUserArray(peopleToFollow);
      }

      if (error) {
        console.log("ERROR:", error);
      }
    };

    fetchPeopleSuggestion();
  }, []);

  return (
    <div className="flex-col hidden sm:flex   items-center  ">
      <div className="flex-col flex  bg-neutral-100  dark:bg-neutral-800/40 max-w-md min-w-full   rounded-3xl overflow-hidden">
        <h1 className="text-lg font-semibold px-4 py-2.5">People to follow</h1>
        {/* People Pill */}
        {userArray?.map((user) => (
          <PeoplePill key={user?.id} {...user} />
        ))}
      </div>
      <a
        href="http://niteshbhagat.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center space-x-1 flex-row m-2">
          <span>Developer Credit</span>

          <FiExternalLink />
        </div>
      </a>
    </div>
  );
}

export default PeopleToFollow;
