"use client";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <div
      id="theme-toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      // On enter key press
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setTheme(theme === "dark" ? "light" : "dark");
        }
      }}
      className="tw-flex-start tw-flex tw-w-16 tw-cursor-pointer tw-rounded-full tw-bg-background tw-p-1 tw-shadow-inner tw-shadow-black dark:tw-place-content-end dark:tw-bg-zinc-700"
    >
      <div className="tw-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-input tw-p-1">
        <FaMoon className="tw-hidden tw-h-4 tw-w-4 tw-text-slate-800 dark:tw-block" />
        <FaSun className="tw-h-4 tw-w-4 tw-text-yellow-300 dark:tw-hidden" />
      </div>
    </div>
  );
}
