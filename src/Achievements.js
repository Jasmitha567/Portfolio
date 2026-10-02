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
            Reduced skill-gap assessment from ~4 hours to under 30 seconds
            by engineering a SQLite web application with multi-format resume
            ingestion that maps skills across 8+ job roles.
          </p>

          <p>
            Defined requirements for 5 technical roles by analyzing 15 resumes
            and ~320 job postings, and delivered personalized learning paths
            by integrating the Groq API using REST-based API integration.
          </p>

        </div>


        <div className="project-card">

          <span>2025</span>

          <h3>
            Temple Crowd Management System
          </h3>

          <p>
            Reduced congestion and streamlined visitor flow by developing a
            prototype with real-time monitoring and virtual queues.
          </p>

          <p>
            Structured workflows for 1,000+ visitors by mapping journeys and
            designing modular interfaces with a 6-member team.
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
            Aligned students and faculty on academic and administrative
            matters, kept schedules on track and resolved student concerns
            through timely academic updates.
          </p>
        </div>

        <div className="responsibility-item">
          <h3>
            Student Coordinator — Philanto Photography Club & Creovate UI/UX Club
          </h3>
          <p>
            Drove student participation in workshops and events, delivering
            creative and technical initiatives across two clubs.
          </p>
        </div>

        <div className="responsibility-item">
          <h3>Publicity Co-Chair — EOH, Women-Led NGO</h3>
          <p>
            Grew awareness of food, clothing and community outreach drives,
            and created meaningful experiences for autistic children and
            old age home residents.
          </p>
        </div>

        <div className="responsibility-item">
          <h3>Joint Secretary — Environmental Club</h3>
          <p>
            Delivered environmental awareness initiatives and increased
            student participation by coordinating event logistics.
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