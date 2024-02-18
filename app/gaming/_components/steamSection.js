import SteamGames from "@/app/gaming/_components/steamGames";
import Link from "next/link";
import { FaGamepad } from "react-icons/fa";
import SteamProfile from "./steamProfile";

export default function SteamSection() {
  return (
    <div className="tw-mx-auto tw-flex tw-w-full tw-max-w-8xl tw-flex-col tw-justify-center tw-gap-4 lg:tw-px-2 lg:tw-pb-4 lg:tw-pt-16">
      <div className="tw-flex tw-w-full tw-flex-col tw-justify-center tw-gap-4 tw-p-4">
        <Link
          href="/gaming"
          className="tw-flex tw-cursor-pointer tw-gap-2 hover:tw-text-primary"
        >
          <h1 className="tw-flex tw-items-center tw-gap-4 tw-text-3xl tw-font-bold">
            <FaGamepad />
            Gaming
          </h1>
        </Link>
        <p>
          This is a collection of my games on Steam pulled from the Steam API.
        </p>
      </div>
      <div className="tw-flex tw-flex-col tw-gap-4 tw-p-4">
        <SteamProfile />
        <SteamGames />
      </div>
    </div>
  );
}
