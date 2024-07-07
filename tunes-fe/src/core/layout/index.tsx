import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../shared/auth/auth";
import { SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "../../shared/theme/theme.provider";
import classes from "./index.module.css";

function ApplicationLayout(props) {
  const { authState } = useAuth();
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <>
      <header className="h-fit px-10 pt-2 pb-6 flex justify-between items-center">
        <div className="title">
          <Link to="/">
            <div className="font-[900] text-[3em] leading-11 tracking-wider cursor-pointer">
              Tunes
            </div>
          </Link>
          <p className="text-[12px] tracking-widest">
            Challenge friends, guess songs, prove your music mastery!
          </p>
        </div>
        <nav className="flex gap-4 items-center justify-between">
          <div
            className="themeIcon font-extrabold cursor-pointer"
            onClick={handleThemeChange}
          >
            <SunIcon
              className={`text-6xl ${classes["theme-icon"]}`}
              color={theme === "dark" ? "white" : "black"}
            />
          </div>
          {!authState.isLoggedIn && (
            <Button
              variant={"outline"}
              className="border-primary text-primary font-extrabold"
            >
              LOGIN / SIGN UP
            </Button>
          )}
        </nav>
      </header>
      <main className="mx-8 mt-4 flex flex-col items-center h-[80vh]">
        <Outlet />
      </main>
    </>
  );
}

export default ApplicationLayout;
