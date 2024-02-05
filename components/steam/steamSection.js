import SteamGames from "@/components/steam/steamGames";

import SteamProfile from "./steamProfile";

export default function SteamSection() {
  return (
    <div className="tw-mx-auto tw-flex tw-w-full tw-max-w-7xl tw-flex-col tw-gap-4 tw-px-4 tw-py-8 lg:tw-gap-8 lg:tw-pt-16">
      <h1 className="tw-text-3xl tw-font-bold">My Steam Games</h1>
      <SteamProfile />
      <SteamGames />
    </div>
  );
}
