import Window from "./window/window";
import Desk from "./desk/desk";
import Lamp from "./lamp/lamp";
import Cat from "./cat/cat";
import HangingLamp from "./hangingLamp/hangingLamp";
import AnalogClock from "./analogClock/analogClock";
import "./heroSection.css";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-end tw-gap-0 tw-bg-background tw-px-1 md:tw-px-16 lg:tw-flex-row lg:tw-justify-around lg:tw-gap-4 lg:tw-px-8"
    >
      <div className="tw-flex tw-h-full tw-w-full tw-max-w-2xl tw-flex-col tw-items-center tw-justify-between tw-gap-4 tw-pb-10 lg:tw-w-1/2">
        <div className="tw-flex tw-w-full tw-flex-row tw-items-start tw-justify-between tw-px-4">
          <div className="tw-flex tw-w-full tw-flex-row tw-justify-start">
            <HangingLamp />
          </div>
          <div className="tw-flex tw-w-full tw-flex-col tw-justify-center tw-pt-4 lg:tw-items-end">
            <AnalogClock />
          </div>
        </div>
        <Desk />
        <div className="tw-flex tw-w-full tw-flex-row tw-items-end tw-justify-end tw-px-4 lg:tw-hidden">
          <Cat />
        </div>
      </div>
      <div className="tw-hidden tw-h-full tw-w-1/4 tw-flex-col tw-items-center tw-justify-between tw-pb-10 tw-pt-8 lg:tw-flex lg:tw-w-1/4">
        <Window />
        <Cat />
      </div>
    </section>
  );
}
