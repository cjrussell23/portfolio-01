import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

function formatPlaytime(playtime) {
  if (playtime < 60) {
    return `${playtime} minutes`;
  } else {
    return `${Math.floor(playtime / 60)} hours`;
  }
}

function formatLastPlayed(lastPlayed) {
  const currentTime = new Date().getTime() / 1000;
  const timeDifference = currentTime - lastPlayed;

  // Less than one hour
  if (timeDifference < 60) {
    return `${Math.floor(timeDifference)} minutes ago`;
  }
  // Less than one day
  else if (timeDifference < 3600) {
    return `${Math.floor(timeDifference / 60)} hours ago`;
  }
  // Less than one week
  else if (timeDifference < 86400) {
    return `${Math.floor(timeDifference / 3600)} days ago`;
  } else {
    return `${Math.floor(timeDifference / 86400)} days ago`;
  }
}

export function SteamGameSkeleton() {
  return (
    <Skeleton className="tw-flex tw-flex-col tw-rounded-md tw-bg-card">
      <Skeleton className="tw-aspect-steam-game tw-w-full tw-rounded-md tw-bg-muted-foreground/50" />
      <div className="tw-flex tw-flex-col tw-items-start tw-gap-3 tw-px-4 tw-py-2 tw-text-start">
        <Skeleton className="tw-h-5 tw-w-3/4 tw-rounded tw-bg-card-foreground" />
        <Skeleton className="tw-h-3 tw-w-1/2 tw-rounded tw-bg-muted-foreground" />
        <Skeleton className="tw-h-3 tw-w-1/2 tw-rounded tw-bg-muted-foreground" />
      </div>
    </Skeleton>
  );
}

export default function SteamGame({ game }) {
  return (
    <div className="tw-flex tw-flex-col tw-rounded-md tw-bg-card">
      <Image
        src={game.image ? game.image : "/img/steamPlaceholder.webp"}
        alt={game.name ? game.name : "Steam Game"}
        width={460}
        height={215}
        className="tw-aspect-steam-game tw-w-full tw-rounded-t-md tw-object-cover"
      />
      <div className="tw-flex tw-flex-col tw-items-start tw-px-4 tw-py-2 tw-text-start">
        <Link href={`https://store.steampowered.com/app/${game.appid}`}>
          <h3 className="tw-text-xl tw-font-bold">
            {game.name ? game.name : "Unknown"}
          </h3>
        </Link>
        <span className="tw-text-sm tw-text-muted-foreground">
          Playtime: {formatPlaytime(game.playtime_forever)}
        </span>
        <span className="tw-text-sm tw-text-muted-foreground">
          Last Played:{" "}
          {game.rtime_last_played
            ? formatLastPlayed(game.rtime_last_played)
            : "Never"}
        </span>
      </div>
    </div>
  );
}
