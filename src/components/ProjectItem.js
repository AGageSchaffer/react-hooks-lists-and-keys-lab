import React from "react";

function ProjectItem(props) {
const technology = props.projects.technologies.map((tech) => {
  console.log("tech", props.projects.technologies)
  return (
    <span id={tech}>{tech}</span>
  )
})

  return (
    <div className="project-item">
      <h3>{props.projects.name}</h3>
      <p>{props.projects.about}</p>
      <div className="technologies">
        {technology}
      </div>
    </div>
  );
}

export default ProjectItem;
