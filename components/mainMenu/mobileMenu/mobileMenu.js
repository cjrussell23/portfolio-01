"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { FaBars, FaTimes } from "react-icons/fa";
import MainNavigation from "@/components/mainMenu/mainNavigation/mainNavigation";
import LogoLink from "@/components/logoLink/logoLink";

export default function MobileMenu({ menuItems }) {
  return (
    <Drawer>
      <div
        className="tw-fixed tw-bottom-0 tw-right-0 tw-px-6 tw-py-2 tw-z-50 md:tw-hidden tw-bg-card tw-w-full tw-flex tw-flex-row tw-justify-between tw-items-center tw-rounded-t-lg"
        id="mobile-menu"
      >
        <LogoLink />
        <DrawerTrigger aria-label="Open Menu">
          <FaBars className="tw-text-2xl" />
        </DrawerTrigger>
      </div>
      <DrawerContent className="tw-bg-card">
        <DrawerHeader
          className="tw-flex tw-justify-between tw-items-center tw-px-6"
          overwrite={true}
        >
          <LogoLink />
          <DrawerClose aria-label="Close Menu" id="mobile-menu-close">
            <FaTimes className="tw-text-2xl tw-rounded-md tw-p-1 tw-bg-foreground tw-text-background" />
          </DrawerClose>
        </DrawerHeader>
        <DrawerFooter>
          <MainNavigation menuItems={menuItems} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
