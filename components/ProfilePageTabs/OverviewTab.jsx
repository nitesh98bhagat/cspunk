import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillTrophyFill } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";

function OverviewTab() {
  return (
    <div className="flex flex-col text-slate-300 ">
      <h1 className="text-xl font-medium my-3">About myself</h1>
      <p className="text-base sm:text-lg font-light  flex flex-col space-y-3">
        <span>
          I`m a full-stack developer who has experience in various aspects of
          web development ranging from Frontend (React, Next) to Backend
          (Express js) alongside Databases such as MongoDB, Firebase-Firestore &
          Postgress.
        </span>
        <span>
          Apart from Web-Development I`ve also spent a reasonable amount of time
          in Cross-Platform Mobile App Development with Google`s Flutter. To
          know more about flutter
          <a
            href="https://flutter.dev/"
            className=" text-sm  px-2 text-blue-500"
          >
            [Click here]
          </a>
        </span>

        <span>
          Coming up to my interest & hobbies, I like designing User Interfaces
          of various systems like Web-apps, Mobile apps & Desktop apps with
          Adobe XD & Figma.
        </span>
        <span>
          I`ve also made couple of youtube videos explaining technologies in
          English as well as in Hindi.
          <br />
          <a
            href="https://www.youtube.com/watch?v=BKNaqmpU2Rk"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-row text-md text-slate-400 items-center space-x-2 py-1 hover:underline ">
              <AiFillYoutube size={30} />
              <span>Library vs Framework Explained</span>
            </div>
          </a>
          <a
            href="https://www.youtube.com/watch?v=fxbomirnsFw"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-row text-md text-slate-400 items-center space-x-2 py-1 hover:underline ">
              <AiFillYoutube size={30} x />
              <span>How Does Internet Works Explaind in Hindi </span>
            </div>
          </a>
        </span>
      </p>

      <div className="grid grid-cols-3 my-5">
        {/* hobby */}
        <div className=" flex flex-col  items-start justify-center">
          <h1 className="text-2xl font-medium py-2">Hobby & Interest</h1>
          <p className="text-base sm:text-lg font-light px-5 py-2">
            <ul className="list-disc space-y-2">
              <li>UI/UX Design</li>
              <li>Logo Design</li>
              <li>Content Writing</li>
              <li>Making Youtube Videos</li>
            </ul>
          </p>
        </div>

        {/* soft skill */}
        <div className=" flex flex-col  items-start justify-center">
          <h1 className="text-2xl font-medium py-2">Soft Skill</h1>
          <p className="text-base sm:text-lg font-light px-5 py-2">
            <ul className="list-disc space-y-2">
              <li>Team work</li>
              <li>Quick Learner</li>
              <li>Active Listener</li>
              <li>Problem Solver</li>
            </ul>
          </p>
        </div>
        {/* Language */}
        <div className="flex flex-col  items-start justify-center">
          <h1 className="text-2xl font-medium py-2">Languages</h1>
          <p className="text-base sm:text-lg font-light px-5 py-2">
            <ul className="list-disc space-y-2">
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">Hindi</span>
                  <span className="text-sm">Fluent </span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">English</span>
                  <span className="text-sm">Fluent </span>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">Bengali</span>
                  <span className="text-sm">Familiar </span>
                </div>
              </li>
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
              <li>Won a 1st prize in Business Model</li>
              <li>Won a 2nd prize in Arduino Model Making</li>
            </ul>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
}

export default OverviewTab;
