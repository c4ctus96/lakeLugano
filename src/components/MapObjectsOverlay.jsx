import React, { useEffect, useState } from "react";
import { Polyline } from 'react-leaflet'
import { useFocus } from '../context/FocusContext';
import CustomMarker from "./CustomMarker";
import { useObjects } from '../context/ObjectsContext';
import { useMode } from '../context/ModeContext';
import { difficultyColors } from '../constants/difficultyColors';
import { GeoPoint } from "firebase/firestore";

export default function MapObjectsOverlay() {
    const { setFocus } = useFocus();
    const { objects } = useObjects();
    const { mode } = useMode();

    const preferredTypes = {
        "walk": ["hiketrail"],
        "bike": ["bikeTrail", "eBikeStation"],
        "explore": ["mountain"],
        "commute": [],
        "boats": ["boatStation", "boatRoute"]
    }

    return objects.map((object, i) => {
        const selectedType =
            preferredTypes[mode]?.find(t => object.types.includes(t)) ||
            object.types[0];
        if (Array.isArray(object.coords)) {
            return (
                <React.Fragment key={`group ${i}`}>
                    <Polyline key={`route ${i}-${object.difficulty}`} positions={object.coords.map(point => [point.latitude, point.longitude])}
                        color={difficultyColors[object.difficulty] || "blue"}
                        weight={6} />
                    <CustomMarker key={`marker ${i}`}
                        position={[object.coords[Math.floor(object.coords.length/2)].latitude, object.coords[Math.floor(object.coords.length/2)].longitude]}
                        onClick={() => {
                            setFocus(object.id);
                        }}
                        type={selectedType} />
                </React.Fragment>
            )
        } else if (object.coords instanceof GeoPoint)
        {
            return (
                <CustomMarker key={`marker ${i}`}
                    position={[object.coords.latitude, object.coords.longitude]}
                    onClick={() => {
                        setFocus(object.id);
                    }}
                    type={selectedType} />
            );
        } else return null;
    });

}