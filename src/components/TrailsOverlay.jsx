import React, { useEffect, useState } from "react";
import { Polyline } from 'react-leaflet'
import { useFocus } from '../context/FocusContext';
import CustomMarker from "./CustomMarker";
import { useTrails } from '../context/TrailsContext';

function TrailsOverlay() {
    const { setFocus } = useFocus();
    const { trails } = useTrails();

    console.log("TrailsOverlay trails:", trails);

    return (
        <>
            {trails.map((route, i) => (
                <React.Fragment key={`group ${i}`}>
                    <Polyline key={`route ${i}`} positions={route.track.map(point => [point.latitude, point.longitude])}
                        color="red"
                        weight={4} />
                    <CustomMarker key={`marker ${i}`} position={[route.track[0].latitude, route.track[0].longitude]}
                    onClick={() => {
                        setFocus(route.id);
                        console.log(`Marker ${i} clicked`);
                    }}/>
                </React.Fragment>
            ))}
        </>
    );
}

export default TrailsOverlay;