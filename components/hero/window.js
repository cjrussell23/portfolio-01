import "./window.css";

export default function Window() {
  return (
    <div
      id="window"
      className="flex flex-col items-center justify-center window-sill w-full max-w-xl"
    >
      <div className="flex flex-col items-center justify-center aspect-4/3 bg-center bg-no-repeat bg-cover relative window-frame border-brown-500 bg-[url(/img/day.webp)] dark:bg-[url(/img/night.webp)]">
        <div className="absolute pos-tl border-brown-700"></div>
        <div className="absolute pos-tr border-brown-700"></div>
        <div className="absolute pos-bl border-brown-700"></div>
        <div className="absolute pos-br border-brown-700"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cross-h bg-brown-500"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cross-v bg-brown-500"></div>
      </div>
      <div className="window-shadow bg-brown-700"></div>
      <div className="w-full bg-brown-500 border-brown-700 window-shelf"></div>
    </div>
  );
}
