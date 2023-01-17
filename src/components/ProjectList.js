import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList(props) {
  const projects = props.projects
  console.log(projects)
  const project = projects.map((projectinfo) => {
    console.log(projectinfo)

    return <ProjectItem key={projectinfo.id} projects={projectinfo} />

  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {project}
      </div>
    </div>
  );
}

export default ProjectList;
