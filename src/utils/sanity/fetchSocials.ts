import { groq } from "next-sanity";
import { SocialsProps } from "../../../typings";
import { client } from "../../../sanity/lib/client";
const query = groq` 
*[_type == "social"]
`;

export const fetchSocials = async () => {
  const socials: SocialsProps[] = await client.fetch(query);

  return socials;
};
