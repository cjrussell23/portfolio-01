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
      <DrawerTrigger className="tw-fixed tw-bottom-0 tw-right-0 tw-m-4 tw-p-2 tw-rounded-md tw-bg-primary tw-text-white tw-z-50 md:tw-hidden">
        <FaBars className="tw-text-2xl" />
      </DrawerTrigger>
      <DrawerContent className="tw-max-h-80vh tw-bg-card">
        <DrawerHeader
          className="tw-flex tw-justify-between tw-items-center tw-py-4 tw-px-6"
          overwrite={true}
        >
          <div className="tw-flex tw-flex-row tw-gap-4">
            <div className="tw-flex tw-items-center tw-justify-center">
              {/* Profile Image */}
              <Image
                src="/img/face.jpg"
                alt="Charles Russell"
                width={50}
                height={50}
                className="tw-rounded-full"
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
