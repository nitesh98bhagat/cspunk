import { BiSearch } from "react-icons/bi";
import PeopleToFollow from "../PeopleToFollow";
// import { useUser } from "@supabase/auth-helpers-react";

const RightSection = () => {
  //   const user = useUser();

  return (
    <div className="sm:flex flex-col hidden flex-1 min-h-screen sticky  top-0 py-5 space-y-3">
      {/* Search */}
      <div className="flex flex-row items-center bg-neutral-100 focus-within:ring-1 focus-within:ring-teal-600  dark:bg-neutral-800 p-2 space-x-1  rounded-full">
        <BiSearch size={22} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none focus:ring-0 flex-grow "
        />
      </div>

      {/* People to follow */}
      <PeopleToFollow />
    </div>
  );
};

export default RightSection;
