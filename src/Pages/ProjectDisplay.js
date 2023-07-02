import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { FaGithub } from 'react-icons/fa';
import "../styles/ProjectDisplay.css";

const ProkectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id]
    return (
        <div className="project">
            <h1 className="project__header">{project.name}</h1>
            <img src={project.image} alt="project"/>
            <p>
                <b>Skills:</b>{project.skills}
            </p>
            <p>
                Visit the project on Github <a href={project.link}><FaGithub /></a>
            </p>
        </div>
    );
}

export default ProkectDisplay;