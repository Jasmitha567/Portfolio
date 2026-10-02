function Skills() {

  const skills = [
    "Java",
    "Python",
    "C",
    "JavaScript",
    "HTML5",
    "CSS3",
    "React.js",
    "REST APIs",
    "SQL",
    "SQLite",
    "Git",
    "GitHub",
    "VS Code",
    "LaTeX"
  ];

  return (
    <section id="skills" className="skills section">

      <div className="section-heading">
        <p>WHAT I WORK WITH</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}

      </div>

      <div className="skill-details">

        <div>
          <h3>Core CS</h3>
          <p>
            Data Structures & Algorithms, Object-Oriented Programming,
            Database Management Systems, Operating Systems, Computer
            Organization & Architecture
          </p>
        </div>

        <div>
          <h3>Development Concepts</h3>
          <p>
            API Integration, Web Services, MVC, DOM, JSON and
            Responsive Design
          </p>
        </div>

        <div>
          <h3>Consulting & Delivery</h3>
          <p>
            Requirements Analysis, Solution Design, Stakeholder
            Communication, Project Planning and SDLC
          </p>
        </div>

      </div>

    </section>
  );
}

export default Skills;