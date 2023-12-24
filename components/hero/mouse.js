"use client";

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
      className="flex flex-col items-center justify-center bg-custom-gray-900 rounded-lg"
    >
      <div
        id="scroll"
        className="flex flex-col items-center justify-center w-2 h-2 bg-white rounded-full"
      ></div>
    </div>
  );
}
