import React from 'react'
import { BiBell } from 'react-icons/bi'

function ActivityFeed() {
  return (
    <div className="flex-col sticky top-0  flex p-2 ">
      <div className=" text-slate-100 rounded-lg flex flex-row items-center justify-start space-x-2 py-1">
        <BiBell size={25} />
        <span>{"Notifications"}</span>
      </div>
      {[
        {
          user: "@em_travis",
          content: "liked your post",
          time: "now",
          seen: false,
        },
        {
          user: "@edd_dev",
          content: "added a new post",
          time: "15 min ago",
          seen: true,
        },
      ].map((e) => (
        <div
          key={e.user}
          className={`w-full flex-col flex hover:bg-slate-800 rounded-lg cursor-pointer p-1 ${
            e.seen ? "text-slate-400" : "text-slate-100"
          }`}
        >
          <div className="flex-row flex space-x-1">
            <span className="font-bold"> {e.user} </span>
            <span> {e.content} </span>
          </div>
          <span className="font-light text-sm"> {e.time}</span>
        </div>
      ))}
    </div>
  )
}

export default ActivityFeed