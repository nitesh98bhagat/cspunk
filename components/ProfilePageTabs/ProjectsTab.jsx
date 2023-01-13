import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiGitRepoForked, BiLinkExternal } from "react-icons/bi";
import dateFormat from "dateformat";
import { useUser } from "@supabase/auth-helpers-react";

function ProjectsTab({ username }) {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}/repos`).then((res) => {
      setRepos(res.data);
    });
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-lg font-semibold">All Github Projects</h1>
      <h3 className="font-[300] text-slate-400">
        All public repositories are shown here, click to view project
      </h3>
      <div className="border border-slate-700 my-5 rounded-lg overflow-hidden">
        {!!repos === null && <h1>Loading Repositories...</h1>}
        {!!repos &&
          repos.map((e) => (
            <div
              key={e.id}
              className="border-b flex-row flex border-slate-700  p-2 text-slate-400  cursor-pointer hover:bg-slate-800"
            >
              <div className="flex-col flex flex-1">
                <h1 className="text-lg hover:underline text-slate-100">
                  <a href={e.html_url} target="_blank" rel="noreferrer">
                    {e.name ?? "REPOS"}
                  </a>
                </h1>
                <p className="text-sm font-[300] py-2 w-2/3">
                  {e.description ?? "No Description"}
                </p>

                <div className="flex-row flex space-x-5">
                  <p className="text-sm font-[300]">
                    <span>Created</span>
                    <span className="px-2">
                      {dateFormat(e.created_at, "dd-mmm-yyyy")}
                    </span>
                  </p>
                  <p className="text-sm font-[300]">
                    <span>Last Modified</span>
                    <span className="px-2">
                      {dateFormat(e.updated_at, "dd-mmm-yyyy")}
                    </span>
                  </p>

                  {e.fork && (
                    <div className="flex-row flex text-sm items-center justify-center">
                      <BiGitRepoForked />
                      <span>Forked</span>
                    </div>
                  )}
                </div>
              </div>
              <BiLinkExternal />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProjectsTab;
