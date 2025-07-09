import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ArtDesign from './pages/ArtDesign';
import UxUi from './pages/UxUi';
import Music from './pages/Music';
import About from './pages/About';
import { gsap } from 'gsap';
import logo8bit from './assets/logo_8_bit.png';

function App() {
  const location = useLocation();
  const pageRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out' }
    );
    setMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  return (
    <>
      <header className="main-header">
        <button
          className="hamburger"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={menuOpen ? 'open' : ''}>
          <Link to="/">home</Link>
          <Link to="/art-design">art/design</Link>
          <Link to="/ux-ui">ux/ui</Link>
          <Link to="/music">music</Link>
          <Link to="/about">about</Link>
        </nav>
      </header>
      <div ref={pageRef} key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art-design" element={<ArtDesign />} />
          <Route path="/ux-ui" element={<UxUi />} />
          <Route path="/music" element={<Music />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
