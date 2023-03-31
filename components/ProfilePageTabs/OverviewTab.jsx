import { useUser } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { BsFillTrophyFill } from "react-icons/bs";
import { supabase } from "../../utils/supabaseConfig";

function OverviewTab({ profile }) {
  return (
    <div className="flex flex-col text-slate-900 dark:text-slate-300  ">
      <h1 className="text-xl font-medium my-3 mr-auto">About myself</h1>

      <p className="text-base sm:text-lg font-light  flex flex-col space-y-3">
        <span>{profile.about_myself ?? "About my is null"}</span>
      </p>

      <div className="grid grid-cols-3 my-5 justify-start items-start">
        {/* hobby */}
        <div className=" flex flex-col  items-start justify-center">
          <h1 className="text-2xl font-medium py-2">Hobby & Interest</h1>
          <p className="text-base sm:text-lg font-light px-5 py-2">
            <ul className="list-disc space-y-2">
              {profile.hobbies_interest &&
                profile.hobbies_interest.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </p>
        </div>

        {/* soft skill */}
        <div className=" flex flex-col  items-start justify-center">
          <h1 className="text-2xl font-medium py-2">Soft Skill</h1>
          <p className="text-base sm:text-lg font-light px-5 py-2">
            <ul className="list-disc space-y-2">
              {profile.soft_skill &&
                profile.soft_skill.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </p>
        </div>
        {/* Language */}
        <div className="flex flex-col  items-start justify-center">
          <h1 className="text-2xl font-medium py-2">Languages</h1>
          <p className="text-base sm:text-lg font-light px-5 py-2">
            <ul className="list-disc space-y-2">
              {profile.languages &&
                profile.languages.map((e, i) => (
                  <li key={i}>
                    <div className="flex flex-col">
                      <span className="font-medium">{e.title}</span>
                      <span className="text-sm">{e.level} </span>
                    </div>
                  </li>
                ))}
            </ul>
          </p>
        </div>
      </div>

      {/* Awards */}
      <div className="flex flex-col  rounded-lg px-5 pb-5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-100">
        <h1 className="text-2xl font-medium p-5 ">Awards</h1>
        <div className="flex-row flex w-full  overflow-hidden">
          <BsFillTrophyFill size={150} className="text-amber-600" />
          <div className="text-base sm:text-lg font-light px-10 py-2">
            <ul className="list-disc   space-y-2">
              {profile.awards &&
                profile.awards.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
}

export default OverviewTab;
