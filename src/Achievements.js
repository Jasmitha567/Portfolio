function Achievements() {
  return (
    <section id="achievements" className="achievements section">

      <div className="section-heading">
        <p>MY WORK</p>
        <h2>Projects</h2>
      </div>

      <div className="project-grid">

        <div className="project-card">

          <span>2026</span>

          <h3>
            GetSetHire
          </h3>

          <h4>
            AI-Driven Job Readiness & Skill Gap Analysis Platform
          </h4>

          <p>
            Engineered a SQLite web application with multi-format resume
            ingestion, mapping skills across 8+ job roles and reducing
            skill-gap assessment from approximately 4 hours to under
            30 seconds.
          </p>

          <p>
            Integrated the Groq API to generate personalized learning
            recommendations by aligning candidate capabilities with
            target-role requirements.
          </p>

        </div>


        <div className="project-card">

          <span>2025</span>

          <h3>
            Temple Crowd Management System
          </h3>

          <p>
            Developed a digital crowd-management prototype integrating
            real-time monitoring and virtual queues to streamline visitor
            movement and mitigate congestion.
          </p>

          <p>
            Mapped journeys for 1,000+ visitors and designed modular
            interfaces within a 6-member team.
          </p>

        </div>

      </div>


      <div className="section-heading secondary-heading">
        <p>LEADERSHIP & INVOLVEMENT</p>
        <h2>Positions of Responsibility</h2>
      </div>

      <div className="responsibility-list">

        <div className="responsibility-item">
          <h3>Class Representative</h3>
          <p>
            Represented the class in academic and administrative matters,
            coordinating communication between students and faculty.
          </p>
        </div>

        <div className="responsibility-item">
          <h3>
            Student Coordinator — Philanto Photography Club & Creovate UI/UX Club
          </h3>
          <p>
            Coordinated club activities, workshops and student participation
            while supporting event planning and execution.
          </p>
        </div>

        <div className="responsibility-item">
          <h3>Publicity Co-Chair — EOH, Women-Led NGO</h3>
          <p>
            Spearheaded publicity for food, clothing and community outreach
            initiatives through NGO collaborations.
          </p>
        </div>

        <div className="responsibility-item">
          <h3>Joint Secretary — Environmental Club</h3>
          <p>
            Supported the planning and execution of environmental awareness
            initiatives and student activities.
          </p>
        </div>

      </div>


      <div className="section-heading secondary-heading">
        <p>HIGHLIGHTS</p>
        <h2>Achievements & Certifications</h2>
      </div>

      <div className="achievement-list">

        <div className="achievement-item">
          <h3>Smart India Hackathon</h3>
          <p>
            Qualified through the internal college round and advanced to
            the national submission stage.
          </p>
        </div>

        <div className="achievement-item">
          <h3>Top 10 — Samvicara Ideathon</h3>
          <p>
            Ranked among the top 10 teams/participants out of 100+
            participants.
          </p>
        </div>

        <div className="achievement-item">
          <h3>IBM SkillsBuild</h3>
          <p>
            Master the Art of Prompting
          </p>
        </div>

        <div className="achievement-item">
          <h3>TechXchange Dev Day</h3>
          <p>
            Open Source LLMs
          </p>
        </div>

        <div className="achievement-item">
          <h3>Deloitte Australia</h3>
          <p>
            Data Analytics Job Simulation — Forage
          </p>
        </div>

      </div>

    </section>
  );
}

export default Achievements;