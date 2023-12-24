import Window from "./window";
import Desk from "./desk";
import Lamp from "./lamp";
import Cat from "./cat";
import HangingLamp from "./hangingLamp";
import AnalogClock from "./analogClock";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-end md:flex-row md:justify-between items-center w-full h-screen custom-bg-main-gradient px-1 gap-0 overflow-hidden md:gap-4 lg:p-8"
    >
      <div className="flex-col justify-between pb-10 pt-8 items-center w-1/4 h-full hidden md:flex md:w-2/5 lg:w-1/4">
        <Window />
        <Cat />
      </div>
      <div className="flex flex-col justify-between pb-10 items-center w-full h-full md:w-3/5 lg:w-1/2 max-w-2xl">
        <div className="flex flex-row justify-between w-full px-4 items-start">
          <div className="lg:hidden flex flex-row justify-start w-full">
            <HangingLamp />
          </div>
          <div className="flex flex-col justify-center w-full pt-4 lg:items-end">
            <AnalogClock />
          </div>
        </div>
        <Desk />
        <div className="md:hidden flex flex-row justify-end items-end w-full p-4">
          <Cat />
        </div>
      </div>
      <Lamp />
    </section>
  );
}
