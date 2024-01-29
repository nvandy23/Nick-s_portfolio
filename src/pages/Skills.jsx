function Skill() {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Skills:</h1>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <SkillItem src=".././src/assets/HTML5.png" alt="HTML5" title="HTML5" />
          <SkillItem src=".././src/assets/CSS3.png" alt="CSS3" title="CSS3" />
          <SkillItem src=".././src/assets/JavaScript-logo.png" alt="JavaScript" title="JavaScript" />
          <SkillItem src=".././src/assets/ejs.logo.png" alt="EJS" title="EJS" />
          <SkillItem src=".././src/assets/express.png" alt="Express" title="Express" />
          <SkillItem src=".././src/assets/node.png" alt="Node.js" title="Node.js" />
          <SkillItem src=".././src/assets/MongoDB-Logo.jpeg" alt="MongoDB" title="MongoDB" />
          <SkillItem src=".././src/assets/react-1-logo-png.png" alt="React" title="React" />
          <SkillItem src=".././src/assets/python-logo.png" alt="Python" title="Python" />
          <SkillItem src=".././src/assets/django-logo-negative.png" alt="Django" title="Django" />
          <SkillItem src=".././src/assets/rest_api.jpeg" alt="REST API" title="REST API" />
        </div>
      </div>
    );
  }
  
  function SkillItem({ src, alt, title }) {
    return (
      <div className="flex flex-col items-center mb-8">
        <img className="w-24 h-24 mb-4" src={src} alt={alt} />
        <p className="text-center">{title}</p>
      </div>
    );
  }
  
  export default Skill;
  