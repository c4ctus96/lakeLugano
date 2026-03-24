import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full">
      <div className="relative overflow-hidden shadow-2xl">
        <div className="relative flex min-h-[calc(100vh-64px)] flex-col items-center justify-center text-center p-6 sm:p-12 bg-cover bg-center bg-[url('/night.jpeg')] dark:bg-[url('/morning.jpeg')]">
          <div className="absolute inset-0 hero-overlay"></div>
          <div className="relative z-10 max-w-4xl space-y-8">
            <h1 className="hero-title text-white text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.1] tracking-tight drop-shadow-2xl">
              {t("landingPage.hero-section.title-1")} <br /><span className="text-primary inline-block mt-2">{t("landingPage.hero-section.title-2")}</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl lg:text-2xl text-slate-100/90 font-medium leading-relaxed">
              {t("landingPage.hero-section.description", "Discover the magic of the Swiss-Italian lake with unique trails, secret spots, and curated local guides.")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link to="/map" className="w-full sm:w-auto min-w-[200px] flex h-16 items-center justify-center rounded-full bg-primary px-10 text-white font-bold text-xl hover:scale-105 active:scale-95 shadow-xl shadow-primary/40 transition-all">
                {t("landingPage.hero-section.cta-explore", "Explore the map")}
              </Link>
              <button className="w-full sm:w-auto min-w-[200px] flex h-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/30 px-10 text-white font-bold text-xl hover:bg-white/20 active:scale-95 transition-all">
                {t("landingPage.hero-section.cta-culture", "Discover the culture")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
