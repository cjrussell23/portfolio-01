"use client";
import "./mouse.css";
import { useLayoutEffect } from "react";

export default function Mouse() {
  useLayoutEffect(() => {
    const mouse = document.getElementById("mouse");

    document.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      // Change x to be a range from -100 to 100
      x = (x - window.innerWidth / 2) / 6;
      mouse.style.transform = `translateX(${x}px)`;
    });
  }, []);

  return (
    <div
      id="mouse"
      className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-rounded-lg tw-bg-gray-800 dark:tw-bg-gray-900"
    >
      <div
        id="scroll"
        className="tw-flex tw-h-2 tw-w-2 tw-flex-col tw-items-center tw-justify-center tw-rounded-full tw-bg-white"
      ></div>
    </div>
  );
}
