"use client";

import "./hangingLamp.css";

export default function HangingLamp() {
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
    <div className="hanging-lamp">
      <div className="cord bg-custom-gray-700"></div>
      <div className="shade">
        <div className="top bg-custom-gray-500"></div>
        <div className="bottom bg-custom-gray-500"></div>
      </div>
      <div className="bottom">
        <div className="light-effect"></div>
        <div className="bulb"></div>
        <div className="trigger" onTouchStart={ropeDown} onTouchEnd={ropeUp}>
          <div className="rope bg-custom-gray-500"></div>
          <div className="ball bg-custom-gray-700"></div>
        </div>
      </div>
    </div>
  );
}
