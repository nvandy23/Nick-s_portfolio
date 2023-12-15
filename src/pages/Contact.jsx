import '../App.css'

function Contact(props) {
    return (

        <div className = "App text-center ">
       <label htmlFor="textInput">Your email:</label>
      <input
        type="text"
        id="textInput"
        placeholder="Enter email..."
      />
      <p>You typed:</p>
       <div className="footer-container">
      <p className="footer-text">Contact Me</p>
      <div className="contact-logos-container">
        <a
          href="https://github.com/nvandy23"
          rel="noopener noreferrer"
          target="_blank"
        >
     <button>Github</button>
        </a>
        <a
          href="https://www.linkedin.com/in/richard-vanderipe/"
          rel="noopener noreferrer"
          target="_blank"
        >
         <button>
          Linkedin
         </button>
        </a>
        <a
        href="mailto:nvandy2373@gmail.com"
        >
       <button>Email</button>
        </a> 
        <a
        href="https://docs.google.com/document/d/1FVOBc9EDGWx9oIHxmBLtVrNn0CrjSGz6bL58MOQXFPA/edit"
        >
       <button>Resume</button>
        </a> 
      </div>
    </div>
    </div>
    )
  
   
  }
  
  export default Contact