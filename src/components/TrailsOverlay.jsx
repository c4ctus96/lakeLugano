import React, { useEffect, useState } from "react";
import { Polyline } from 'react-leaflet'
import { useFocus } from '../context/FocusContext';
import CustomMarker from "./CustomMarker";
import { useTrails } from '../context/TrailsContext';
import { useMode } from '../context/ModeContext';

function TrailsOverlay() {
    const { setFocus } = useFocus();
    const { trails } = useTrails();
    const { mode } = useMode();

    const difficultyColors = [
        "green", "yellow", "red", "black"
    ]

    const preferredTypes = {
        "walk": ["hikeTrail"],
        "bike": ["bikeTrail", "eBikeStation"],
        "explore": [],
        "commute": [],
        "boats": ["boatStation"]
    }

    console.log("TrailsOverlay trails:", trails);


    return trails.map((route, i) => {
        const selectedType =
            preferredTypes[mode].find(t => route.types.includes(t)) ||
            route.types[0];
            console.log(`Route ${i} selected type:`, selectedType);

        return (
            <React.Fragment key={`group ${i}`}>
                <Polyline
                    key={`route ${i}`}
                    positions={route.track.map(point => [point.latitude, point.longitude])}
                    color={difficultyColors[route.difficulty] || "blue"}
                    weight={4}
                />

                <CustomMarker
                    key={`marker ${i}`}
                    position={[route.track[0].latitude, route.track[0].longitude]}
                    type={selectedType}
                    onClick={() => {
                        setFocus(route.id);
                        console.log(`Marker ${i} clicked`);
                    }}
                />
            </React.Fragment>
        );
    })
}

export default TrailsOverlay;