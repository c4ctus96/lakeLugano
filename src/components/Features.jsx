import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-20">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {t("landingPage.features.title", "Interactive Map & Live Tracking")}
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            {t("landingPage.features.description", "Our interactive map is built for the modern explorer. Discover curated local gems, track live battery levels for all our E-bikes and Laxis, and know exactly when the next boat arrives.")}
          </p>
          <div className="mt-10 space-y-8">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined">battery_charging_full</span>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  {t("landingPage.features.battery-title", "Live Battery Tracking")}
                </h4>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                  {t("landingPage.features.battery-desc", "Monitor real-time battery levels for all our E-bikes and Laxi services to ensure you're always charged up for the journey.")}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  {t("landingPage.features.transit-title", "Live Transit Data")}
                </h4>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                  {t("landingPage.features.transit-desc", "Integrated GPS tracking for all Lugano Region buses, funiculars, and ferries with precise arrival times.")}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  {t("landingPage.features.curated-title", "Curated Lists")}
                </h4>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                  {t("landingPage.features.curated-desc", "Exclusive recommendations from local guides, from the best grottos to quiet swimming spots.")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/map.jpg')" }}>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900 md:block">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                <span className="material-symbols-outlined">battery_charging_full</span>
              </div>
              <div>
                <p className="text-sm font-bold">{t("landingPage.features.card-title", "Live Battery Tracking")}</p>
                <p className="text-xs text-slate-500">{t("landingPage.features.card-desc", "E-bikes & Laxi fully monitored")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
