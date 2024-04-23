import "./Projects.css";
import tatamutualfundImg from '../assets/tatamutualfund.png';


const Projects = () => {
    return (
        <div className="proj-container">
            <div>Projects</div>
            <div className="image-container">
                <img src={tatamutualfundImg} alt="img" className="project-image" />
                <div className="image-description">
                    <ul>
                        <li>
                            Developed and maintained Distributor, Investor, Corporate and Admin Console
                            portals using Angular.
                        </li>
                        <li>
                            Integrated various Angular libraries to enhance portal
                            functionalities.
                        </li>
                        <li>
                            Implemented a secure Payment Gateway for seamless transaction
                            processing.
                        </li>
                        <li>
                            Designed user interfaces and integrated APIs.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects;