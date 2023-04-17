import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useSession, useUser } from "@supabase/auth-helpers-react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RxTextAlignLeft } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { BiBell } from "react-icons/bi";
import { BsFillTrophyFill, BsLink45Deg, BsShieldCheck } from "react-icons/bs";
import { supabase } from "../utils/supabaseConfig";
import { FaTheaterMasks } from "react-icons/fa";
import { HiLanguage } from "react-icons/hi2";

export default function Settings() {
  const router = useRouter();
  const session = useSession();
  // const user = useUser();
  // Setting menu index
  const [indexMenu, setIndexMenu] = useState(0);
  const [loading, setLoading] = useState(false);
  // details to be updated
  const [full_name, setFullName] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [bio, setBio] = useState(null);
  const [location, setLocation] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
    if (session) {
      getProfile();
    }
  }, []);

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name,  avatar_url, bio, location`)
        .eq(`id`, session.user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullName(data.full_name);
        setBio(data.bio);
        setAvatarUrl(data.avatar_url);
        setLocation(data.location);
        setId(data.id);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
    }
  }

  async function updateProfile({ full_name, bio, avatar_url, location, id }) {
    try {
      setLoading(true);
      console.log(session.user.id);

      const updates = {
        id: id,
        full_name: full_name,
        bio: bio,
        avatar_url: avatar_url,
        location: location,
      };

      // const username = session.user.user_metadata.user_name;

      let { data, error } = await supabase
        .from("profiles")
        .update({ full_name, bio, avatar_url, location })
        .eq("id", session.user.id)
        .select();

      if (data) {
        console.log(data);
      }

      // console.log(data);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }

    // console.log({ full_name, bio, avatar_url, location, id });
  }

  return (
    <div>
      <Head>
        <title>Settings</title>
      </Head>
      <div className="flex-row flex min-h-screen">
        <div className="flex-col flex p-5 w-1/5">
          {[
            {
              title: "Profile ",
              icon: <AiOutlineUser size={18} />,
            },
            {
              title: "Account ",
              icon: <BsShieldCheck size={18} />,
            },
            {
              title: "Notifications",
              icon: <BiBell size={20} />,
            },
            {
              title: "divider",
            },
            {
              title: "Technologies ",
              icon: <VscTools size={18} />,
            },
            {
              title: "About myself ",
              icon: <RxTextAlignLeft size={18} />,
            },
            {
              title: "Hobbies & Interest ",
              icon: <FaTheaterMasks size={18} />,
            },
            {
              title: "Soft skill",
              icon: <RxTextAlignLeft size={20} />,
            },
            {
              title: "Languages",
              icon: <HiLanguage size={20} />,
            },
            {
              title: "Awards",
              icon: <BsFillTrophyFill size={20} />,
            },
            {
              title: "Social links",
              icon: <BsLink45Deg size={20} />,
            },
          ].map((e, i) => {
            if (e.title !== "divider") {
              return (
                <buttonbui
                  onClick={() => setIndexMenu(i)}
                  key={e.title}
                  className={`flex flex-row space-x-2 py-2 pl-3 rounded-md pr-10 ${
                    indexMenu === i && "text-white bg-gray-800 font-semibold"
                  } cursor-pointer justify-start items-center hover:bg-slate-800 text-slate-500 `}
                >
                  {e.icon}
                  <span className="text-base    ">{e.title}</span>
                </buttonbui>
              );
            } else {
              return (
                <hr key={e.title} className="border-b border-slate-800 my-3" />
              );
            }
          })}
        </div>
        {/* main content */}
        <div className="flex-col flex px-10  w-1/2 border-l border-slate-700 ">
          <h1 className="text-2xl w-full  font-bold py-3">Profile settings</h1>

          <div className="w-36  relative h-36">
            <Image
              src={avatar_url ?? "/defaultUser.png"}
              alt="default"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          {/* Name */}
          <p className="py-2">Name</p>
          <input
            type="text"
            className="bg-slate-800 border border-slate-700 px-2 py-0.5 focus:ring-teal-400 focus:ring-1 rounded-md outline-none "
            // placeholder={full_name ?? "Name"}
            value={full_name || ""}
            onChange={(e) => setFullName(e.target.value)}
          />
          <p className="text-sm text-slate-500 py-0.5">
            This name will be visible to public on the site
          </p>
          {/* Location */}
          <p className="py-2">Location</p>
          <input
            type="text"
            className="bg-slate-800 border border-slate-700 px-2 py-0.5 focus:ring-teal-400 focus:ring-1 rounded-md outline-none "
            // placeholder={location ?? "No locatiion spefied"}
            value={location || ""}
            onChange={(e) => setLocation(e.target.value)}
          />
          {/* bo */}
          <p className="py-2">Bio</p>
          <textarea
            cols={30}
            rows={5}
            type="text"
            className="bg-slate-800 border border-slate-700 px-2 py-0.5 focus:ring-teal-400 focus:ring-1 rounded-md outline-none "
            // placeholder={bio ?? "Bio"}
            value={bio || ""}
            onChange={(e) => setBio(e.target.value)}
          />

          <button
            className="bg-teal-400 text-slate-800 px-3 py-0.5 rounded-md w-1/4 "
            onClick={() =>
              updateProfile({ full_name, bio, avatar_url, location, id })
            }
            disabled={loading}
          >
            {loading ? "Saving ..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

// export const getServerSideProps = async (ctx) => {
//   // Create authenticated Supabase Client
//   const supabase = createServerSupabaseClient(ctx);
//   // Check if we have a session
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   if (!session)
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };

//   if (session) {
//     let { data: profiles, error } = await supabase
//       .from("profiles")
//       .select("*")
//       .eq("id", session.user.id)
//       .single();

//     return {
//       props: {
//         profiles,
//       },
//     };
//   }
// };
