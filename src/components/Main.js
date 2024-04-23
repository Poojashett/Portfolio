
import About from "./About";
import Description from "./Description";
import Header from "./Header";
import Experience from "./Experience"
import "./Main.css"
import Projects from "./Projects";

const Main = () => {

    return (
        <div className="bg">
            <Header className="header" />
            <Description/>
            <About/>
            <Experience/>
            <Projects/>
        </div>
    )

}

export default Main;