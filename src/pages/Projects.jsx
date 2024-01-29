import { useState, useEffect } from "react";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  const loaded = () => {
    return projects.map((project) => (
      <div key={project.id} className="project-image-container text-center">
        <img src={project.image} alt={project.name} />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>Live Site</button>
        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
