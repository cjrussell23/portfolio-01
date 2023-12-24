import ThemeToggle from "./themeToggle";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="flex items-center justify-between sticky top-0 transition duration-100 z-50 bg-background invisible"
      id="header"
    >
      <span id="logo" className="text-3xl font-bold p-2">
        <Image src="/img/logo.png" alt="Logo" width={50} height={50} />
      </span>
      <div className="flex items-center justify-between space-x-4 p-8">
        <ThemeToggle />
      </div>
    </header>
  );
}
