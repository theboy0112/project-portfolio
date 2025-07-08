import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import Contactt from "./Contactt.jsx";
import Profile from "./Profile.jsx";
import Project from "./Project.jsx";
import Skills from "./Skills.jsx";
import "./App.css";
import "./index.css";
import 'animate.css';

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
        <Contact />
      </section>
      <section id="contactt">
        <Contactt />
      </section>
    </div>
  );
}

export default App;
