import React from "react";
import { IoPersonAdd } from "react-icons/io5";
import { ImAddressBook } from "react-icons/im";
import Head from "next/head";
import { BiSearch } from "react-icons/bi";

function Peoples() {
  return (
    <>
      <Head>
        <title>Peoples</title>
      </Head>
      <div className=" flex flex-row w-full  items-start justify-start">
      
        {/* main */}
        <div className="flex-col flex flex-1 border-x border-slate-700 min-h-screen">s</div>
        {/* Right */}
        <div className="flex-col flex w-1/3 sticky top-0 ">
          <div className="flex-col flex    rounded-md  p-2 ">
            <h1 className="text-xl flex flex-row items-center space-x-2 py-4">
              <IoPersonAdd />
              <span>{"Connect request"}</span>
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

                <button>Accept</button>
                <button>Decline</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Peoples;
