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
    <div class="clock bg-custom-gray-100">
      <div class="hour">
        <div class="hr" id="hr"></div>
      </div>
      <div class="min">
        <div class="mn" id="mn"></div>
      </div>
      <div class="sec">
        <div class="sc" id="sc"></div>
      </div>
    </div>
  );
}
