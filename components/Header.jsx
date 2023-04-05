import { useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";

import { FaSignOutAlt } from "react-icons/fa";
import {
  BsFillBriefcaseFill,
  BsFillMoonFill,
  BsFillSunFill,
  BsSearch,
} from "react-icons/bs";
import { GoHome } from "react-icons/go";
import Image from "next/image";
import { Combobox, Menu } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { AiFillGithub, AiOutlineUser } from "react-icons/ai";
import { BiBell, BiSearch } from "react-icons/bi";
import {
  HiBell,
  HiChatBubbleBottomCenter,
  HiHome,
  HiOutlineChatBubbleBottomCenterText,
  HiUsers,
} from "react-icons/hi2";
import { useRouter } from "next/router";
import { MdClear } from "react-icons/md";
import { supabase } from "../utils/supabaseConfig";
import { FiFeather, FiSettings } from "react-icons/fi";
import { useTheme } from "next-themes";
import HomeFeed from "./SideBarSection/HomeFeed";
import ActivityFeed from "./SideBarSection/ActivityFeed";
import SearchFeed from "./SideBarSection/SearchFeed";
import { IoMdClose } from "react-icons/io";

function Header() {
  const user = useUser();

  const { systemTheme, theme, setTheme } = useTheme();

  const router = useRouter();

  const people = [
    { id: 1, name: "Nitesh Kumar Bhagat", username: "nitesh-bhagat" },
    { id: 2, name: "Kenton Towne", username: "nitesh-bhagat" },
    { id: 3, name: "Therese Wunsch", username: "nitesh-bhagat" },
    { id: 4, name: "Benedict Kessler", username: "nitesh-bhagat" },
    { id: 5, name: "Katelyn Rohan", username: "nitesh-bhagat" },
    { id: 6, name: "Tanmay Bhatt", username: "nitesh-bhagat" },
    { id: 7, name: "Abhimanuyu Uday", username: "nitesh-bhagat" },
    { id: 8, name: "Akash Gupta", username: "nitesh-bhagat" },
    { id: 9, name: "Nikhil Sharma", username: "nitesh-bhagat" },
    { id: 10, name: "Gaurav Chaudhary", username: "nitesh-bhagat" },
    { id: 11, name: "Carryminati", username: "nitesh-bhagat" },
    { id: 12, name: "Gaurav Taneja", username: "nitesh-bhagat" },
    { id: 13, name: "Nikhil Gupta", username: "nitesh-bhagat" },
  ];

  const menuLinks = [
    { href: `${user?.user_metadata.user_name}`, label: "My Profile" },
    { href: "/settings", label: "Settings" },
    { href: "/signout", label: "Sign out" },
  ];

  const [selectedPerson, setSelectedPerson] = useState("");
  const [query, setQuery] = useState("");

  const handleOnChangeCombobox = async (e) => {
    setSelectedPerson(e.name);

    // console.log(e.username);
    router.push(`/${e.username}`);
  };

  const handleSearch = async (event) => {
    setQuery(`${event.target.value}`);

    // const { data, error } = await supabase
    //   .from("profiles")
    //   .select("id, full_name, username")
    //   .textSearch("full_name", query, {
    //     type: "websearch",
    //     config: "english",
    //   });

    // console.log("full:", data);
    // console.log("full:", error);
    // console.log(query);
  };

  // This is to determine whether components are mounted or not, so that it can show change theme button
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // THIS code will render a change theme button
  const renderThemeChanger = () => {
    if (!isMounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="flex flex-row items-center justify-start px-2 py-1  space-x-2  cursor-pointer bg-slate-100 dark:bg-slate-800 hover:bg-slate-300"
          onClick={() => setTheme("light")}
        >
          <BsFillSunFill size={18} />
          <span className="hidden sm:block ">Light Mode</span>
        </button>
      );
    } else {
      return (
        <button
          className="flex flex-row items-center justify-start space-x-2 px-2 py-1  cursor-pointer bg-slate-100 dark:bg-slate-800"
          onClick={() => setTheme("dark")}
        >
          <BsFillMoonFill size={18} />
          <span className="hidden sm:block ">Dark Mode</span>
        </button>
      );
    }
  };

  return (
    <nav className=" sm:flex sticky top-0 hidden  z-50 flex-row items-center justify-start w-full sm:px-20 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 p-2 border-b dark:border-slate-800  border-slate-100">
      {/* Logo */}
      <Link href={"/"} className="cursor-pointer flex-1 sm:flex-none">
        <h1 className="text-2xl font-black   cursor-pointer">
          <span className="bg-teal-600 text-white px-1 mr-1  rounded-sm ">
            Cs
          </span>
          Punk
        </h1>
      </Link>

      {/* search bar */}
      {router.pathname !== "/" && (
        <div className="flex-row sm:flex hidden  items-center justify-center bg-slate-200 focus-within:bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-md  w-1/5  mr-auto  ml-5  focus-within:flex-grow  focus-within:ring-teal-300 dark:focus-within:ring-teal-600 focus-within:ring-1 relative">
          <Combobox value={selectedPerson} onChange={handleOnChangeCombobox}>
            <Combobox.Button className="pr-2">
              <BiSearch />
            </Combobox.Button>
            <Combobox.Input
              onChange={handleSearch}
              className="focus-ring outline-none bg-transparent flex-1"
              placeholder="Search..."
              type="text"
              autoComplete="off"
            />

            <Combobox.Button
              className="absolute inset-y-0 right-0 flex items-center pr-2"
              onClick={() => setSelectedPerson("")}
            >
              <MdClear />
            </Combobox.Button>
            <Combobox.Options className="absolute w-full top-10   ">
              {query === ""
                ? people.id
                : people
                    .filter((person) => {
                      return person.name
                        .toLowerCase()
                        .includes(query.toLowerCase());
                    })
                    .splice(0, 8)
                    .map((item) => (
                      <Combobox.Option
                        key={item.id}
                        value={item}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 text-slate-900 dark:text-slate-200 shadow-lg ${
                            active
                              ? "bg-slate-200 dark:bg-slate-700"
                              : "bg-slate-100 dark:bg-slate-800"
                          }`
                        }
                      >
                        {item.name}
                      </Combobox.Option>
                    ))}
            </Combobox.Options>
          </Combobox>
        </div>
      )}

      {/* Nav links*/}
      {router.pathname !== "/" && user && (
        <div className="flex flex-row justify-center items-center space-x-5 sm:mx-10 ">
          <MenuItem icon={<HiHome size={20} />} title={"Home"} link={"/feed"} />
          <MenuItem
            icon={<BiSearch size={20} />}
            onClick={() => setMenuIndex(2)}
            link={"/feed"}
            title={"Search"}
          />

          <MenuItem
            icon={<HiUsers size={20} />}
            title={"Peoples"}
            link={"/peoples"}
          />
          <MenuItem icon={<HiBell size={20} />} title={"Activity"} link={"/"} />

          <Link href={"/create-post"} className="hidden sm:bloack">
            <button className="  bg-teal-700 text-white font-bold flex py-1 px-2 items-center justify-center space-x-2 rounded-md">
              <FiFeather />
              <span>Post Now</span>
            </button>
          </Link>
        </div>
      )}

      {/* Dropdown menu */}
      {router.pathname !== "/" && user && (
        <Menu>
          <Menu.Button>
            <div className="flex flex-row space-x-2 items-center justify-center text-slate-800 dark:text-slate-300">
              <div className="flex-col   items-start hidden sm:flex">
                <p className="text-xs">Signed in as</p>
                <p className="text-sm font-semibold">
                  {user?.user_metadata.full_name}
                </p>
              </div>
              <Image
                src={user?.user_metadata.avatar_url}
                width={40}
                height={30}
                alt="user_dp"
                className="rounded-full"
              />
            </div>
          </Menu.Button>
          <Menu.Items className="absolute flex-col w-36 flex right-20 top-14 shadow-2xl border border-slate-300 dark:border-slate-700  rounded-md overflow-hidden">
            {menuLinks.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item key={link.href} as={Fragment}>
                {({ active }) => (
                  <Link
                    href={link.href}
                    className={`py-1 px-3 ${
                      active && "bg-slate-200 dark:bg-slate-700"
                    } ${!active && "bg-slate-100 dark:bg-slate-800 "}`}
                  >
                    {link.label}
                  </Link>
                )}
              </Menu.Item>
            ))}
            <Menu.Item>{renderThemeChanger()}</Menu.Item>
          </Menu.Items>
        </Menu>
      )}

      {/* Sign in button */}
      {!user && (
        <Link
          href={"/signin"}
          className="bg-teal-700 flex flex-row items-center justify-center text-white py-1 px-3 rounded-md space-x-2 ml-auto"
        >
          <span className="text-sm font-[600]">Continue with GitHub</span>
          <AiFillGithub size={25} />
        </Link>
      )}
    </nav>
  );
}

export default Header;

export function MenuItem({ title, link, icon }) {
  return (
    <Link href={link}>
      {" "}
      <div className="flex-col flex justify-center items-center ">
        {icon}
        <span className="text-[10px]">{title ?? ""}</span>
      </div>
    </Link>
  );
}

function MobileNavBar() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="flex-col flex sticky top-0 z-50 bg-white">
      <div className="flex sm:hidden flex-row p-3   items-center justify-center   ">
        {/* <span>{`@${user?.user_metadata.user_name}`}</span> */}
        <button onClick={() => setOpenSearch(!openSearch)}>
          {openSearch ? <IoMdClose size={28} /> : <BiSearch size={28} />}
        </button>
        <h1 className="text-xl flex-grow text-center font-black   cursor-pointer">
          <span className="bg-teal-600 text-white px-1 mr-1  rounded-sm ">
            Cs
          </span>
          Punk
        </h1>
        <AiOutlineUser size={28} />
      </div>
      {openSearch && (
        <div className="bg-slate-100 flex m-1 p-1.5 rounded-full text-slate-600 ">
          <BiSearch size={28} />
          <input
            type="text"
            placeholder="Search.."
            className="focus:ring-0 outline-none bg-transparent flex-grow text-lg px-1"
          />
        </div>
      )}
      <hr />
    </div>
  );
}

export { MobileNavBar };
