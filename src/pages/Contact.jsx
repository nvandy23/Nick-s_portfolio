import '../App.css'

function Contact(props) {
    return (

        <div className = "App inline-flex  ">
       <label htmlFor="textInput">Your email:</label>
      <input
        type="text"
        id="textInput"
        placeholder="Enter email..."
      />
       <div className="footer-container">
      <div className="links-container">
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
        href="https://docs.google.com/document/d/e/2PACX-1vR0I1dUm59OedHx2HAJYh4tiG4nahh4cXnuPY20h0vt_SrPtUrMV86wawJlU3Ergifn5ipZuhmVRxtT/pub"
        target="_blank"
        rel="noopener noreferrer"
        >
       <button>Resume</button>
        </a> 
      </div>
    </div>
    </div>
    )
  
   
  }
  
  export default Contact