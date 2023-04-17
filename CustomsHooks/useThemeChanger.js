import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const useThemeChanger = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  // This is to determine whether components are mounted or not, so that it can show change theme button
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const changeTheme = () => {
    if (!isMounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsFillSunFill
          className="cursor-pointer"
          size={20}
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsFillMoonFill
          className="cursor-pointer"
          size={20}
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return changeTheme;
};

export default useThemeChanger;
