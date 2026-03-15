import React, { useEffect, useState } from "react";
import { useFocus } from '../context/FocusContext.jsx';
import { useObjects } from '../context/ObjectsContext.jsx';
import { useTranslation } from 'react-i18next';

import { difficultyColors } from "../constants/difficultyColors.js";

import { IoClose } from "react-icons/io5";
import { MdSignalCellular1Bar } from "react-icons/md";
import { MdSignalCellular2Bar } from "react-icons/md";
import { MdSignalCellular3Bar } from "react-icons/md";
import { MdSignalCellular4Bar } from "react-icons/md";
import { LuRuler } from "react-icons/lu";


export default function MenuContent() {
    const { focus, setFocus } = useFocus();
    const { objects } = useObjects();
    const { t } = useTranslation();

    const selectedTrail = objects.find(coords => coords.id === focus);
    console.log(selectedTrail?.difficulty);
    console.log(difficultyColors[selectedTrail?.difficulty]);
    return (
        <div id="menuContent">
            <button onClick={() => { setFocus(null) }}><IoClose /></button>
            <h2>{selectedTrail?.name}</h2>
            <div id="tags">
                {(selectedTrail?.difficulty !== undefined) &&
                    <div className="bubble">
                        <span style={{
                            height: '8px',
                            width: '8px',
                            backgroundColor: difficultyColors[selectedTrail?.difficulty] || 'gray',
                            borderRadius: '50%',
                            display: 'inline-block',
                            marginRight: '8px'
                        }}>
                        </span>
                        {t(`difficulty.${selectedTrail?.difficulty}`)}
                    </div>
                }
                {selectedTrail?.lengthKm &&
                    <div className="bubble">
                        <LuRuler style={{ marginRight: '8px' }} />
                        {selectedTrail.lengthKm} km
                    </div>
                }
            </div>
            <p>{selectedTrail?.description}</p>
        </div>
    );

}