import ProjectItem from '../components/ProjectItem';
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1>My personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return <ProjectItem id={index} name={project.name} image={project.image} />
        })}
      </div>
    </div>
  );
}

export default Projects;