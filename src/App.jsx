import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ArtDesign from './pages/ArtDesign';
import UxUi from './pages/UxUi';
import Music from './pages/Music';
import About from './pages/About';
import { gsap } from 'gsap';

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
      <header>
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
          <Link to="/">Art/Design</Link>
          <Link to="/ux-ui">UX/UI</Link>
          <Link to="/music">Music</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <div ref={pageRef} key={location.pathname}>
        <Routes>
          <Route path="/" element={<ArtDesign />} />
          <Route path="/ux-ui" element={<UxUi />} />
          <Route path="/music" element={<Music />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
