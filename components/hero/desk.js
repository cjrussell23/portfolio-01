import HeroTypeWriter from "./heroTypeWriter";
import "./fan.css";
import Mouse from "./mouse";

export default function Desk() {
  return (
    <div
      id="desk-setup"
      className="flex flex-col items-center justify-end size-full"
    >
      <div className="flex flex-row items-end justify-around w-full gap-1 px-2">
        <div
          id="monitor"
          className="flex flex-col items-center justify-center min-w-64 max-w-64 relative xl:min-w-96 xl:max-w-96"
        >
          <div
            id="screen"
            className="flex flex-col items-center justify-center p-3 bg-custom-gray-900 rounded-lg aspect-video w-full"
          >
            <div
              id="terminal"
              className="flex flex-col items-start justify-start w-full h-full bg-slate-100 rounded-lg dark:bg-slate-950"
            >
              <div
                id="header"
                className="flex flex-row items-center justify-start w-full h-6 bg-slate-200 rounded-t-lg px-2 gap-1 dark:bg-slate-900"
              >
                <div id="red" className="bg-red-500 rounded-full w-3 h-3"></div>
                <div
                  id="yellow "
                  className="bg-yellow-500 rounded-full w-3 h-3"
                ></div>
                <div
                  id="green"
                  className="bg-green-500 rounded-full w-3 h-3"
                ></div>
              </div>
              <span
                id="content"
                className="text-xl font-mono w-full h-full p-4 xl:text-3xl"
              >
                <HeroTypeWriter />
              </span>
            </div>
          </div>
          <div id="rod" className="w-1/6 h-12 bg-custom-gray-900 xl:h-16"></div>
          <div
            id="base"
            className="flex flex-col items-center justify-center w-1/2 h-3 bg-custom-gray-900 rounded-t-lg"
          ></div>
        </div>

        <div
          id="computer"
          className="flex flex-col items-center justify-between border-4 border-custom-gray-900 rounded-lg bg-primary-500 bg-custom-gray-100 p-1 w-16 h-48 xl:w-24 xl:h-72"
        >
          <div
            id="io"
            className="flex gap-1 items-center justify-between w-full"
          >
            <div className="border-2 border-custom-gray-900 w-full aspect-video"></div>
            <div className="border-2 border-custom-gray-900 w-full aspect-video"></div>
            <div className="border-2 border-custom-gray-900 w-full aspect-video hidden xl:block"></div>
            <div className="border-2 border-custom-gray-900 w-2/3 rounded-full aspect-square"></div>
          </div>
          <div className="fan">
            <div className="loader outer">
              <span></span>
              <span></span>
            </div>
            <div className="blades">
              <div className="blade"></div>
              <div className="blade"></div>
              <div className="blade"></div>
              <div className="blade"></div>
              <div className="blade"></div>
              <div className="blade"></div>
            </div>
          </div>
          <div className="fan">
            <div className="loader outer">
              <span></span>
              <span></span>
            </div>
            <div className="blades">
              <div className="blade"></div>
              <div className="blade"></div>
              <div className="blade"></div>
              <div className="blade"></div>
              <div className="blade"></div>
              <div className="blade"></div>
            </div>
          </div>
          <div className="fan">
            <div className="loader outer">
              <span></span>
              <span></span>
            </div>
            <div className="blades">
              <div className="blade"></div>
              <div className="blade"></div>
              <div className="blade"></div>
              <div className="blade"></div>
              <div className="blade"></div>
              <div className="blade"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-2 rounded-t-lg border-custom-gray-700 table relative md:h-72">
        <Mouse />
      </div>
    </div>
  );
}
