import './App.css';
import React, { useEffect } from 'react';

import Navbar from './Navbar';
import Hero from './Home';
import About from './About';
import Skills from './Skills';
import Achievements from './Achievements';
import Query from './Query';
import Footer from './Footer';

function App() {
  useEffect(() => {
    const els = document.querySelectorAll(
      '.section-heading, .about-text, .about-image, .education-card, .goal-card, .skill-card, .skill-details > div, .project-card, .responsibility-item, .achievement-item, .query-container'
    );
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div className="App">

      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Achievements />

        <Query />

      </main>

      <Footer />

    </div>
  );
}

export default App;