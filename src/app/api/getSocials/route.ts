import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { PageInfo, SocialsProps } from "../../../../typings";
import { client } from "../../../../sanity/lib/client";

const query = groq` 
*[_type == "social"]
`;

type Data = {
  socials: SocialsProps[];
};
export const dynamic = "force-dynamic";
export const GET = async () => {
  const socials: SocialsProps[] = await client.fetch(query);
  return NextResponse.json<Data>({ socials }, { status: 200 });
};
