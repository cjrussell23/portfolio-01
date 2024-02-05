import Link from "next/link";
import Image from "next/image";

function formatCreatedTime(timecreated) {
  return new Date(timecreated * 1000).toLocaleDateString("en-US");
}

async function getProfile() {
  const url = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${process.env.STEAM_ID}`;
  const res = await fetch(url);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function SteamProfile() {
  const profile = await getProfile();
  const { avatarfull, personaname, profileurl, timecreated } =
    profile.response.players[0];
  return (
    <div className="tw-flex tw-w-full tw-flex-row tw-items-center tw-gap-4">
      <Link href={profileurl} alt="Steam Profile" target="_blank">
        <Image
          src={avatarfull}
          alt="Steam Profile"
          width={64}
          height={64}
          className="tw-rounded-full"
          priority={true}
        />
      </Link>
      <div className="tw-flex tw-flex-col tw-items-start tw-text-start">
        <h3 className="tw-text-xl tw-font-bold">{personaname}</h3>
        <span className="tw-text-sm tw-text-muted-foreground">
          Profile Created: {formatCreatedTime(timecreated)}
        </span>
      </div>
    </div>
  );
}
