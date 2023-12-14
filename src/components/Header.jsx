import { Link } from "react-router-dom";

function Header() {

  //an example of an inline style for the nav tag for an initial layout - later additions, or 

  // const navStyle = {
  //   display: "flex",
  //   justifyContent: "space-around",
  //   borderBottom: ".2rem solid black",
  //   padding: ".5rem",
  //   width: "90%",
  //   margin: "auto",
  // };

  return (
    <header className= "bg-stone-600 pt-6">
      <nav className ='flex justify-around'>
        <Link to="/">
          <p>HOME</p>
        </Link>
        <Link to="/about">
          <p>ABOUT</p>
        </Link>
        <Link to="/projects">
          <p>PROJECTS</p>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
