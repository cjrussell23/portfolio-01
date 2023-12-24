"use client";
import "./lamp.css";

export default function Lamp() {
  function toggleTheme() {
    const themebtn = document.getElementById("theme-toggle");
    themebtn.click();
  }
  function ropeDown() {
    document.getElementsByClassName("trigger")[0].classList.add("down");
  }
  function ropeUp() {
    toggleTheme();
    document.getElementsByClassName("trigger")[0].classList.remove("down");
  }
  return (
    <div
      id="lamp"
      className="hidden lg:flex w-1/4 h-full flex-col items-center justify-end pb-8"
    >
      <div className="lamp flex flex-col items-center justify-end">
        <div className="shade flex flex-col items-center justify-center">
          <div className="top bg-custom-gray-500 border-custom-gray-700"></div>
          <div className="middle bg-custom-gray-700"></div>
          <div className="bottom bg-custom-gray-500 border-custom-gray-700"></div>
        </div>
        <div className="flex justify-center items-start relative">
          <div className="light-effect"></div>
          <div className="trigger" onMouseDown={ropeDown} onMouseUp={ropeUp}>
            <div className="rope bg-custom-gray-500"></div>
            <div className="rope-ball bg-custom-gray-900"></div>
          </div>
          <div className="stand bg-custom-gray-500"></div>
        </div>
        <div className="base bg-custom-gray-700 border-b-custom-gray-900 border-b-8"></div>
      </div>
    </div>
  );
}
