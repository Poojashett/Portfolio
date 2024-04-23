import "./Experience.css"

const Experience = () => {


    return (
        <div className="exp-container">
            <div>Experience</div>
            <div className="box">
                <div className="exp-header">
                    <div className="company-details">
                        <div className="logo">
                            <img src="https://www.robosoftin.com/assets/image/common/Robosoft_main-logo_horizontal.svg" alt="logo" />
                            <div className="text-bold">Software Engineer</div>
                        </div>
                    </div>
                    <div className="dates">
                        <p className="m-0">
                            Nov'23 - Present
                        </p>
                        <p className="m-0">
                            Udupi ,India
                        </p>
                    </div>

                </div>

                <div className="exp-content">
                    <ul>
                        <li>
                            Developed and maintained responsive web applications using Angular and React.js to ensure a seamless user experience on various devices.
                        </li>
                        <li>
                            Collaborated with UX/UI designers to implement visually appealing and user-friendly interfaces.
                        </li>
                        <li>
                            Worked closely with back-end developers to implement RESTful APIs, aligning with customer requirements for effective, functional, and intuitive solutions.
                        </li>
                        <li>
                            Optimized application performance through code refactoring and implementing best practices.
                        </li>
                    </ul>
                    
                </div>

                <div className="flex">
                    <div className="text-bold">Software Engineer Trainee</div>
                    <div className="dates">
                        <p className="m-0">
                            Aug'23 - Present
                        </p>
                        <p className="m-0">
                            Udupi ,India
                        </p>
                    </div>


                </div>
                <div className="exp-content">
                    <ul>
                        <li>
                            Developed responsive user interfaces utilizing Angular and Angular Material, and also created UI components with React.js.

                        </li>
                        <li>
                            Collaborated on group projects with team members to deliver successful outcomes.
                        </li>
                        <li>
                            Integrated RESTful APIs to retrieve and display product information.
                        </li>
                        <li>
                            Worked collaboratively with team members to troubleshoot and resolve issues effectively.
                        </li>
                    </ul>
                    {/* <div className="skills">
                        <button className="skill-button">HTML</button>
                        <button className="skill-button">CSS</button>
                        <button className="skill-button">JavaScript</button>
                        <button className="skill-button">Bootstrap</button>
                        </div> */}
                </div>

            </div>

        </div>
    )
}

export default Experience;