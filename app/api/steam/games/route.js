import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const sort = searchParams.get("sort") || "lastplayed";
  console.log(`GET /api/steam/games?sort=${sort}`);
  const games = await getGames();
  if (!games) {
    return NextResponse.error("Failed to fetch games", 500);
  }
  games.games = sortGames(games.games, sort);
  games.gameCount = games.games.length;
  return NextResponse.json({ games: games.games, gameCount: games.gameCount });
}

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
  } else {
    console.log("sortGames: Invalid sort option", sort);
    return games;
  }
}

async function getGames() {
  const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}&format=json`;
  try {
    const res = await fetch(url, { next: { revalidate: 84600 } });
    if (!res.ok) {
      return null;
    }
    let res_json = await res.json();
    const games = res_json.response.games;
    const gameCount = res_json.response.game_count;
    for (const game of games) {
      const gameInfo = await getGameInfo(game.appid);
      if (gameInfo) {
        game.name = gameInfo.name;
        game.image = gameInfo.image;
      }
    }
    return { games, gameCount };
  } catch (error) {
    console.error("getGames: Error fetching games", error);
    return null;
  }
}

async function getGameInfo(appId) {
  // Only need game name and image
  const url = `http://store.steampowered.com/api/appdetails?appids=${appId}`;
  const res = await fetch(url, { cache: "force-cache" });
  if (!res.ok) {
    return null;
  }
  let game = await res.json();
  game = Object.values(game)[0]?.data;
  return { name: game?.name, image: game?.header_image };
}
