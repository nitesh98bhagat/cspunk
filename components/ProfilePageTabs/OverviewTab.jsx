import { useUser } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { BsFillTrophyFill } from "react-icons/bs";
import { supabase } from "../../utils/supabaseConfig";

function OverviewTab({ profile }) {
  const user = useUser();
  const [aboutMyself, setAboutMyself] = useState(profile.about_myself);
  const [editAboutMyself, setEditAboutMyself] = useState(false);

  const saveAboutMyselfInDB = async () => {
    if (editAboutMyself) {
      if (aboutMyself !== profile.about_myself) {
        const { error } = await supabase
          .from("profiles")
          .update({ about_myself: aboutMyself })
          .eq("id", user.id);

        if (error) {
          console.log(error);
        }
      }
      setEditAboutMyself(false);
    } else {
      setEditAboutMyself(true);
    }
  };

  return (
    <div className="flex flex-col text-slate-300 ">
      <div className="flex-row flex ">
        <h1 className="text-xl font-medium my-3 mr-auto">About myself</h1>
        {user.id === profile.id && (
          <button onClick={saveAboutMyselfInDB}>
            {editAboutMyself ? "Save" : "Edit "}
          </button>
        )}

        {user && user.id === profile.id && editAboutMyself && (
          <button
            onClick={() => setEditAboutMyself(false)}
            className=" py-1 px-5 text-slate-200 text-sm rounded-lg"
          >
            {"Cancel"}
          </button>
        )}
      </div>
      <p className="text-base sm:text-lg font-light  flex flex-col space-y-3">
        {editAboutMyself ? (
          <textarea
            cols={30}
            rows={5}
            type="text"
            className="bg-slate-800 border border-slate-700 px-2  focus:ring-teal-400 focus:ring-1 rounded-md outline-none "
            // placeholder={bio ?? "Bio"}
            value={aboutMyself || ""}
            onChange={(e) => setAboutMyself(e.target.value)}
          />
        ) : (
          <span>{aboutMyself ?? "About my is null"}</span>
        )}
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
      <div className="flex flex-col text-white rounded-lg px-5 pb-5 bg-slate-800">
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
