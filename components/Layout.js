import Header from "./Header";
import { useRouter } from "next/router";
import Footer from "./Footer";

export default function Layout({ children }) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/auth"
      ? false
      : true && router.pathname === "/help-center"
      ? false
      : true && router.pathname === "/signin"
      ? false
      : true;

  return (
    <div
      className="flex flex-col items-center bg-slate-900 text-slate-100 "
      //   style={{
      //     backgroundImage: `url(https://media.istockphoto.com/id/1224388366/vector/colorful-geometric-background.jpg?s=612x612&w=0&k=20&c=0MH3nZPyJnqL41pnXHnejHlUqFBPmVVKt8dCl9tbaOs=)`,
      //     // minHeight: "100vh",
      //   }}
    >
      <div className="flex-col  relative">
        {showHeader && <Header />}
        <div className="min-h-screen ">{children}</div>
        {showHeader && <Footer />}
      </div>
    </div>
  );
}
