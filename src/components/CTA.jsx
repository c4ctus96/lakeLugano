import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
      <div className="rounded-xl bg-primary px-8 py-16 text-center text-white lg:px-16 lg:py-24">
        <h2 className="text-3xl font-bold md:text-5xl">
          {t("landingPage.cta.title", "Ready to Explore Lugano?")}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
          {t("landingPage.cta.description", "This web portal is already 90% complete and fully functional. Just need final touches and it will be ready to launch as soon as possible.")}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/map" className="flex min-w-[200px] items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-primary transition-all hover:scale-105 active:scale-95 shadow-xl">
            {t("landingPage.cta.cta-explore", "Explore the map")}
          </Link>
          <button className="flex min-w-[200px] items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 font-bold transition-all hover:scale-105 active:scale-95">
            {t("landingPage.cta.cta-culture", "Discover the culture")}
          </button>
        </div>
      </div>
    </section>
  );
}
