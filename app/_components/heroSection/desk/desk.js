import HeroTypeWriter from "./heroTypeWriter/heroTypeWriter";
import "./desk.css";
import Mouse from "./mouse/mouse";
import ComputerFan from "./computerFan/computerFan";

export default function Desk() {
  return (
    <div
      id="desk-setup"
      className="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-end"
    >
      <div className="tw-flex tw-w-full tw-flex-row tw-items-end tw-justify-around tw-gap-1 tw-px-2">
        <div
          id="monitor"
          className="tw-relative tw-flex tw-min-w-64 tw-max-w-64 tw-flex-col tw-items-center tw-justify-center xl:tw-min-w-96 xl:tw-max-w-96"
        >
          <div
            id="screen"
            className="tw-flex tw-aspect-video tw-w-full tw-flex-col tw-items-center tw-justify-center tw-rounded-lg tw-bg-gray-900 tw-p-3 dark:tw-bg-gray-950"
          >
            <div
              id="terminal"
              className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-start tw-justify-start tw-rounded-lg tw-bg-slate-100 dark:tw-bg-slate-950"
            >
              <div
                id="header"
                className="tw-flex tw-h-6 tw-w-full tw-flex-row tw-items-center tw-justify-start tw-gap-1 tw-rounded-t-lg tw-bg-slate-200 tw-px-2 dark:tw-bg-slate-900"
              >
                <div
                  id="red"
                  className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-red-500"
                ></div>
                <div
                  id="yellow "
                  className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-yellow-500"
                ></div>
                <div
                  id="green"
                  className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-green-500"
                ></div>
              </div>
              <span
                id="content"
                className="tw-h-full tw-w-full tw-p-4 tw-font-mono tw-text-xl xl:tw-text-3xl"
              >
                <HeroTypeWriter />
              </span>
            </div>
          </div>
          <div
            id="rod"
            className="tw-h-12 tw-w-1/6 tw-bg-gray-900 dark:tw-bg-gray-950 xl:tw-h-16"
          ></div>
          <div
            id="base"
            className="tw-flex tw-h-3 tw-w-1/2 tw-flex-col tw-items-center tw-justify-center tw-rounded-t-lg tw-bg-gray-900 dark:tw-bg-gray-950"
          ></div>
        </div>

        <div
          id="computer"
          className="tw-flex tw-h-48 tw-w-16 tw-flex-col tw-items-center tw-justify-between tw-rounded-lg tw-border-4 tw-border-gray-800 tw-bg-gray-500 tw-p-1 dark:tw-border-gray-900 dark:tw-bg-gray-600 xl:tw-h-72 xl:tw-w-24"
        >
          <div
            id="io"
            className="tw-flex tw-w-full tw-items-center tw-justify-between tw-gap-1"
          >
            <div className="tw-aspect-video tw-w-full tw-border-2 tw-border-gray-800 dark:tw-border-gray-900"></div>
            <div className="tw-aspect-video tw-w-full tw-border-2 tw-border-gray-800 dark:tw-border-gray-900"></div>
            <div className="tw-hidden tw-aspect-video tw-w-full tw-border-2 tw-border-gray-800 dark:tw-border-gray-900 xl:tw-block"></div>
            <div className="tw-aspect-square tw-w-2/3 tw-rounded-full tw-border-2 tw-border-gray-800 dark:tw-border-gray-900"></div>
          </div>
          <ComputerFan />
          <ComputerFan />
          <ComputerFan />
        </div>
      </div>
      <div className="desktop tw-relative tw-h-2 tw-w-full tw-rounded-t-lg tw-border-gray-600 dark:tw-border-gray-700 lg:tw-h-72">
        <Mouse />
      </div>
    </div>
  );
}
