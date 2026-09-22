import instagram from './assets/instagram.jpg';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import pinterest from './assets/pinterest.png';
//hey ai, whats the error?
//The error is that the image files are not being imported correctly. The file paths for the images should be relative to the current file, so you need to make sure that the paths are correct. For example, if the images are in a folder called "assets" in the same directory as this file, you should use './assets/instagram.jpg' instead of 'instagram.jpg'.


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

        <a href="https://www.instagram.com/jasmi_5607" target="_blank" rel="noopener noreferrer">
            <img src={instagram}
            alt="Instagram"
            className="social-icon"
          />
        </a>
        
        <a href ="https://www.linkedin.com/in/jasmitha567/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin}
            alt="LinkedIn"
            className="social-icon"
          />
        </a>

        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={github} 
            alt="GitHub"
            className="social-icon"
          />
        </a>

        <a href="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer">
          <img src={pinterest}
            alt="Pinterest"
            className="social-icon"
          />
        </a>

      </div>

    </nav>
  );
}

export default Navbar;