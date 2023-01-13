import React from "react";

function EducationTab() {
  return (
    <div>
      <h1 className="text-2xl pb-8">Education</h1>

      <div class="container mx-auto flex flex-col">
        {/* items */}

        {[
          {
            degree: "Secondary Education",
            year: "2004-2014",
            institute: "Vidya Vikash High School Garifa",
            subtitle: "Class 1 - Class 10",
          },
          {
            degree: "Higher Secondary Education",
            year: "2014-2016",
            institute: "Dum Dum K.L.S Hindi Vidyalaya",
            subtitle: "Science | Class 11 - Class 12",
          },
          {
            degree: "B.Sc",
            year: "2016-2017",
            institute: "Serampore College",
            subtitle: "Dropped out",
          },
          {
            degree: "Diploma in Coumputer Science",
            year: "2017-2020",
            institute: "Regent Institute Science & Technology",
            subtitle: "",
          },
          {
            degree: "B.Tech in Computer Science",
            year: "2020-2023",
            institute: "Regent Education and Research Foundation",
            subtitle: "",
          },
        ]
          .reverse()
          .map((e, i) => (
            <EducationTile key={i} props={e} />
          ))}
      </div>
    </div>
  );
}

function EducationTile({ props }) {
  const { degree, year, institute, subtitle } = props;
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationTab;
