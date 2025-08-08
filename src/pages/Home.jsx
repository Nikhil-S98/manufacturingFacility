import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-container">
    
    <nav className="main-navigation">
      <Link to="/art-design">art/design</Link>
      <Link to="/ux-ui">ux/ui</Link>
      <Link to="/music">music</Link>
      <Link to="/about">about</Link>
    </nav>

    <h1>welcome.</h1>
    <p>This is the manufacturing facility - a space for creative exploration across art, design, UX/UI, and music.</p>
    <p>Navigate through the sections above to explore different areas of work and thought.</p>
  </div>
);

export default Home; 