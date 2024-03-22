import { groq } from "next-sanity";
import { ProjectsProps } from "../../../typings";
import { client } from "../../../sanity/lib/client";

const query = groq` 
  *[_type == "project"] 
`;

export const fetchProjects = async () => {
  try {
    const projects: ProjectsProps[] = await client.fetch(query);

    projects.sort((a, b) => {
      return a._createdAt.localeCompare(b._createdAt);
    });

    return projects;
  } catch (error) {
    console.error("Error fetching or sorting projects:", error);
    return [];
  }
};
