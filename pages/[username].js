import { useUser } from "@supabase/auth-helpers-react";

import { GoHome } from "react-icons/go";
import { FaProjectDiagram } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";

import { useEffect, useState } from "react";
import OverviewTab from "../components/ProfilePageTabs/OverviewTab";
import ProjectsTab from "../components/ProfilePageTabs/ProjectsTab";
import EducationTab from "../components/ProfilePageTabs/EducationTab";
import { supabase } from "../utils/supabaseConfig";
import Head from "next/head";
import DesktopProfileSideBar from "../components/ProfileDetailsSection/DesktopProfileSideBar";
import MobileProfileBar from "../components/ProfileDetailsSection/MobileProfileBar";

import PeopleToFollow from "../components/PeopleToFollow";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import MyPostsTab from "../components/ProfilePageTabs/MyPostsTab";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import MobileNavBarForProfileHeader from "../components/ProfilePageTabs/MobileNavBarForProfileHeader";

export async function getServerSideProps(context) {
  // Create authenticated Supabase Client
  const supabaseServer = createServerSupabaseClient(context);
  // Check if we have a session
  const {
    data: { session },
  } = await supabaseServer.auth.getSession();

  // Fetching all profile information of user from context.query
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("username", context.query.username)
    .single();

  // Fetching number of followers from DB
  const { count } = await supabase
    .from("followers")
    .select("follower_id", { count: "exact", head: true })
    .eq("following_id", profile?.id);

  return {
    props: {
      profile,
      count,
    },
  };
  // return
}

export default function ProfilePage({ profile, count }) {
  const [tabList, setTabList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tabBarView, setTabBarView] = useState([]);

  useEffect(() => {
    setTabList([
      { title: "My Posts" },
      { title: "Testimony" },
      { title: "About" },
    ]);

    setTabBarView([
      <div key={"Posts"} className="">
        <MyPostsTab user_id={profile?.id} />
      </div>,
      <div key={"Testimonies"} className=" p-5">
        <h1>Testimonies</h1>
      </div>,
      <div key={"About"} className=" p-5">
        <h1>About</h1>
      </div>,
    ]);
  }, [profile?.id]);
  return (
    <>
      <Head>
        <title>{profile?.full_name}</title>
      </Head>

      <div className="flex flex-col sm:flex-row  justify-start items-start ">
        {/* This component is the appheader for profile page and it will be visible only to mobile screens  */}
        <MobileNavBarForProfileHeader profile={profile} />

        {/*Desktop Profile Sidebar- This will only be visible to desktop screens only*/}
        <DesktopProfileSideBar profile={profile} followerCount={count} />

        {/* Mobile profile Bar- This will only be vissible to Mobile Screens only*/}
        <MobileProfileBar profile={profile} followerCount={count} />

        {/* Main Area- Tabbar & TabbarView */}
        <div className="flex flex-col w-full sm:w-1/2 border-x sm:mx-3 dark:border-neutral-800 ">
          {/* Tab Bar  */}
          <div className="flex flex-row justify-start z-20 sticky top-12 sm:top-14 bg-white dark:bg-[#121212]  ">
            {tabList.map((e, i) => (
              <div
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`
        text-base font-medium  flex p-3 items-center  border-b-2   space-x-1  cursor-pointer
        ${
          currentIndex === i
            ? "text-teal-700 dark:text-teal-400 border-teal-700 dark:border-teal-400 font-medium"
            : " border-slate-50 dark:border-neutral-800 text-slate-500"
        }
       `}
              >
                <span>{e.title}</span>
              </div>
            ))}
            <div className="flex-1 border-b-2 border-slate-50 dark:border-neutral-800"></div>
          </div>
          {/* tabar view */}
          <div className="flex flex-col  ">{tabBarView[currentIndex]}</div>
        </div>

        {/* People to follow-  This will only be visible to desktop screens only*/}
        <PeopleToFollow username={profile?.username} />
      </div>
    </>
  );
}
