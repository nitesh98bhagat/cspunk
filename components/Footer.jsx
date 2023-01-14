function Footer() {
  return (
    <div className="flex-col flex justify-center items-center text-slate-500 border-t border-slate-700">
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
      </div>
      &copy; Nitesh Bhagat
    </div>
  );
}

export default Footer;
