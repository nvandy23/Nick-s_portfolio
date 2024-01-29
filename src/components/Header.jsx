
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  return (
    <header className="bg-stone-600 pt-6">
      <nav className="flex justify-around">
        <ScrollLink to="Contact" smooth={true} duration={500}>
          <p>CONTACT ME</p>
        </ScrollLink>
        <ScrollLink to="About" smooth={true} duration={500}>
          <p>HOME</p>
        </ScrollLink>
        <ScrollLink to="Projects" smooth={true} duration={500}>
          <p>PROJECTS</p>
        </ScrollLink>
      </nav>
    </header>
  );
}

export default Header;
