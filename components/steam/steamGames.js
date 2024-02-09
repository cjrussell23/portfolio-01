"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SteamGame, { SteamGameSkeleton } from "@/components/steam/steamGame";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { debounce } from "lodash";

export default function SteamGames() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || "lastplayed";
  const [userSearchInput, setUserSearchInput] = useState(
    searchParams.get("search") || ""
  );
  const [debouncedSearch, setDebouncedSearch] = useState(
    searchParams.get("search") || ""
  );
  const [games, setGames] = useState([]);
  const [sortedGames, setSortedGames] = useState([]);
  const [error, setError] = useState(null);

  const delayedSearch = debounce((value) => {
    setDebouncedSearch(value);
  }, 500);

  useEffect(() => {
    delayedSearch(userSearchInput);
    return delayedSearch.cancel;
  }, [userSearchInput, delayedSearch]);

  useEffect(() => {
    const endpoint =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://chjrussell.com";
    const url = new URL(`${endpoint}/api/steam/games`);
    let ignore = false;
    url.searchParams.append("sort", sort);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (!ignore) {
          setGames(data);
        }
      })
      .catch((error) => {
        console.error("SteamGames: Error fetching games", error);
        setError(error);
        setGames([]);
        setGameCount(0);
      });
    return () => {
      ignore = true;
    };
  }, [sort]);

  useEffect(() => {
    let ignore = false;
    console.log("SteamGames: Searching games", debouncedSearch);
    console.log("SteamGames: Games", games);
    if (debouncedSearch) {
      setSortedGames(
        games.filter((game) => {
          if (game.name) {
            return game.name
              .toLowerCase()
              .includes(debouncedSearch.toLowerCase());
          }
        })
      );
    } else {
      setSortedGames(games);
    }
    return () => {
      ignore = true;
    };
  }, [debouncedSearch, games]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    router.push(`?sort=${sort}&search=${value}`);
    setUserSearchInput(value);
  };

  return (
    <div className="tw-flex tw-w-full tw-flex-col tw-gap-4">
      <div className="flex-col tw-flex tw-gap-4 md:tw-flex-row md:tw-justify-between">
        <Select
          value={sort}
          onValueChange={(value) => {
            router.push(`?sort=${value}&search=${debouncedSearch}`);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="playtime">Playtime</SelectItem>
            <SelectItem value="lastplayed">Last Played</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="text"
          value={userSearchInput}
          onChange={handleInputChange}
          placeholder="Search"
        />
      </div>
      <div className="tw-text-muted-foreground">
        {debouncedSearch
          ? `Showing ${sortedGames.length} of ${games.length} games`
          : `Showing all ${games.length} games`}
      </div>
      <div className="tw-grid tw-grid-cols-1 tw-gap-4 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4">
        {error ? (
          <div className="tw-align-center tw-flex tw-flex-col tw-justify-center tw-gap-4">
            <h1 className="tw-text-2xl tw-font-bold tw-text-red-500">
              Error fetching games
            </h1>
            <p>{error.message}</p>
          </div>
        ) : sortedGames && games.length > 0 ? (
          sortedGames.map((game, index) => (
            <SteamGame key={index} game={game} />
          ))
        ) : (
          Array.from({ length: games?.length || 100 }).map((_, index) => (
            <SteamGameSkeleton key={index} />
          ))
        )}
      </div>
    </div>
  );
}
