import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useTranslation } from 'react-i18next';
import { useFocus } from '../context/FocusContext.jsx';
import { useTrails } from '../context/TrailsContext.jsx';

import { IoClose } from "react-icons/io5";

export default function Menu() {
    const { language, setLanguage } = useLanguage();
    const { t } = useTranslation();
    const { focus, setFocus } = useFocus();
    const { trails } = useTrails();

    const selectedTrail = trails.find(trail => trail.id === focus);

    return (
        <div id="menu">
            <button onClick={() => {setFocus(null)}}><IoClose /></button>
            <h2>{selectedTrail?.name}</h2>
            <p>{t("menu.length")}: {selectedTrail?.lengthKm} km</p>
            <p>{t("menu.difficulty")}: {t(`difficulty.${selectedTrail?.difficulty}`)}</p>
            <p>{selectedTrail?.description}</p>
        </div>
    );
}