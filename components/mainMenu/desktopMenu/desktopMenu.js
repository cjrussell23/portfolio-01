"use client";

import Image from "next/image";
import MainNavigation from "@/components/mainMenu/mainNavigation/mainNavigation";

export default function DesktopMenu({ menuItems }) {
  return (
    <div className="tw-fixed tw-left-0 tw-top-0 tw-bottom-0 tw-flex-col tw-gap-4 tw-py-8 tw-border-r tw-overflow-y-auto tw-hidden md:tw-flex w-nav tw-bg-card">
      <div className="tw-flex tw-flex-row tw-gap-4 tw-px-4">
        <div className="tw-flex tw-items-center tw-justify-center">
          {/* Profile Image */}
          <Image
            src="/img/fishing.jpg"
            alt="Charles Russell"
            width={50}
            height={50}
            className="tw-rounded-full tw-aspect-square tw-object-cover tw-object-bottom"
          />
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-text-start">
          <p className="tw-text-xl tw-font-bold">Charles Russell</p>
          <p className="tw-text-m tw-text-muted-foreground">
            Software Developer.
          </p>
        </div>
      </div>
      <div className="tw-flex tw-flex-row tw-gap-4">
        <MainNavigation menuItems={menuItems} />
      </div>
    </div>
  );
}
