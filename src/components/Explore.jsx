import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Explore() {
  const { t } = useTranslation();

  const options = [
    { icon: 'footprint', titleKey: 'explore-walk', descKey: 'explore-walk-desc' },
    { icon: 'directions_bike', titleKey: 'explore-bike', descKey: 'explore-bike-desc' },
    { icon: 'explore', titleKey: 'explore-explore', descKey: 'explore-explore-desc' },
    { icon: 'directions_bus', titleKey: 'explore-commute', descKey: 'explore-commute-desc' },
    { icon: 'directions_boat', titleKey: 'explore-boats', descKey: 'explore-boats-desc' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          {t("landingPage.explore-section.title", "Explore the Region")}
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          {t("landingPage.explore-section.subtitle", "Tailored experiences for every type of traveler.")}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {options.map((opt, idx) => (
          <div key={idx} className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">{opt.icon}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold">{t(`landingPage.explore-section.${opt.titleKey}`)}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{t(`landingPage.explore-section.${opt.descKey}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
