import React from "react";
import Project from "./Project";
import { ProjectsProps } from "../../../../typings";
import OtherProjects from "./OtherProjects";

type Props = {
  project: ProjectsProps[];
};

function Projects({ project }: Props) {
  return (
    <div>
      <Project
        textPosition={"text-end items-end"}
        contentPosition={"text-end justify-end space-x-2"}
        project={project}
        idx={0}
      />
      <Project
        flexRow={"flex-row-reverse"}
        textPosition={"items-start text-start"}
        contentPosition={"text-start"}
        project={project}
        idx={1}
      />
      <Project
        textPosition={"text-end items-end"}
        contentPosition={"text-end justify-end space-x-2"}
        project={project}
        idx={2}
      />
      <OtherProjects project={project} />
    </div>
  );
}

export default Projects;
