import React, { useEffect, useState } from "react";
import ReactDOMServer from 'react-dom/server';
import L from "leaflet";
import { Marker } from 'react-leaflet';

import { PiTrain } from "react-icons/pi";
import { BiWalk } from "react-icons/bi";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { MdOutlineElectricBike } from "react-icons/md";
import { GrAnchor } from "react-icons/gr";
import { FaCircleDot } from "react-icons/fa6";

import { markerTypeColors } from '../constants/markerTypeColors';



export default function CustomMarker({ position, type, onClick }) {
    const iconSize = 28;

    const icons = {
        "hikeTrail": <BiWalk size={iconSize} className="icon" />,
        "bikeTrail": <MdOutlineDirectionsBike size={iconSize} className="icon" />,
        "eBikeStation": <MdOutlineElectricBike size={iconSize} className="icon" />,
        "boatStation": <GrAnchor size={iconSize} className="icon" />,
        "trainStation": <PiTrain size={iconSize} className="icon" />,
        "default": <FaCircleDot size={iconSize} className="icon" />
    }

    const icon = L.divIcon({
        html: ReactDOMServer.renderToString(
            <div className="marker" style={{backgroundColor: `${markerTypeColors[type] || markerTypeColors["default"]}`}}>
                {icons[type] || icons["default"]}
            </div>
        ),
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });


    return (
        <Marker position={position} icon={icon} eventHandlers={{click: onClick}}/>
    );
}
