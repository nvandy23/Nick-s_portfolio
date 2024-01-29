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
    <div className="App text-center" id="About">
      <div className="flex flex-col items-center">
        <img src={about.headshot} className="rounded-full mb-4 w-40 h-40" alt="Headshot" />
        <h2 className="text-xl font-bold">{about.name}</h2>
        <h3 className="text-gray-500">{about.email}</h3>
      </div>
      <div className="mx-auto max-w-screen-md">
        <p className="text-center">{about.bio}</p>
      </div>
    </div>
  );

  return (
    <>
      {about ? loaded() : <h1>Loading...</h1>}
      <Skill />
      <Projects />
      <Contact />
    </>
  );
}

export default About;



