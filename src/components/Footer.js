
import "../styles/Footer.css";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
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
            <p>&copy; 2023 Sebastian Szaładyga</p>
        </div>
    );
}

export default Footer;