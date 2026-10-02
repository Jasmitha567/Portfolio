// import instagram from './assets/instagram.jpg';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
// import pinterest from './assets/pinterest.png';



function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        J
      </div>

      <div className="nav-links">

        <a href="#home">
          Home
        </a>

        <a href="#about">
          About
        </a>

        <a href="#skills">
          Skills
        </a>

        <a href="#achievements">
          Work
        </a>

        <a href="#contact">
          Contact & Queries
        </a>

      </div>

      <div className="social-links">

        {/* <a href="https://www.instagram.com/jasmi_5607" target="_blank" rel="noopener noreferrer">
            <img src={instagram}
            alt="Instagram"
            className="social-icon"
          />
        </a> */}
        
        <a href ="https://www.linkedin.com/in/jasmitha567/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin}
            alt="LinkedIn"
            className="social-icon"
          />
        </a>

        <a href="https://github.com/Jasmitha567" target="_blank" rel="noopener noreferrer">
          <img src={github} 
            alt="GitHub"
            className="social-icon"
          />
        </a>

        {/* <a href="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer">
          <img src={pinterest}
            alt="Pinterest"
            className="social-icon"
          />
        </a> */}

      </div>

    </nav>
  );
}

export default Navbar;