import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { FaBars } from "react-icons/fa";

export default function MobileMenu({ menuItems }) {
  return (
    <div className="tw-flex tw-items-center tw-justify-center md:tw-hidden">
      <Menubar className="tw-border-0 tw-p-0 tw-h-0">
        <MenubarMenu className="tw-p-0">
          <MenubarTrigger className="tw-px-0 tw-py-0">
            <FaBars className="tw-text-2xl" />
          </MenubarTrigger>
          <MenubarContent className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-100 tw-gap-2 tw-py-4 tw-mt-3 tw-bg-primary">
            {menuItems.map((item, index) => (
              <MenubarItem key={index}>{item}</MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
