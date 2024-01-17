"use client";

import MainNavigation from "@/components/mainMenu/mainNavigation/mainNavigation";
import LogoLink from "@/components/logoLink/logoLink";

export default function DesktopMenu({ menuItems }) {
  return (
    <div className="w-nav tw-fixed tw-bottom-0 tw-left-0 tw-top-0 tw-hidden tw-flex-col tw-gap-4 tw-overflow-y-auto tw-border-r tw-bg-card tw-py-8 md:tw-flex">
      <div className="tw-px-4">
        <LogoLink />
      </div>
      <div className="tw-flex tw-h-full tw-flex-row tw-gap-4">
        <MainNavigation menuItems={menuItems} />
      </div>
    </div>
  );
}
