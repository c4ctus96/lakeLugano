import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Explore from './Explore';
import Stats from './Stats';
import Features from './Features';
import CTA from './CTA';
import Footer from './Footer';

const LandingPage = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is already set
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      body.setAttribute('data-theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      body.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  return (
    <>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <Hero />
        <Explore />
        <Stats />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;