import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/sections/Navbar';
import { Home } from './pages/Home';
import { LegalPage } from './pages/LegalPage';
import { ClubPage } from './pages/ClubPage';
import { TeamsPage } from './pages/TeamsPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-luynes-red selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/le-club" element={<ClubPage />} />
          <Route path="/equipes" element={<TeamsPage />} />
          <Route path="/actualites" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<LegalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
