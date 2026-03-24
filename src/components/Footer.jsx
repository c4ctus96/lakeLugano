import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">
              Lago<span className="text-primary">Lugano</span>Live
            </span>
          </div>
          <div className="text-center md:text-right max-w-xl text-sm font-medium text-slate-500 dark:text-slate-400">
            {t("landingPage.footer.description", "Created as a functional prototype for the Rotary CittàDeiLaghiFuturo contest. This platform is 90% complete, fully interactive, and ready for deployment.")}
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} LagoLuganoLive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
