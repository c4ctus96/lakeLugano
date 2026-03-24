import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    { value: '50+', labelKey: 'stats-trails' },
    { value: '14', labelKey: 'stats-stations' },
    { value: '3+', labelKey: 'stats-poi' },
    { value: 'Real-Time', labelKey: 'stats-transit' },
  ];

  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-white/80 uppercase tracking-widest">
                {t(`landingPage.stats.${stat.labelKey}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
