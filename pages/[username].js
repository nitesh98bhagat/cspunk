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

export default function ProfilePage({ profile }) {
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
        <ProjectsTab username={profile.username} />
      </div>,
      <div key={"education"} className="min-h-screen p-5">
        <EducationTab profile={profile} />
      </div>,
    ]);
  }, [profile]);

  return (
    <>
      <Head>
        <title>{profile.full_name}</title>
      </Head>

      <div className="flex flex-col sm:flex-row  justify-start items-start ">
        {/* Profile Sidebar */}
        <ProfileSideBar profile={profile} />

        {/* Main Area */}
        <div className="flex flex-col flex-1 relative border-l dark:border-slate-800 ">
          {/* Tab Bar  */}
          <div className="flex flex-row justify-start z-20 sticky top-14 bg-white dark:bg-slate-900 items-end w-full overflow-hidden hover:overflow-x-auto    ">
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

export const getStaticPaths = async () => {
  const { data: profiles } = await supabase.from("profiles").select("username");

  const paths = profiles.map(({ username }) => ({
    params: {
      username: username.toString(),
    },
  }));

  return {
    paths,

    fallback: false,
  };
};

export const getStaticProps = async ({ params: { username } }) => {
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("username", username)
    .single();

  return {
    props: {
      profile,
    },
    revalidate: 10,
  };
};
