import Home from "./Home.jsx";
import Contactt from "./Contact.jsx";
import Profile from "./Profile.jsx";
import Project from "./Project.jsx";
import Skills from "./Skills.jsx";
import "./CSS/App.css";
import "./CSS/index.css";
import "animate.css";
import 'aos/dist/aos.css';

function App() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="profile">
        <Profile />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contactt />
      </section>
    </div>
  );
}

export default App;
 