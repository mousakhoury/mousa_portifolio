import GetProjects from "../../hooks/GetProjects";
import Section from "../../UI/Section";
import Project from "./Project";

export default function Projects() {
  let projects = GetProjects();
  return (
    <Section id="projects" className="projects sec-pad" title="Projects" subText="Here you will find some of the personal and clients projects that I created with each project containing its own case study">
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} host={project.host_co} title={project.title} link={project.url} description={project.description} stack={project.stack} image={project.image} isOdd={index % 2 === 0} />
        ))}
      </div>
    </Section>
  );
}
