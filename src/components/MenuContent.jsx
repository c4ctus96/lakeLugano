import React, { useEffect, useState } from "react";
import { useFocus } from '../context/FocusContext.jsx';
import { useObjects } from '../context/ObjectsContext.jsx';
import { useImages } from '../context/ImagesContext.jsx';
import { useTranslation } from 'react-i18next';
import { GeoPoint } from "firebase/firestore";

import { difficultyColors } from "../constants/difficultyColors.js";

import { IoClose } from "react-icons/io5";
import { MdSignalCellular1Bar } from "react-icons/md";
import { MdSignalCellular2Bar } from "react-icons/md";
import { MdSignalCellular3Bar } from "react-icons/md";
import { MdSignalCellular4Bar } from "react-icons/md";
import { LuRuler } from "react-icons/lu";
import { FiNavigation2 } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";


export default function MenuContent() {
    const { setFocus, selectedTrail } = useFocus();
    const { t } = useTranslation();
    const { images } = useImages();
    

    return (
        <div id="menu-content">
            <button className="close-button" onClick={() => { setFocus(null) }}><IoClose /></button>
            <h2>{selectedTrail?.name}</h2>
            <div className="buttonsRow" id="menu-buttons">
                {selectedTrail?.coords instanceof GeoPoint &&
                <button onClick={() =>
                    {window.open(`https://www.google.com/maps/dir/?api=1&destination=${selectedTrail?.coords.latitude},${selectedTrail?.coords?.longitude}`)}
                } >
                    <FiNavigation2 />
                    {t("menu.buttons.navigation")}
                    <HiOutlineExternalLink />
                </button>}
            </div>
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
                        }}></span>
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
            {selectedTrail?.bikes && <div className="card">
                <div className="content">
                    <h2>Bikes available: {selectedTrail?.bikes?.filter(x => x !== 0).length}/{selectedTrail?.bikes?.length}</h2>
                    {selectedTrail?.bikes?.map((bike, i) => (
                    <div className="buttonsRow" key={`bike-${i}`}>
                        <p>bike {i+1}:</p>
                        <progress className="batery-bar" value={bike} max={100}>38%</progress>
                    </div>
                ))}
                </div>
            </div>}
            <p>{selectedTrail?.description}</p>
            {images.map(pic => <img src={pic.url}></img>)}
        </div>
    );

}