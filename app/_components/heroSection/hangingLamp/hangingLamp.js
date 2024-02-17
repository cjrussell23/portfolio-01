"use client";

import "./hangingLamp.css";
import { useTheme } from "next-themes";
import { useRef } from "react";

export default function HangingLamp() {
  const { theme, setTheme } = useTheme();
  const triggerRef = useRef(null);
  function ropeDown(e) {
    e.preventDefault();
    triggerRef.current.classList.add("down");
  }
  function ropeUp(e) {
    e.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
    triggerRef.current.classList.remove("down");
  }
  return (
    <div className="hanging-lamp">
      <div className="cord tw-bg-gray-600 dark:tw-bg-gray-700"></div>
      <div className="shade">
        <div className="top tw-bg-gray-800 dark:tw-bg-gray-900"></div>
        <div className="bottom tw-bg-gray-800 dark:tw-bg-gray-900"></div>
      </div>
      <div className="bottom">
        <div className="light-effect"></div>
        <div className="bulb"></div>
        <div
          className="trigger"
          onTouchStart={ropeDown}
          onTouchEnd={ropeUp}
          onMouseDown={ropeDown}
          onMouseUp={ropeUp}
          ref={triggerRef}
        >
          <div className="rope tw-bg-gray-800 dark:tw-bg-gray-900"></div>
          <div className="ball tw-bg-gray-600 dark:tw-bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}
