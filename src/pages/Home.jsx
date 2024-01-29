import { useState, useEffect } from "react";
import '../App.css';
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx"

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
    <div className="App">
      <img src={about.headshot} className="rounded-full inline-block " alt="Headshot" />
      <div className="ml-4">
        <h2>{about.name}</h2>
        <h3>{about.email}</h3>
        <p>{about.bio}</p>
      </div>
    </div>
  );

  return (
    <>
      {about ? loaded() : <h1>Loading...</h1>}
      <Projects />
      <Contact />
    </>
  );
}

export default About;

