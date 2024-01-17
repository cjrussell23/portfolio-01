import Image from "next/image";

export default function UnderConstruction() {
  return (
    <div className="tw-flex tw-h-full tw-flex-col tw-items-center tw-justify-center tw-gap-4">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-4 md:tw-flex-row">
        <h1 className="tw-text-center tw-text-5xl tw-font-bold md:tw-w-1/2">
          This page is under construction
        </h1>
        <Image
          src="/img/construction.webp"
          alt="Under Construction"
          width={256}
          height={256}
        />
      </div>
    </div>
  );
}
