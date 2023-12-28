"use client";
import "./lamp.css";
import React, { useRef } from "react";
import { useTheme } from "next-themes";

export default function Lamp() {
  const triggerRef = useRef(null);
  const { setTheme, theme } = useTheme();

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  function ropeDown() {
    triggerRef.current.classList.add("down");
  }

  function ropeUp() {
    toggleTheme();
    triggerRef.current.classList.remove("down");
  }

  return (
    <div
      id="lamp"
      className="tw-hidden lg:tw-flex tw-w-1/4 tw-h-full tw-flex-col tw-items-center tw-justify-end tw-pb-8"
    >
      <div className="lamp tw-flex tw-flex-col tw-items-center tw-justify-end">
        <div className="shade tw-flex tw-flex-col tw-items-center tw-justify-center">
          <div className="top tw-bg-gray-600 dark:tw-bg-gray-700 tw-border-gray-700 dark:tw-border-gray-800"></div>
          <div className="middle tw-bg-gray-700 dark:tw-bg-gray-800"></div>
          <div className="bottom tw-bg-gray-600 dark:tw-bg-gray-700 tw-border-gray-700 dark:tw-border-gray-800"></div>
        </div>
        <div className="tw-flex tw-justify-center tw-items-start tw-relative">
          <div className="light-effect"></div>
          <div
            className="trigger"
            ref={triggerRef}
            onMouseDown={ropeDown}
            onMouseUp={ropeUp}
            onTouchStart={ropeDown}
            onTouchEnd={ropeUp}
          >
            <div className="rope tw-bg-gray-600 dark:tw-bg-gray-700"></div>
            <div className="rope-ball tw-bg-gray-800 dark:tw-bg-gray-900"></div>
          </div>
          <div className="stand tw-bg-gray-600 dark:tw-bg-gray-700"></div>
        </div>
        <div className="base tw-bg-gray-700 dark:tw-bg-gray-800 tw-border-b-gray-800 dark:tw-border-b-gray-900 tw-border-b-8"></div>
      </div>
    </div>
  );
}
