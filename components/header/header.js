import ThemeToggle from "@/components/themeToggle/themeToggle";
import DesktopMenu from "./desktopMenu/desktopMenu";
import MobileMenu from "./mobileMenu/mobileMenu";
import Link from "next/link";

export default function Header() {
  const menuItems = [
    <Link href="#about" className="tw-text-3xl" key={0}>
      About
    </Link>,
    <Link href="#projects" className="tw-text-3xl" key={1}>
      Projects
    </Link>,
    <Link href="#contact" className="tw-text-3xl" key={2}>
      Contact
    </Link>,
    <ThemeToggle key={3} />,
  ];

  return (
    <header
      className="tw-flex tw-items-center tw-justify-between tw-w-full tw-py-4 tw-px-8 tw-bg-primary"
      id="header"
    >
      <div id="logo" className="tw-flex tw-items-center tw-justify-center">
        <h1 className="tw-text-2xl tw-font-bold tw-text-white tw-text-center tw-m-0">
          CR
        </h1>
      </div>
      <DesktopMenu menuItems={menuItems} />
      <MobileMenu menuItems={menuItems} />
    </header>
  );
}
