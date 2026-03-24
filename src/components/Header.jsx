import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';
import LanguageSelector from './LanguageSelector';

export default function Header({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky z-50 w-full transition-all duration-500 flex justify-center ${isScrolled ? 'top-4 px-4' : 'top-0 px-0'}`}
    >
      <div
        className={`w-full flex items-center justify-between transition-all duration-500 ${
          isScrolled
            ? 'max-w-4xl bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl rounded-full border border-slate-200/50 dark:border-slate-700/50 px-6 py-3'
            : 'max-w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-lg shadow-sm rounded-none border border-transparent border-b-slate-200 dark:border-b-slate-800 px-4 lg:px-20 py-3'
        }`}
      >
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Lago<span className="text-primary">Lugano</span>Live
          </Link>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4 relative">
          <ThemeSwitch isDark={isDark} toggleTheme={toggleTheme} />
          <LanguageSelector />
          <Link to="/map" className="hidden sm:flex items-center justify-center rounded-full h-10 bg-primary px-6 text-white text-sm font-bold hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all">
            Open Map
          </Link>
        </div>
      </div>
    </header>
  );
}