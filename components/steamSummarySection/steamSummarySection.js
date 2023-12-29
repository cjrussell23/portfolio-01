import GameSortSelect from "@/components/steamSummarySection/gameSortSelect/gameSortSelect";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

async function getGames() {
  const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}&format=json`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  let res_json = await res.json();
  const games = res_json.response.games;
  const gameCount = res_json.response.game_count;
  return { games, gameCount };
}

async function getGameInfo(appId) {
  // Only need game name and image
  const url = `http://store.steampowered.com/api/appdetails?appids=${appId}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  let game = await res.json();
  game = Object.values(game)[0]?.data;
  return { name: game?.name, image: game?.header_image };
}

async function getGameAchievements(appId) {
  const url = `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appId}&key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}`;
  const res = await fetch(url);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

async function getProfile() {
  const url = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${process.env.STEAM_ID}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getData() {
  const { games, gameCount } = await getGames();
  for (const game of games) {
    const gameInfo = await getGameInfo(game.appid);
    // const achievements = await getGameAchievements(game.appid);
    game.name = gameInfo.name;
    game.image = gameInfo.image;
    // game.achievements = achievements;
  }
  let profile = await getProfile();
  profile = profile.response.players[0];
  profile.gameCount = gameCount;
  return { games, profile };
}

export default async function SteamSummarySection() {
  const { games, profile } = await getData();
  return (
    <div className="tw-flex tw-flex-col tw-gap-4 tw-px-4 tw-py-8 tw-w-full tw-max-w-7xl tw-mx-auto lg:tw-gap-8 lg:tw-pt-16">
      <h1 className="tw-text-3xl tw-font-bold">Games</h1>
      <Suspense fallback={<Skeleton className={"tw-h-96 tw-w-full"} />}>
        <GameSortSelect props={{ games, profile }} />
      </Suspense>
    </div>
  );
}
