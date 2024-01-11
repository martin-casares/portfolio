import "./App.css";

import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Skills } from "./components/skills/Skills";
import { WorkExperience } from "./components/workExperience/WorkExperience";
import { ContactMe } from "./components/contactMe/ContactMe";
import { Projects } from "./components/projects/Projects";
import { Footer } from "./components/footer/Footer";
import { WORK_EXPERIENCE, ACADEMIC_FORMATION } from "./utils/data";

function App() {
  /* const scrollToSection = (id) => {
   *   const element = document.getElementById(id);
   *   if (element) {
   *     element.scrollIntoView({ behavior: "smooth" });
   *   }
   * }; */

  return (
    <>
      {/* <Navbar scrollToSection={scrollToSection} /> */}
      <Navbar />
      <div className="container">
        <Hero />

        <WorkExperience data={WORK_EXPERIENCE} title={"Experiencia Laboral"} />
        <WorkExperience
          data={ACADEMIC_FORMATION}
          title={"Formacion Academica"}
        />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
