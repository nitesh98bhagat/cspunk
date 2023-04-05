import React from "react";
import { AiFillFire } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

function TrendingSection() {
  return (
    <div className="hidden sm:flex flex-col w-2/3 sticky  top-0 p-2  ">
      <h1 className="text-lg font-bold flex flex-row items-center space-x-2 py-2">
        <AiFillFire />
        <span>{"What's happening..."}</span>
      </h1>
      <div className="flex-col flex  dark:bg-slate-800/50 bg-slate-200  rounded-xl p-2  ">
        {[
          "#Flutter",
          "#JavaScript",
          "#Ui/Ux",
          "#PythonRules",
          "#NewDartEngine",
          "#ChatGPTNewEra",
          "#Iphone15",
        ].map((e) => (
          <p key={e} className="p-1 cursor-pointer text-base hover:underline  ">
            {e}
          </p>
        ))}
      </div>
      <div className="flex-col flex    rounded-md  py-2 ">
        <h1 className="text-xl flex flex-row items-center space-x-2">
          <BsFillPeopleFill />
          <span>{"Recommended Groups"}</span>
        </h1>
        {[
          {
            groupName: "Js Ninja",
            username: "@jsNinja",
            image:
              "https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/js2.jpg ",
          },
          {
            groupName: "Dart Community",
            username: "@dartKings",
            image:
              "https://play-lh.googleusercontent.com/qbeCduZblOk80GaY164lw47gIRjXq9QIzSmgFwqQj1PyhNhTWxYR0OqPzm8BumnmJQ",
          },
          {
            groupName: "Dart Community",
            username: "@dartKings",
            image:
              "https://play-lh.googleusercontent.com/qbeCduZblOk80GaY164lw47gIRjXq9QIzSmgFwqQj1PyhNhTWxYR0OqPzm8BumnmJQ",
          },
        ].map((e) => (
          <div
            key={e.username}
            className="flex flex-row items-center space-x-2 p-2"
          >
            <img
              src={e.image}
              alt="dp"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-col flex -space-y-1 flex-grow">
              <p>{e.groupName}</p>
              <span className="text-sm cursor-pointer hover:underline  text-slate-400">
                {e.username}
              </span>
            </div>

            <button>Join</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingSection;
