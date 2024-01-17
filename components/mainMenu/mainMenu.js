"use client";

import {
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaGamepad,
  FaGithub,
  FaGraduationCap,
  FaHome,
  FaLinkedin,
  FaMusic,
  FaTools,
  FaUser,
} from "react-icons/fa";
import MobileMenu from "@/components/mainMenu/mobileMenu/mobileMenu";
import DesktopMenu from "@/components/mainMenu/desktopMenu/desktopMenu";
import Socials from "@/data/socials.js";

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
      links: Socials,
    },
  ];
  return (
    <>
      <MobileMenu menuItems={menuItems} />
      <DesktopMenu menuItems={menuItems} />
    </>
  );
}
