import { useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";

import { FaSignOutAlt } from "react-icons/fa";
import { BsFillBriefcaseFill, BsSearch } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import Image from "next/image";
import { Combobox, Menu } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
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

function Header() {
  const user = useUser();

  const router = useRouter();

  const people = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
    { id: 6, name: "Tanmay Bhatt" },
    { id: 7, name: "Abhimanuyu Uday" },
    { id: 8, name: "Akash Gupta" },
    { id: 9, name: "Nikhil Sharma" },
    { id: 10, name: "Gaurav Chaudhary" },
    { id: 11, name: "Carryminati" },
    { id: 12, name: "Gaurav Taneja" },
    { id: 13, name: "Nikhil Gupta" },
  ];

  const menuLinks = [
    { href: `${user?.user_metadata.user_name}`, label: "My Profile" },
    { href: "/settings", label: "Settings" },
    { href: "/signout", label: "Sign out" },
  ];

  const [selectedPerson, setSelectedPerson] = useState("");
  const [query, setQuery] = useState("");

  const handleOnChangeCombobox = (e) => {
    setSelectedPerson(e);
    // router.push(`/${e}`);
  };

  return (
    <nav className=" flex sticky top-0 bg-slate-900 z-50 flex-row items-center justify-start w-full  p-2 border-b border-slate-800 ">
      {/* Logo */}
      <Link href={"/"} className="cursor-pointer">
        <h1 className="text-2xl font-black   cursor-pointer">
          <span className="bg-teal-600 text-white px-1 mr-1  rounded-sm ">
            Cs
          </span>
          Punk
        </h1>
      </Link>

      {/* search bar */}
      {router.pathname !== "/" && (
        <div className="flex-row flex  items-center justify-center bg-slate-800 px-2 py-1 rounded-md  w-1/5  mr-auto  ml-5  focus-within:flex-grow  focus-within:ring-teal-800 focus-within:ring-1 relative">
          <Combobox
            value={selectedPerson}
            onChange={(e) => handleOnChangeCombobox(e)}
          >
            <Combobox.Button className="pr-2">
              <BiSearch />
            </Combobox.Button>
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
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
                        value={item.name}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 text-slate-400 shadow-lg ${
                            active ? "bg-slate-700 " : "bg-slate-800 "
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
        <div className="flex flex-row justify-center items-center space-x-5 mx-10 text-slate-400">
          <MenuItem icon={<HiHome size={22} />} title={"Home"} link={"/"} />
          <MenuItem icon={<HiUsers size={22} />} title={"Peoples"} link={"/"} />
          <MenuItem icon={<HiBell size={22} />} title={"Activity"} link={"/"} />
          <MenuItem
            icon={<HiChatBubbleBottomCenter size={22} />}
            title={"Messages"}
            link={"/"}
          />
          {/* <MenuItem
            icon={<BsFillBriefcaseFill size={22} />}
            title={"Jobs"}
            link={"/"}
          /> */}
        </div>
      )}

      {/* Dropdown menu */}
      {router.pathname !== "/" && user && (
        <Menu>
          <Menu.Button>
            <div className="flex flex-row space-x-2 items-center justify-center text-slate-300">
              <div className="flex-col flex space-y- items-start">
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
          <Menu.Items className="absolute flex-col w-36 flex right-0 top-14 shadow-2xl border border-slate-700  rounded-md overflow-hidden">
            {menuLinks.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item key={link.href} as={Fragment}>
                {({ active }) => (
                  <Link
                    href={link.href}
                    className={`py-1 px-3 ${
                      active && "bg-slate-700 text-white"
                    } ${!active && "bg-slate-800 "}`}
                  >
                    {link.label}
                  </Link>
                )}
              </Menu.Item>
            ))}
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
      <div className="flex-col flex justify-center items-center">
        {icon}
        <span className="text-[10px]">{title}</span>
      </div>
    </Link>
  );
}
