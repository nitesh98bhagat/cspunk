import { Combobox } from "@headlessui/react";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { HiBell, HiChatBubbleBottomCenter, HiHome } from "react-icons/hi2";
import { MenuItem } from "../components/Header";

import { MdClear } from "react-icons/md";

function Testing() {
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

  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const handleOnChangeCombobox = (e) => {
    setSelectedPerson(e);
    // router.push(`/${e}`);
  };

  return (
    <div className="flex flex-col w-full py-24">
      <div className="flex-row flex">
        {/* search bar */}
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

            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
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
                          `relative cursor-default select-none py-2 pl-10 pr-4 bg-white shadow-lg ${
                            active
                              ? "bg-slate-200 text-slate-900"
                              : "text-gray-900"
                          }`
                        }
                      >
                        {item.name}
                      </Combobox.Option>
                    ))}
            </Combobox.Options>
          </Combobox>
        </div>

        {/* menu items */}
        <div className="flex flex-row justify-center items-center space-x-5 mx-10 text-slate-400">
          <MenuItem icon={<HiHome size={22} />} title={"Home"} link={"/"} />
          <MenuItem icon={<HiBell size={22} />} title={"Activity"} link={"/"} />
          <MenuItem
            icon={<HiChatBubbleBottomCenter size={22} />}
            title={"Messages"}
            link={"/"}
          />
          <MenuItem
            icon={<BsFillBriefcaseFill size={22} />}
            title={"Jobs"}
            link={"/"}
          />
        </div>
      </div>
    </div>
  );
}

export default Testing;
