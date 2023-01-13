import { TbMoodConfuzed } from "react-icons/tb";

function Error() {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen">
      <TbMoodConfuzed size={150} />
      <h1 className="text-slate-500 font-black text-6xl">PAGE NOT FOUND!!!</h1>
      <p className="text-4xl text-slate-600 font-semibold">
        {"We can't find what you are looking for."}
      </p>
    </div>
  );
}

export default Error;
