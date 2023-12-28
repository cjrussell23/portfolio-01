import HeroTypeWriter from "./heroTypeWriter/heroTypeWriter";
import "./desk.css";
import Mouse from "./mouse/mouse";
import ComputerFan from "./computerFan/computerFan";

export default function Desk() {
  return (
    <div
      id="desk-setup"
      className="tw-flex tw-flex-col tw-items-center tw-justify-end tw-w-full"
    >
      <div className="tw-flex tw-flex-row tw-items-end tw-justify-around tw-w-full tw-gap-1 tw-px-2">
        <div
          id="monitor"
          className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-w-64 tw-max-w-64 tw-relative xl:tw-min-w-96 xl:tw-max-w-96"
        >
          <div
            id="screen"
            className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-3 tw-bg-gray-900 dark:tw-bg-gray-950 tw-rounded-lg tw-aspect-video tw-w-full"
          >
            <div
              id="terminal"
              className="tw-flex tw-flex-col tw-items-start tw-justify-start tw-w-full tw-h-full tw-bg-slate-100 tw-rounded-lg dark:tw-bg-slate-950"
            >
              <div
                id="header"
                className="tw-flex tw-flex-row tw-items-center tw-justify-start tw-w-full tw-h-6 tw-bg-slate-200 tw-rounded-t-lg tw-px-2 tw-gap-1 dark:tw-bg-slate-900"
              >
                <div
                  id="red"
                  className="tw-bg-red-500 tw-rounded-full tw-w-3 tw-h-3"
                ></div>
                <div
                  id="yellow "
                  className="tw-bg-yellow-500 tw-rounded-full tw-w-3 tw-h-3"
                ></div>
                <div
                  id="green"
                  className="tw-bg-green-500 tw-rounded-full tw-w-3 tw-h-3"
                ></div>
              </div>
              <span
                id="content"
                className="tw-text-xl tw-font-mono tw-w-full tw-h-full tw-p-4 xl:tw-text-3xl"
              >
                <HeroTypeWriter />
              </span>
            </div>
          </div>
          <div
            id="rod"
            className="tw-w-1/6 tw-h-12 tw-bg-gray-900 dark:tw-bg-gray-950 xl:tw-h-16"
          ></div>
          <div
            id="base"
            className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-1/2 tw-h-3 tw-bg-gray-900 dark:tw-bg-gray-950 tw-rounded-t-lg"
          ></div>
        </div>

        <div
          id="computer"
          className="tw-flex tw-flex-col tw-items-center tw-justify-between tw-border-4 tw-border-gray-800 dark:tw-border-gray-900 tw-rounded-lg tw-bg-gray-500 dark:tw-bg-gray-600 tw-p-1 tw-w-16 tw-h-48 xl:tw-w-24 xl:tw-h-72"
        >
          <div
            id="io"
            className="tw-flex tw-gap-1 tw-items-center tw-justify-between tw-w-full"
          >
            <div className="tw-border-2 tw-border-gray-800 dark:tw-border-gray-900 tw-w-full tw-aspect-video"></div>
            <div className="tw-border-2 tw-border-gray-800 dark:tw-border-gray-900 tw-w-full tw-aspect-video"></div>
            <div className="tw-border-2 tw-border-gray-800 dark:tw-border-gray-900 tw-w-full tw-aspect-video tw-hidden xl:tw-block"></div>
            <div className="tw-border-2 tw-border-gray-800 dark:tw-border-gray-900 tw-w-2/3 tw-rounded-full tw-aspect-square"></div>
          </div>
          <ComputerFan />
          <ComputerFan />
          <ComputerFan />
        </div>
      </div>
      <div className="tw-w-full tw-h-2 tw-rounded-t-lg tw-border-gray-600 dark:tw-border-gray-700 desktop tw-relative lg:tw-h-72">
        <Mouse />
      </div>
    </div>
  );
}
