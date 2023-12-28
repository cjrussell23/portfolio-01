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
import Image from "next/image";
import MainNavigation from "@/components/mainMenu/mainNavigation/mainNavigation";

export default function MobileMenu({ menuItems }) {
  return (
    <Drawer>
      <div
        className="tw-fixed tw-bottom-0 tw-right-0 tw-px-6 tw-py-2 tw-z-50 md:tw-hidden tw-bg-card tw-w-full tw-flex tw-flex-row tw-justify-between tw-items-center"
        id="mobile-menu"
      >
        <div className="tw-flex tw-flex-row tw-gap-4">
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
        <DrawerTrigger className="">
          <FaBars className="tw-text-2xl" />
        </DrawerTrigger>
      </div>
      <DrawerContent className="tw-max-h-80vh tw-bg-card">
        <DrawerHeader
          className="tw-flex tw-justify-between tw-items-center tw-px-6"
          overwrite={true}
        >
          <div className="tw-flex tw-flex-row tw-gap-4">
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
            <div className="tw-flex tw-flex-col tw-justify-center tw-gap-2 tw-text-start">
              <DrawerTitle>Charles Russell</DrawerTitle>
              <DrawerDescription className="tw-text-muted-foreground">
                Software Developer.
              </DrawerDescription>
            </div>
          </div>
          <DrawerClose>
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
