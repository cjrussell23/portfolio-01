import GameSortSelect from "@/components/steamSummarySection/gameSortSelect/gameSortSelect";
import { Suspense } from "react";

async function getGames() {
  const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}&format=json`;
  const res = await fetch(url);
  if (!res.ok) {
    return null;
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
    return null;
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
    return null;
  }
  return res.json();
}

async function getData() {
  const { games, gameCount } = await getGames();
  if (!games) {
    return { games: null, profile: null };
  }
  for (const game of games) {
    const gameInfo = await getGameInfo(game.appid);
    if (!gameInfo) {
      return { games: null, profile: null };
    }
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
  if (!games || !profile) {
    return (
      // Message to display if there is an error
      <div className="tw-mx-auto tw-flex tw-w-full tw-max-w-7xl tw-flex-col tw-gap-4 tw-px-4 tw-py-8 lg:tw-gap-8 lg:tw-pt-16">
        <h1 className="tw-text-3xl tw-font-bold">Games</h1>
        <p className="tw-text-lg">
          There was an error fetching data from Steam. Please try again later.
        </p>
      </div>
    );
  }
  return (
    <div className="tw-mx-auto tw-flex tw-w-full tw-max-w-7xl tw-flex-col tw-gap-4 tw-px-4 tw-py-8 lg:tw-gap-8 lg:tw-pt-16">
      <h1 className="tw-text-3xl tw-font-bold">Games</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <GameSortSelect props={{ games, profile }} />
      </Suspense>
    </div>
  );
}
