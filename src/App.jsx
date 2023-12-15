import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/Contact";
import About from "./pages/Home";
import Projects from "./pages/Projects";

function App() {

  return (
    <div className="background-image">
      <Header />
    <div className = 'text-orange-200 flex content-around'>
    <Routes>
        <Route path="/contact" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<About />} />
      </Routes>
    </div>
      <Footer />
    </div>
  );
}

export default App;