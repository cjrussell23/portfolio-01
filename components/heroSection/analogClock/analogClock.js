"use client";
import { useLayoutEffect } from "react";
import "./analogClock.css";

export default function AnalogClock() {
  useLayoutEffect(() => {
    const deg = 6;
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    const sc = document.querySelector("#sc");

    setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
    });
  }, []);

  return (
    <div className="clock tw-bg-zinc-300 dark:tw-bg-zinc-400">
      <div className="hour">
        <div className="hr" id="hr"></div>
      </div>
      <div className="min">
        <div className="mn" id="mn"></div>
      </div>
      <div className="sec">
        <div className="sc" id="sc"></div>
      </div>
    </div>
  );
}
