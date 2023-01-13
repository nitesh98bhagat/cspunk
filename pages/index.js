import Image from "next/image";
import Head from "next/head";
import { GoPrimitiveDot } from "react-icons/go";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CsPunk | Home of the Devs</title>
      </Head>
      <div className="flex flex-row  w-full  py-16 ">
        <Image
          src={"/cover_image.png"}
          width={500}
          height={400}
          alt={"coverImage"}
        />

        <div className="flex-col flex flex-1 bg-gray-800 shadow-xl font-bold rounded-md mx-10 overflow-hidden border border-slate-700">
          {/* <Image src="/full_logo.png" width={200} height={50} /> */}
          <div className="flex-row flex bg-zinc-800 p-1 justify-end">
            <GoPrimitiveDot className="text-red-500" />
            <GoPrimitiveDot className="text-yellow-500" />
            <GoPrimitiveDot className="text-green-500" />
          </div>
          <h1 className="text-slate-300  text-6xl p-2">
            Home of the
            <br />
            <span className="text-emerald-500 font-black">{"//: DEVs"}</span>
          </h1>
          <h1 className="text-base text-lime-500 font-light tracking-wide">
            {
              "$>> Get Started with creating your own profile || By searching an existing Developer"
            }
          </h1>
        </div>
      </div>
    </div>
  );
}
