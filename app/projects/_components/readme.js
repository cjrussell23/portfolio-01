"use client";

import MarkdownPreview from "@uiw/react-markdown-preview";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ReadMe(props) {
  const { theme } = useTheme();
  const { readme } = props;
  return (
    <MarkdownPreview
      source={readme}
      className="tw-p-8"
      wrapperElement={
        theme === "dark"
          ? { "data-color-mode": "dark" }
          : { "data-color-mode": "light" }
      }
    />
  );
}
