import { useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";

import { FaSignOutAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { AiFillGithub } from "react-icons/ai";

function Header() {
  const user = useUser();

  const menuLinks = [
    { href: `${user?.user_metadata.user_name}`, label: "My Profile" },
    { href: "/settings", label: "Settings" },
    { href: "/signout", label: "Sign out" },
  ];

  return (
    <nav className=" flex sticky top-0 bg-slate-900 z-50 flex-row items-center justify-start w-full  space-x-10 p-2 border-b border-slate-800 ">
      <Link href={"/"} className="cursor-pointer">
        <h1 className="text-2xl font-black   cursor-pointer">
          <span className="bg-teal-600 text-white px-1 mr-1  rounded-sm ">
            Cs
          </span>
          Punk
        </h1>
      </Link>

      <div className="flex-row flex space-x-2 items-center justify-center bg-slate-800 px-2 py-1 rounded-md w-1/5 focus-within:w-1/2">
        <BsSearch size={15} />
        <input
          type="text"
          className="focus-ring-0 outline-none bg-transparent flex-1"
          placeholder="Search..."
        />
      </div>

      <div className="flex-1" />

      <div className="flex-col flex justify-center items-center">
        <GoHome size={22} />
        <span className="text-[10px]">Home</span>
      </div>

      {/* Dropdown menu */}
      {user && (
        <Menu>
          <Menu.Button>
            <div className="flex flex-row space-x-2 items-center justify-center">
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

      {!user && (
        <Link
          href={"/signin"}
          className="bg-teal-600 flex flex-row items-center justify-center text-white py-1 px-3 rounded-md space-x-2"
        >
          <span className="text-sm font-[600]">Continue with GitHub</span>
          <AiFillGithub size={25} />
        </Link>
      )}
    </nav>
  );
}

export default Header;

export const getStaticProps = async () => {};
