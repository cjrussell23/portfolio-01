"use client";

import MainNavigation from "@/components/mainMenu/mainNavigation/mainNavigation";
import LogoLink from "@/components/logoLink/logoLink";

export default function DesktopMenu({ menuItems }) {
  return (
    <div className="tw-fixed tw-left-0 tw-top-0 tw-bottom-0 tw-flex-col tw-gap-4 tw-py-8 tw-border-r tw-overflow-y-auto tw-hidden md:tw-flex w-nav tw-bg-card">
      <div className="tw-px-4">
        <LogoLink />
      </div>
      <div className="tw-flex tw-flex-row tw-gap-4">
        <MainNavigation menuItems={menuItems} />
      </div>
    </div>
  );
}
