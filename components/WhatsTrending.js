const WhatsTrending = () => {
  return (
    <div className="flex-col flex bg-neutral-100  dark:bg-neutral-800/40 p-3 rounded-3xl">
      <h1 className="text-xl font-bold">{`What's happening`}</h1>
      <p className="text-sm font-light -my-1">{`what' happening arround you`}</p>

      {/* list */}
      {[
        "React",
        "Flutter",
        "TailwindCss",
        "ChatGPT",
        "Microsoft",
        "OpenAI",
        "NextJs13Release",
      ].map((e) => (
        <div key={e} className="py-2 hover:underline cursor-pointer">
          #{e}
        </div>
      ))}
    </div>
  );
};

export default WhatsTrending;
