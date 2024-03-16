import { useEffect, useState } from "react";
import { fetchPageInfo } from "@/utils/sanity/fetchPageInfo";
import { PageInfoProps, ProjectsProps } from "../../typings";
import { fetchProjects } from "@/utils/sanity/fetchProjects";

export function useProjects() {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };

    fetchData();
  }, []);

  return projects;
}
