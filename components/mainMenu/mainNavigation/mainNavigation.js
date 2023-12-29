"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/themeToggle/themeToggle";

export default function MainNavigation({ menuItems }) {
  const pathname = usePathname();

  return (
    <nav className="tw-overflow-y-auto tw-max-h-60vh md:tw-max-h-full tw-flex tw-flex-col tw-gap-6 tw-w-full tw-px-4 tw-py-2">
      {menuItems.map((item, index) => (
        <section key={index} className="tw-flex tw-flex-col tw-gap-2">
          {item.title && (
            <h3 className="tw-text-xl tw-font-bold tw-ml-2 tw-text-muted-foreground">
              {item.title}
            </h3>
          )}
          {item.links?.map((link, index) => (
            <Link
              href={link.href}
              className={`tw-flex tw-flex-row tw-justify-between tw-items-center tw-w-full tw-py-1 tw-px-2 tw-rounded-md hover:tw-ring tw-text-muted-foreground hover:tw-text-foreground
              ${
                pathname == link.href && "tw-bg-background tw-text-foreground"
              }`}
              key={index}
            >
              <span className="tw-flex tw-flex-row tw-items-center tw-gap-2">
                {link.icon}
                {link.title}
              </span>
              <span className="tw-text-sm tw-border-2 tw-border-border tw-rounded-md tw-w-6 tw-h-6 tw-flex tw-justify-center tw-items-center">
                {/* First letter of the title */}
                {link.title[0]}
              </span>
            </Link>
          ))}
        </section>
      ))}
      <section className="tw-flex tw-flex-col tw-gap-2">
        <h3 className="tw-text-xl tw-font-bold tw-ml-2 tw-text-muted-foreground">
          Other
        </h3>
        <div className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-w-full tw-py-1 tw-px-2">
          <span>Toggle Theme</span>
          <ThemeToggle />
        </div>
      </section>
    </nav>
  );
}
