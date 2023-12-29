"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Suspense, useEffect, useState } from "react";
import SteamGames from "@/components/steamSummarySection/gameSortSelect/steamGames/steamGames";
import SteamProfile from "@/components/steamSummarySection/gameSortSelect/steamProfile/steamProfile";

function sortGames(games, sort) {
  if (sort === "name") {
    return [...games].sort((a, b) => {
      if (a.name && b.name) {
        return a.name.localeCompare(b.name);
      } else if (!a.name && b.name) {
        return 1;
      } else if (a.name && !b.name) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sort === "playtime") {
    return [...games].sort((a, b) => {
      if (a.playtime_forever && b.playtime_forever) {
        return b.playtime_forever - a.playtime_forever;
      } else if (!a.playtime_forever && b.playtime_forever) {
        return 1;
      } else if (a.playtime_forever && !b.playtime_forever) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sort === "lastplayed") {
    return [...games].sort((a, b) => {
      if (a.rtime_last_played && b.rtime_last_played) {
        return b.rtime_last_played - a.rtime_last_played;
      } else if (!a.rtime_last_played && b.rtime_last_played) {
        return 1;
      } else if (a.rtime_last_played && !b.rtime_last_played) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}

export default function GameSortSelect({ props }) {
  const { games, profile } = props;
  const [sortedGames, setSortedGames] = useState([]);
  const [sort, setSort] = useState("lastplayed");

  useEffect(() => {
    setSortedGames(sortGames(games, sort));
  }, [games, sort]);

  return (
    <div className="tw-flex tw-flex-col tw-gap-4 tw-w-full lg:tw-gap-8">
      <div className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-w-full">
        <SteamProfile profile={profile} />
        <Select
          value={sort}
          onValueChange={(value) => setSort(value)}
          className="tw-text-white"
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="playtime">Playtime</SelectItem>
            <SelectItem value="lastplayed">Last Played</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <SteamGames games={sortedGames} gameCount={profile.gameCount} />
      </Suspense>
    </div>
  );
}
