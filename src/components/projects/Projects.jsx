import "./projects.css";
import { PROJECTS } from "../../utils/data";
import { ProjectCard } from "./projectCard/ProjectCard";

export const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h5>Proyectos</h5>

      <div className="projects-content">
        <div className="projects">
          {PROJECTS.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
              body={item.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
