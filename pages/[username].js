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
import DesktopProfileSideBar from "../components/ProfileDetailsSection/DesktopProfileSideBar";

import MobileProfileBar from "../components/ProfileDetailsSection/MobileProfileBar";

export async function getServerSideProps(context) {
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
  const user = useUser();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [tabList, setTabList] = useState([]);
  const [tabBarView, setTabBarView] = useState([]);

  useEffect(() => {
    setTabList([
      { title: "Home", icon: <GoHome size={20} /> },
      { title: "Testimony", icon: <FaProjectDiagram size={20} /> },
      { title: "About", icon: <GiWhiteBook size={20} /> },
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
        <DesktopProfileSideBar profile={profile} followerCount={count} />
        {/* Mobile profile Bar */}
        <MobileProfileBar profile={profile} followerCount={count} />
        {/* Main Area */}
        <div className="flex flex-col relative w-full border-l dark:border-slate-800 ">
          {/* Tab Bar  */}
          <div className="flex flex-row justify-start z-20 sticky top-12 sm:top-14 bg-white dark:bg-neutral-900  ">
            {tabList.map((e, i) => (
              <div
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`
                text-base font-medium  flex p-3 items-center  border-b-2   space-x-1  cursor-pointer
                ${
                  currentIndex === i
                    ? "text-teal-700 dark:text-teal-400 border-teal-700 dark:border-teal-400 font-medium"
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
          {/* <div className="flex flex-col w-full ">
            {tabBarView[currentIndex]}
          </div> */}
        </div>
      </div>
    </>
  );
}
