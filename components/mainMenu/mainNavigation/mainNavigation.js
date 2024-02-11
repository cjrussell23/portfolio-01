"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/themeToggle/themeToggle";

export default function MainNavigation({ menuItems }) {
  const pathname = usePathname();
  return (
    <nav className="tw-flex tw-h-full tw-max-h-60vh tw-w-full tw-flex-col tw-gap-6 tw-px-4 tw-py-2 md:tw-max-h-full">
      {menuItems.map((item, index) => (
        <section key={index} className="tw-flex tw-flex-col tw-gap-2">
          {item.title && (
            <h3 className="tw-ml-2 tw-text-xl tw-font-bold tw-text-muted-foreground">
              {item.title}
            </h3>
          )}
          {item.links?.map((link, index) => (
            <Link
              onClick={() => {
                // Wait for 100ms before closing the menu
                setTimeout(() => {
                  document.getElementById("mobile-menu-close")?.click();
                }, 50);
              }}
              href={link.href}
              className={`tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-rounded-md tw-px-2 tw-py-1 tw-text-muted-foreground hover:tw-text-foreground hover:tw-ring
              ${
                pathname == link.href && "tw-bg-background tw-text-foreground"
              }`}
              key={index}
            >
              <span className="tw-flex tw-flex-row tw-items-center tw-gap-2">
                {link.icon}
                {link.title}
              </span>
              <span className="tw-flex tw-h-6 tw-w-6 tw-items-center tw-justify-center tw-rounded-md tw-border-2 tw-border-border tw-text-sm">
                {/* First letter of the title */}
                {link.title[0]}
              </span>
            </Link>
          ))}
        </section>
      ))}
      <section className="tw-mt-auto tw-flex tw-flex-col tw-gap-2">
        <h3 className="tw-ml-2 tw-text-xl tw-font-bold tw-text-muted-foreground">
          Other
        </h3>
        <div className="tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-px-2 tw-py-1">
          <span>Toggle Theme</span>
          <ThemeToggle />
        </div>
      </section>
    </nav>
  );
}
