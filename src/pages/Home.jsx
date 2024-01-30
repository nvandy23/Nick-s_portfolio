import { useState, useEffect } from "react";
import '../App.css';
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Skill from "./Skills.jsx";

function About() {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <div className="bg-gray-100 py-12" id ="About">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <img src={about.headshot} className="rounded-full mb-4 w-32 h-32" alt="Headshot" />
          <h2 className="text-3xl font-semibold text-gray-800">{about.name}</h2>
          <h3 className="text-gray-500">{about.email}</h3>
        </div>
        <div className="mt-8">
          <p className="text-lg text-gray-700">{about.bio}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {about ? loaded() : <h1>Loading...</h1>}
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default About;




