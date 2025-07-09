import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-container">
    <h1>Welcome to My Creative Portfolio</h1>
    <p>
      Explore my work and passions across art, design, user experience, and music. This site is a showcase of my creative journey and the projects that inspire me.
    </p>
    <div className="home-sections">
      <section className="home-section">
        <h2>Art & Design</h2>
        <p>Discover my visual art, illustrations, and design projects. From digital paintings to graphic design, see how I bring ideas to life visually.</p>
        <Link to="/art-design" className="home-link">Explore Art/Design →</Link>
      </section>
      <section className="home-section">
        <h2>UX/UI</h2>
        <p>View my user experience and interface design work. I focus on creating intuitive, beautiful, and accessible digital experiences.</p>
        <Link to="/ux-ui" className="home-link">See UX/UI Work →</Link>
      </section>
      <section className="home-section">
        <h2>Music</h2>
        <p>Listen to my music compositions and audio projects. I blend technology and creativity to produce unique soundscapes and tracks.</p>
        <Link to="/music" className="home-link">Listen to Music →</Link>
      </section>
      <section className="home-section">
        <h2>About</h2>
        <p>Learn more about me, my background, and what drives my creative pursuits.</p>
        <Link to="/about" className="home-link">About Me →</Link>
      </section>
    </div>
  </div>
);

export default Home; 