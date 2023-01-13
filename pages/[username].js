import { useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";

// icons
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { BiUser } from "react-icons/bi";

import { MdLocationOn, MdVerified } from "react-icons/md";
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

export default function ProfilePage({ profile }) {
  const user = useUser();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [tabList, setTabList] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);
  const [tabBarView, setTabBarView] = useState([]);

  useEffect(() => {
    setTabList([
      { title: "Overview", icon: <GoHome size={20} /> },
      { title: "Projects", icon: <FaProjectDiagram size={20} /> },
      { title: "Education", icon: <GiWhiteBook size={20} /> },
    ]);

    setSocialLinks([
      {
        title: "facebook.com/nitesh.bhagat.775",
        icon: <SiFacebook size={22} />,
        link: "https://www.facebook.com/nitesh.bhagat.775",
      },
      {
        title: "instagram.com/_nitesh_bhagat_",
        icon: <AiFillInstagram size={22} />,
        link: "https://www.instagram.com/_nitesh_bhagat_/",
      },
      {
        title: "twitter.com/myself_nitesh",
        icon: <AiFillTwitterCircle size={22} />,
        link: "https://www.twitter.com/myself_nitesh",
      },
      {
        title: "linkedin.com/in/nitesh-bhagat-a8b996137",
        icon: <AiFillLinkedin size={22} />,
        link: "https://www.linkedin.com/in/nitesh-bhagat-a8b996137/",
      },
      {
        title: "github.com/nitesh98bhagat",
        icon: <AiFillGithub size={22} />,
        link: "https://github.com/nitesh98bhagat",
      },
      {
        title: "youtube.com/@Nitesh_Bhagat",
        icon: <AiFillYoutube size={22} />,
        link: "https://www.youtube.com/@Nitesh_Bhagat",
      },
    ]);

    setTabBarView([
      <div key={"overview"} className="min-h-screen p-5">
        <OverviewTab />
      </div>,
      <div key={"project"} className="min-h-screen p-5">
        <ProjectsTab username={profile.username} />
        {/* <h1>Basnati</h1> */}
      </div>,
      <div key={"education"} className="min-h-screen p-5">
        <EducationTab />
      </div>,
    ]);
  }, []);

  return (
    <div>
      <Head>
        <title>{profile.full_name}</title>
      </Head>

      <div className="flex flex-row  w-full  justify-start items-start ">
        {/* Profile Sidebar */}
        <div className="flex-col flex  p-3  sticky -top-48 w-1/4 ">
          {/* image */}
          <div className=" w-56 h-56 relative rounded-full my-2 border-4 border-teal-500">
            <Image
              src={profile.avatar_url}
              alt="nitesh_bhagat" // required
              fill="fill"
              className="rounded-full object-cover "
            />
          </div>
          {/* details */}
          <div className="flex flex-col w-full ">
            <div className="text-lg text-stone-50 sm:text-xl font-bold flex flex-row items-center space-x-1">
              <span>{profile.full_name ?? "default"}</span>
            </div>
            {/* Username */}
            <div className="flex flex-row items-center text-slate-500 space-x-1">
              <BiUser size={20} />
              <h1 className="text-sm">{profile.username ?? "default"}</h1>

              <MdVerified className="text-teal-500" />
            </div>
            {/* bio */}
            <h1 className="text-sm font-medium   text-slate-500 py-2">
              {profile.bio ?? "default"}
            </h1>

            {/* edit button */}
            {user && user.id === profile.id && (
              <button className="bg-teal-500 text-slate-800 rounded-md py-1 font-medium my-2">
                Edit profile
              </button>
            )}
            {/* location */}
            {profile.location !== null && (
              <div className="flex flex-row items-center text-slate-500 space-x-1">
                <MdLocationOn size={20} />
                <h1 className="text-base">{profile.location}</h1>
              </div>
            )}
            <h1 className="text-sm font-medium   text-slate-500 py-2">
              {dateFormat(profile.updated_at, "dd-mmm-yyyy")}
            </h1>
            {/* email */}
            <div className="flex flex-row items-center text-slate-500 space-x-1">
              <AiOutlineMail size={20} />
              <span className="text-sm">{profile.email}</span>
            </div>

            <h1 className="pb-1 pt-4 text-lg">Social Links</h1>
            {/* Social Links */}
            {socialLinks.map((e) => (
              <a key={e.title} href={e.link} target="_blank" rel="noreferrer">
                <div className="flex flex-row  text-sm text-slate-400 items-start my-1 justify-start space-x-2 hover:underline ">
                  <span>{e.icon}</span>
                  <span>{e.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* Main Area */}
        <div className="flex flex-col flex-1 relative border-l-2 border-slate-800 ">
          {/* Tab Bar  */}
          <div className="flex flex-row justify-start z-20 sticky top-[53px] bg-slate-900 items-end w-full overflow-hidden hover:overflow-x-auto    ">
            {tabList.map((e, i) => (
              <div
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`
                text-base font-medium  flex items-center  border-b-2  py-3 px-4 space-x-1  cursor-pointer
                ${
                  currentIndex === i
                    ? "text-teal-400   border-teal-500 font-medium"
                    : "text-slate-400 border-slate-800"
                }
               `}
              >
                <span>{e.icon}</span>
                <span>{e.title}</span>
              </div>
            ))}
            <div className="flex-1 border-b-2 border-slate-800"></div>
          </div>
          {/* tabar view */}
          <div className="flex flex-col w-full ">
            {tabBarView[currentIndex]}
          </div>
        </div>
      </div>
    </div>
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
  };
};
