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
      className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-gray-800 dark:tw-bg-gray-900 tw-rounded-lg"
    >
      <div
        id="scroll"
        className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-2 tw-h-2 tw-bg-white tw-rounded-full"
      ></div>
    </div>
  );
}
