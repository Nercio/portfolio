import React from "react";
import Project from "./Project";

function Projects() {
  return (
    <div>
      <Project
        textPosition={"text-end items-end"}
        contentPosition={"text-end justify-end space-x-2"}
      />
      <Project
        flexRow={"flex-row-reverse"}
        textPosition={"items-start text-start"}
        contentPosition={"text-start"}
      />
      <Project
        textPosition={"text-end items-end"}
        contentPosition={"text-end justify-end space-x-2"}
      />
    </div>
  );
}

export default Projects;
