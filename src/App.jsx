import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 40
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: 40
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <>
      <Breadcrumb />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/art-design" element={<ArtDesign />} />
            <Route path="/ux-ui" element={<UxUi />} />
            <Route path="/ux-ui/pocket-session" element={<PocketSession />} />
            <Route path="/music" element={<Music />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </>
  );
}

export default App;
