import profileImage from './assets/profile.png';
function About() {
  return (
    <section id="about" className="about section">

      <div className="section-heading">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">

        <div className="about-text">

        <p className="about-intro">
          Hi! I'm Jasmitha — a Computer Science student who is usually
          somewhere between writing code, breaking code, and figuring out
          why the code broke in the first place. :)
        </p>

        <p>
          I'm currently pursuing my B.Tech in Computer Science and Engineering
          at G. Narayanamma Institute of Technology and Science, Hyderabad.
          I enjoy turning random ideas into actual projects and learning
          something new every time I build one.
        </p>

        <p>
          My playground includes Java, Python, C, JavaScript, React,
          SQL and APIs. I've also explored AI-powered applications,
          databases, web development and real-time systems through my
          projects.
        </p>

        <p>
          One thing I genuinely enjoy is taking a problem that looks
          complicated at first and slowly turning it into something that
          actually works. Sometimes that means planning everything out.
          Sometimes it means staring at an error message for 20 minutes.
          Both are apparently part of the process.
        </p>

        <p>
          Outside of writing code, I like being involved in student
          communities, coordinating events, exploring UI/UX ideas and
          working with people from different backgrounds.
        </p>

        <p className="about-ending">
          Currently learning. Constantly experimenting.
          Occasionally debugging at questionable hours. ☕
        </p>

      </div>

        <div className="about-image">
            <img
                src={profileImage}
                alt="Jasmitha"
            />
        </div>

      </div>

      <div className="goal-card">

        <p>MY APPROACH</p>

        <h3>
          Learn. Build. Experiment. Improve.
        </h3>

        <p>
          I like turning ideas into working projects and learning through
          hands-on experimentation.
        </p>

      </div>

    </section>
  );
}

export default About;