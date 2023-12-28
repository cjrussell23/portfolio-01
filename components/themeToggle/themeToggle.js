import { motion } from "framer-motion";
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
      className={`tw-flex-start tw-shadow-inner tw-bg-background tw-w-28 tw-flex tw-rounded-full tw-p-2 tw-shadow-black tw-cursor-pointer dark:tw-bg-zinc-700 ${
        isOn && "tw-place-content-end"
      }`}
    >
      <motion.div
        className="tw-flex tw-h-[40px] tw-w-[40px] tw-items-center tw-justify-center tw-rounded-full tw-bg-input"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {isOn ? (
            <RiMoonClearFill className="tw-h-6 tw-w-6 tw-text-slate-200" />
          ) : (
            <RiSunFill className="tw-h-6 tw-w-6 tw-text-yellow-300" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
