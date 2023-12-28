import { motion } from "framer-motion";
import React, { useState } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { setTheme, theme } = useTheme();
  const isOn = theme === "dark";

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      id="theme-toggle"
      onClick={() => setTheme(isOn ? "light" : "dark")}
      className={`tw-flex-start tw-flex tw-h-[50px] tw-w-[100px] tw-rounded-[50px] tw-bg-zinc-100 tw-p-[5px] tw-shadow-inner tw-cursor-pointer dark:tw-bg-zinc-700 ${
        isOn && "tw-place-content-end"
      }`}
    >
      <motion.div
        className="tw-flex tw-h-[40px] tw-w-[40px] tw-items-center tw-justify-center tw-rounded-full tw-bg-black/90"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {isOn ? (
            <RiSunFill className="tw-h-6 tw-w-6 tw-text-yellow-300" />
          ) : (
            <RiMoonClearFill className="tw-h-6 tw-w-6 tw-text-slate-200" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
