import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFocus } from '../context/FocusContext.jsx';
import { useObjects } from '../context/ObjectsContext.jsx';

import { IoClose } from "react-icons/io5";

export default function Menu() {
    const { t } = useTranslation();
    const { focus, setFocus } = useFocus();
    const { objects } = useObjects();

    const selectedTrail = objects.find(coords => coords.id === focus);

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