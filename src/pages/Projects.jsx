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
    return (
      <div className="flex flex-col items-center" id="Projects">
        <h1 className="text-3xl font-bold text-center mb-8">Projects:</h1>
        <div className="flex flex-wrap justify-center">
          {projects.map((project) => (
            <div key={project.id} className="project-image-container text-center mb-8 mx-4">
              <img src={project.image} alt={project.name} className="mb-4 rounded" />
              <div className="flex space-x-4">
                <a href={project.git} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Github
                </a>
                <a href={project.live} className="bg-green-500 text-white px-4 py-2 rounded">
                  Live Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;


