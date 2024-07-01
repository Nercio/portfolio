import { useEffect, useState } from "react";
import { fetchPageInfo } from "@/utils/sanity/fetchPageInfo";
import { PageInfoProps, ProjectsProps } from "../../typings";
import { fetchProjects } from "@/utils/sanity/fetchProjects";

export function useProjects() {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);
  const [projectLoading, setloading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      const data = await fetchProjects();
      setProjects(data);
      setloading(false);
    };

    fetchData();
  }, []);
  return { projects, projectLoading };
}
