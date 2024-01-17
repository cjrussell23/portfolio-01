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
        className="tw-z-50 tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-bg-card tw-px-6 tw-py-2 md:tw-hidden"
        id="mobile-menu"
      >
        <LogoLink />
        <DrawerTrigger className="">
          <FaBars className="tw-text-2xl" />
        </DrawerTrigger>
      </div>
      <DrawerContent className="tw-bg-card">
        <DrawerHeader
          className="tw-flex tw-items-center tw-justify-between tw-px-6"
          overwrite={true}
        >
          <DrawerClose
            id="mobile-menu-close"
            className="tw-flex tw-w-full tw-justify-center"
          >
            {/* Rounded line */}
            <div className="tw-h-1 tw-w-1/2 tw-rounded-full tw-bg-foreground"></div>
          </DrawerClose>
        </DrawerHeader>
        <DrawerFooter>
          <MainNavigation menuItems={menuItems} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
