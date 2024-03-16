import { groq } from "next-sanity";
import { ProjectsProps } from "../../../typings";
import { client } from "../../../sanity/lib/client";
const query = groq` 
*[_type == "project"]
`;

export const fetchProjects = async () => {
  const projects: ProjectsProps[] = await client.fetch(query);

  return projects;
};
