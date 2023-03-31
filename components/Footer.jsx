import Link from "next/link";

function Footer() {
  return (
    <div className="flex-col flex justify-center items-center text-slate-500 border-t dark:border-slate-800 border-slate-200">
      <div className="text-semibold flex flex-row space-x-5 justify-center py-3 ">
        {[
          "Home",
          "About",
          "Blogs",
          "Terms & Condition",
          "Privacy & Policies",
        ].map((e, i) => (
          <p key={i}>{e}</p>
        ))}

        <Link href={"/privacy-policies"}>
          <p>Privacy & Policies</p>
        </Link>
      </div>
      <Link href={"/testing"}>&copy; Nitesh Bhagat</Link>
    </div>
  );
}

export default Footer;
