import { useUser } from "@supabase/auth-helpers-react";

import { GoHome } from "react-icons/go";
import { FaProjectDiagram } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";

import { useEffect, useState } from "react";
import OverviewTab from "../components/ProfilePageTabs/OverviewTab";
import ProjectsTab from "../components/ProfilePageTabs/ProjectsTab";
import EducationTab from "../components/ProfilePageTabs/EducationTab";
import dateFormat from "dateformat";
import { supabase } from "../utils/supabaseConfig";
import Head from "next/head";
import Link from "next/link";
import ProfileSideBar from "../components/ProfileSideBar";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { MdLocationOn, MdVerified } from "react-icons/md";
import { FiEdit, FiFeather } from "react-icons/fi";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export async function getServerSideProps(context) {
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("username", context.query.username)
    .single();

  const { data, count } = await supabase
    .from("followers")
    .select("follower_id", { count: "exact", head: true })
    .eq("following_id", profile.id);

  console.log(count);

  return {
    props: {
      profile,
      count,
    },
  };
  // return
}

export default function ProfilePage({ profile, count }) {
  const user = useUser();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [tabList, setTabList] = useState([]);
  const [tabBarView, setTabBarView] = useState([]);

  useEffect(() => {
    setTabList([
      { title: "Overview", icon: <GoHome size={20} /> },
      { title: "Projects", icon: <FaProjectDiagram size={20} /> },
      { title: "Education", icon: <GiWhiteBook size={20} /> },
    ]);

    setTabBarView([
      <div key={"overview"} className="min-h-screen p-5">
        <OverviewTab profile={profile} />
      </div>,
      <div key={"project"} className="min-h-screen p-5">
        <ProjectsTab username={profile?.username} />
      </div>,
      <div key={"education"} className="min-h-screen p-5">
        <EducationTab profile={profile} />
      </div>,
    ]);
  }, [profile]);

  return (
    <>
      <Head>
        <title>{profile?.full_name}</title>
      </Head>

      <div className="flex flex-col sm:flex-row  justify-start items-start ">
        {/*Desktop Profile Sidebar */}
        <ProfileSideBar profile={profile} followerCount={count} />

        {/* Mobile profile Bar */}
        <MobileProfileBar profile={profile} followerCount={count} />

        {/* Main Area */}
        <div className="flex flex-col flex-1 relative border-l dark:border-slate-800 ">
          {/* Tab Bar  */}
          <div className="flex flex-row justify-start z-20 sticky top-12 sm:top-14 bg-white dark:bg-slate-900 items-end w-full overflow-hidden hover:overflow-x-auto    ">
            {tabList.map((e, i) => (
              <div
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`
                text-base font-medium  flex items-center  border-b-2  py-3 px-4 space-x-1  cursor-pointer
                ${
                  currentIndex === i
                    ? "text-teal-400  border-teal-400 font-medium"
                    : " border-slate-50 dark:border-slate-800 text-slate-500"
                }
               `}
              >
                <span>{e.icon}</span>
                <span>{e.title}</span>
              </div>
            ))}
            <div className="flex-1 border-b-2 border-slate-50 dark:border-slate-800"></div>
          </div>
          {/* tabar view */}
          <div className="flex flex-col w-full ">
            {tabBarView[currentIndex]}
          </div>
        </div>
      </div>
    </>
  );
}

export const MobileProfileBar = ({ profile, followerCount }) => {
  const user = useUser();
  return (
    <div className="flex sm:hidden flex-col p-1 ">
      {/* Image, Name, details */}
      <div className="flex-row flex items-center space-x-1">
        {/* image */}
        <div className=" w-28 h-28 relative rounded-full my-2 border-4 ">
          <Image
            src={profile?.avatar_url}
            alt="nitesh_bhagat" // required
            fill="fill"
            className="rounded-full object-cover "
          />
        </div>
        <div className="flex-col flex space-y-0.5 flex-1">
          <h1 className="text-lg font-semibold">{profile?.full_name}</h1>
          {/* Username */}
          <div className="flex flex-row items-center  space-x-1">
            <BiUser size={20} />
            <h1 className="text-sm">{profile?.username ?? "default"}</h1>

            <MdVerified className="text-teal-400" />
          </div>
          {/* location */}
          {profile?.location !== null && (
            <div className="flex flex-row items-center  space-x-1 ">
              <MdLocationOn size={20} />
              <h1 className="text-sm">{profile?.location}</h1>
            </div>
          )}

          {profile.id === user?.id && (
            <button className="  bg-teal-700 text-white font-bold flex p-1  items-center justify-center space-x-2 rounded-full w-full">
              <FiEdit />
              <span>Edit </span>
            </button>
          )}
        </div>
      </div>
      <p className="text-base px-2">{profile?.bio}</p>
      <p className="font-bold p-1">{followerCount} Followers </p>
    </div>
  );
};
