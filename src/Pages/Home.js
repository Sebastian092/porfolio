import "../styles/Home.css";
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, my name is Sebastian</h2>
        <div className="prompt">
          <p>A software developer with positive attitude and motivation</p>
          <a href="https://www.linkedin.com/in/sebastian-sza%C5%82adyga-9366a3225/">
           <FaLinkedin />
          </a>
          <a href="mailto:sebastian.szaladyga@gmail.com">
           <AiOutlineMail />
          </a>
          <a href="https://github.com/Sebastian092">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol key="list" className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, NPM</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;