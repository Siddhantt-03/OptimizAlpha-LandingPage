import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');

  // Dynamic Browser History mapping
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    window.history.pushState(null, '', path);
  };

  return (
    <div className="min-h-screen bg-navy text-pearl flex flex-col justify-between selection:bg-tealmint selection:text-navy">
      <ScrollProgress />
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />
      
      <main className="flex-grow">
        {currentPath === '/' && <Home onNavigate={navigateTo} />}
        {currentPath === '/about' && <About />}
        {currentPath === '/faq' && <Faq />}
        {currentPath === '/contact' && <Contact />}
      </main>

      <Footer currentPath={currentPath} onNavigate={navigateTo} />
    </div>
  );
}
