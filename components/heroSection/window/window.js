import "./window.css";

export default function Window() {
  return (
    <div
      id="window"
      className="window-sill tw-flex tw-w-full tw-max-w-xl tw-flex-col tw-items-center tw-justify-center"
    >
      <div className="window-frame tw-relative tw-flex tw-aspect-4/3 tw-flex-col tw-items-center tw-justify-center tw-border-amber-800 tw-bg-[url(/img/day.webp)] tw-bg-cover tw-bg-center tw-bg-no-repeat dark:tw-border-amber-900 dark:tw-bg-[url(/img/night.webp)]">
        <div className="pos-tl tw-absolute tw-border-amber-900 dark:tw-border-amber-950"></div>
        <div className="pos-tr tw-absolute tw-border-amber-900 dark:tw-border-amber-950"></div>
        <div className="pos-bl tw-absolute tw-border-amber-900 dark:tw-border-amber-950"></div>
        <div className="pos-br tw-absolute tw-border-amber-900 dark:tw-border-amber-950"></div>
        <div className="cross-h tw-absolute tw-left-1/2 tw-top-1/2 tw--translate-x-1/2 tw--translate-y-1/2 tw-transform tw-bg-amber-800 dark:tw-bg-amber-900"></div>
        <div className="cross-v tw-absolute tw-left-1/2 tw-top-1/2 tw--translate-x-1/2 tw--translate-y-1/2 tw-transform tw-bg-amber-800 dark:tw-bg-amber-900"></div>
      </div>
      <div className="window-shadow tw-bg-amber-900 dark:tw-bg-amber-950"></div>
      <div className="window-shelf tw-w-full tw-border-amber-900 tw-bg-amber-800 dark:tw-border-amber-950 dark:tw-bg-amber-900"></div>
    </div>
  );
}
