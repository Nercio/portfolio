import { groq } from "next-sanity";
import { PageInfoProps } from "../../../typings";
import { client } from "../../../sanity/lib/client";
const query = groq` 
*[_type == "pageInfo"][0]
`;

export const fetchPageInfo = async () => {
  const pageInfo: PageInfoProps = await client.fetch(query);

  return pageInfo;
};
