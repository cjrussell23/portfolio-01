"use client";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      id="theme-toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`tw-flex-start tw-shadow-inner tw-bg-background tw-w-16 tw-flex tw-rounded-full tw-p-1 tw-shadow-black tw-cursor-pointer dark:tw-bg-zinc-700 ${
        theme != "light" && "tw-place-content-end"
      }`}
    >
      <motion.div
        className="tw-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-input tw-p-1"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {theme != "light" ? (
            <FaMoon className="tw-h-4 tw-w-4 tw-text-slate-800" />
          ) : (
            <FaSun className="tw-h-4 tw-w-4 tw-text-yellow-300" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
