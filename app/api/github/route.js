import { Octokit } from "octokit";
import { NextRequest, NextResponse } from "next/server";

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function GET(request) {
  const res = await octokit.request(`GET /${process.env.GITHUB_USERNAME}`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  return NextResponse.json(res);
}
