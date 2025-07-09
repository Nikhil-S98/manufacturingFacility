import { useEffect, useRef, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import './App.css';
import Home from './pages/Home';
import ArtDesign from './pages/ArtDesign';
import UxUi from './pages/UxUi';
import Music from './pages/Music';
import About from './pages/About';
import PocketSession from './pages/PocketSession';
import Breadcrumb from './components/Breadcrumb';

function App() {
  const location = useLocation();
  const pageRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.set(pageRef.current, { opacity: 0, y: 40 });
    gsap.to(pageRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out'
    });
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="main-header">
        <button
          className="hamburger"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(prev => !prev)}
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
      
      <Breadcrumb />
      
      <main ref={pageRef} key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art-design" element={<ArtDesign />} />
          <Route path="/ux-ui" element={<UxUi />} />
          <Route path="/ux-ui/pocket-session" element={<PocketSession />} />
          <Route path="/music" element={<Music />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
