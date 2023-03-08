import { useUser } from "@supabase/auth-helpers-react";
import React, { useState } from "react";

function EducationTab({ profile }) {
  const user = useUser();
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [degree, setDegree] = useState(null);
  const [institute, setInstitute] = useState(null);
  const [year, setYear] = useState(null);
  const [location, setLocation] = useState(null);
  const [subtitle, setSubtitle] = useState(null);

  const [educationList, setEducationList] = useState(profile.education);

  const handleSaveEducation = () => {
    if (showEducationForm) {
      setEducationList([
        ...educationList,
        { degree, institute, year, location, subtitle },
      ]);
      setShowEducationForm(false);
    } else {
      setShowEducationForm(true);
    }
  };

  // console.log(educationList);

  return (
    <div>
      <div className="flex flex-row items-start justify-between ">
        <h1 className="text-2xl pb-5 mr-auto">Education</h1>

        {/* edit button */}
        {user && user.id === profile.id && (
          <button
            onClick={handleSaveEducation}
            className="bg-teal-500 py-1 px-5 text-slate-900 text-sm rounded-lg"
          >
            {showEducationForm ? "Save" : "Add Education"}
          </button>
        )}

        {/* cancel button */}
        {user && user.id === profile.id && showEducationForm && (
          <button
            onClick={() => setShowEducationForm(false)}
            className=" py-1 px-5 text-slate-200 text-sm rounded-lg"
          >
            {"Cancel"}
          </button>
        )}
      </div>

      {showEducationForm && (
        <div className="flex-col flex w-full border border-slate-800 mb-5 p-2 space-y-3">
          {/* Degree and Institute name */}
          <div className="flex-row flex w-full space-x-2 text-sm text-slate-400">
            <div className="flex-col flex flex-1">
              <p className="pb-2">Degree*</p>
              <input
                type="text"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                className="bg-slate-800 p-1 focus:ring-1 focus:ring-teal-500  outline-none "
                placeholder="Diploma in ABC"
              />
            </div>
            <div className="flex-col flex flex-1">
              <p className="pb-2">Institute / School*</p>
              <input
                type="text"
                value={institute}
                onChange={(e) => setInstitute(e.target.value)}
                className="bg-slate-800 p-1 focus:ring-1 focus:ring-teal-500  outline-none "
                placeholder="XYZ Academy "
              />
            </div>
          </div>
          {/* year, location, additional info */}
          <div className="flex-row flex w-full space-x-2 text-sm text-slate-400">
            <div className="flex-col flex flex-1">
              <p className="pb-2">Year</p>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="bg-slate-800 p-1 focus:ring-1 focus:ring-teal-500  outline-none "
                placeholder="e.g: 2004-2014"
              />
            </div>
            <div className="flex-col flex flex-1">
              <p className="pb-2">Location</p>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-slate-800 p-1 focus:ring-1 focus:ring-teal-500  outline-none "
                placeholder="e.g: Kolkata, India"
              />
            </div>
            <div className="flex-col flex flex-1">
              <p className="pb-2">Addition information</p>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="bg-slate-800 p-1 focus:ring-1 focus:ring-teal-500  outline-none "
                placeholder="e.g: dropped out, skipped etc"
              />
            </div>
          </div>
        </div>
      )}

      <div class="container mx-auto flex flex-col">
        {/* items */}

        {profile.education &&
          educationList
            .reverse()
            .map((e, i) => <EducationTile key={i} props={e} />)}
      </div>
    </div>
  );
}

// [
//   {
//     "degree": "Secondary Education",
//     "year": "2004-2014",
//     "institute": "Vidya Vikash High School Garifa",
//     "subtitle": "Class 1 - Class 10",
//     "location":"Kolkata, India"
//   },
//   {
//     "degree": "Higher Secondary Education",
//     "year": "2014-2016",
//     "institute": "Dum Dum K.L.S Hindi Vidyalaya",
//     "subtitle": "Science | Class 11 - Class 12",
//     "location":"Kolkata, India"
//   },
//   {
//     "degree": "B.Sc",
//     "year": "2016-2017",
//     "institute": "Serampore College",
//     "subtitle": "Dropped out",
//     "location":"Kolkata, India"
//   },
//   {
//     "degree": "Diploma in Coumputer Science",
//     "year": "2017-2020",
//     "institute": "Regent Institute Science & Technology",
//     "subtitle": "",
//     "location":"Kolkata, India"
//   },
//   {
//     "degree": "B.Tech in Computer Science",
//     "year": "2020-2023",
//     "institute": "Regent Education and Research Foundation",
//     "subtitle": "",
//     "location":"Kolkata, India"

//   }
// ]

function EducationTile({ props }) {
  const { degree, year, institute, subtitle, location } = props;
  return (
    <div class="flex relative py-8 sm:items-center ">
      {/* Line */}
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-[2px] bg-slate-800 pointer-events-none"></div>
      </div>
      {/* Dot */}
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-500 text-white relative z-10 title-font font-medium text-sm"></div>
      {/* left content */}
      <div class="flex-grow  flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-400 mb-1 text-xl">
            {degree ?? "Degree"}
          </h2>
          <p class="leading-relaxed">{institute ?? "Year"}</p>
          <div className="flex-row flex items-center space-x-5">
            <p class="leading-relaxed">{year ?? "Year"}</p>
            <p class="leading-relaxed">{subtitle ?? "Year"}</p>
            <p class="leading-relaxed">{location ?? "Year"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationTab;
