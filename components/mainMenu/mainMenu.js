"use client";

import {
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaGamepad,
  FaGraduationCap,
  FaHome,
  FaTools,
  FaUser,
} from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import MobileMenu from "@/components/mainMenu/mobileMenu/mobileMenu";
import DesktopMenu from "@/components/mainMenu/desktopMenu/desktopMenu";
import { socials } from "@/data/socials";

export default function MainMenu() {
  const menuItems = [
    {
      links: [
        {
          title: "Home",
          href: "/",
          icon: <FaHome />,
        },
        {
          title: "About",
          href: "/about",
          icon: <FaUser />,
        },
        {
          title: "Contact",
          href: "/contact",
          icon: <FaEnvelope />,
        },
        {
          title: "Resume",
          href: "/resume",
          icon: <RiPagesLine />,
        },
      ],
    },
    {
      title: "Resume",
      links: [
        {
          title: "Work",
          href: "/work",
          icon: <FaBriefcase />,
        },
        {
          title: "Education",
          href: "/education",
          icon: <FaGraduationCap />,
        },
        {
          title: "Skills",
          href: "/skills",
          icon: <FaTools />,
        },
        {
          title: "Projects",
          href: "/projects",
          icon: <FaCode />,
        },
      ],
    },
    {
      title: "Personal",
      links: [
        {
          title: "Gaming",
          href: "/gaming",
          icon: <FaGamepad />,
        },
      ],
    },
    {
      title: "Social",
      links: socials,
    },
  ];
  return (
    <>
      <MobileMenu menuItems={menuItems} />
      <DesktopMenu menuItems={menuItems} />
    </>
  );
}
