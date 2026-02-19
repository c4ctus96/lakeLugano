import React, { useEffect, useState } from "react";
import ReactDOMServer from 'react-dom/server';
import L from "leaflet";
import { Marker } from 'react-leaflet';
import { PiTrain } from "react-icons/pi";

export default function CustomMarker({ position, type, onClick }) {
    const icon = L.divIcon({
        html: ReactDOMServer.renderToString(
            <div className="marker">
                <PiTrain size={30} className="icon" />
            </div>
        ),
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });


    return (
        <Marker position={position} icon={icon} eventHandlers={{click: onClick}}/>
    );
}
