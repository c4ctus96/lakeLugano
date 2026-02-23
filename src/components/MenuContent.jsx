import React, { useEffect, useState } from "react";
import { useFocus } from '../context/FocusContext.jsx';
import { useObjects } from '../context/ObjectsContext.jsx';
import { useTranslation } from 'react-i18next';
import { IoClose } from "react-icons/io5";


export default function MenuContent() {
    const { focus, setFocus } = useFocus();
    const { objects } = useObjects();
    const { t } = useTranslation();

    const selectedTrail = objects.find(coords => coords.id === focus);

    return (
        <div id="menuContent">
            <button onClick={() => { setFocus(null) }}><IoClose /></button>
            <h2>{selectedTrail?.name}</h2>
            {selectedTrail?.lengthKm && <p>{t("menu.length")}: {selectedTrail?.lengthKm} km</p>}
            {selectedTrail?.difficulty && <p>{t("menu.difficulty")}: {t(`difficulty.${selectedTrail?.difficulty}`)}</p>}
            <p>{selectedTrail?.description}</p>
        </div>
    );

}