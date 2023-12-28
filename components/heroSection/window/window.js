import "./window.css";

export default function Window() {
  return (
    <div
      id="window"
      className="tw-flex tw-flex-col tw-items-center tw-justify-center window-sill tw-w-full tw-max-w-xl"
    >
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-aspect-4/3 tw-bg-center tw-bg-no-repeat tw-bg-cover tw-relative window-frame tw-border-amber-800 dark:tw-border-amber-900 tw-bg-[url(/img/day.webp)] dark:tw-bg-[url(/img/night.webp)]">
        <div className="tw-absolute pos-tl tw-border-amber-900 dark:tw-border-amber-950"></div>
        <div className="tw-absolute pos-tr tw-border-amber-900 dark:tw-border-amber-950"></div>
        <div className="tw-absolute pos-bl tw-border-amber-900 dark:tw-border-amber-950"></div>
        <div className="tw-absolute pos-br tw-border-amber-900 dark:tw-border-amber-950"></div>
        <div className="tw-absolute tw-left-1/2 tw-top-1/2 tw-transform tw--translate-x-1/2 tw--translate-y-1/2 cross-h tw-bg-amber-800 dark:tw-bg-amber-900"></div>
        <div className="tw-absolute tw-left-1/2 tw-top-1/2 tw-transform tw--translate-x-1/2 tw--translate-y-1/2 cross-v tw-bg-amber-800 dark:tw-bg-amber-900"></div>
      </div>
      <div className="window-shadow tw-bg-amber-900 dark:tw-bg-amber-950"></div>
      <div className="tw-w-full tw-bg-amber-800 dark:tw-bg-amber-900 tw-border-amber-900 dark:tw-border-amber-950 window-shelf"></div>
    </div>
  );
}
