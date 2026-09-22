import './App.css';
import React from 'react';

import Navbar from './Navbar';
import Hero from './Home';
import About from './About';
import Skills from './Skills';
import Achievements from './Achievements';
import Query from './Query';
import Footer from './Footer';

function App() {
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