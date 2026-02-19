import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server"
import { collection, getDocs, query, where } from "firebase/firestore";
import { MapContainer, TileLayer, Popup, Marker, useMap, Polyline } from 'react-leaflet'
import L from "leaflet";
import { db } from './Firebase';
import { useMode } from '../context/ModeContext';
import CustomMarker from "./CustomMarker";
import { PiTrain } from "react-icons/pi";
import { MdElectricBike } from "react-icons/md";


function MarkersOverlay() {
    const [markers, setMarkers] = useState([]);
    const { mode } = useMode();

    const icon = L.divIcon({
        html: ReactDOMServer.renderToString(
            <div className="marker">
                <PiTrain size={30} className="icon" />
            </div>
        ),
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });

    useEffect(() => {
        const markersModeQuery = query(
            collection(db, "staticMarkers"),
            where("tags", "array-contains", mode)
        );

        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(markersModeQuery);
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setMarkers(data);
            } catch (error) {
                console.error("Error fetching trails:", error);
            }
        };

        fetchData();
    }, [mode]);

    const pointObject = markers.map(point => point.position);

    return (
        <>
            {pointObject.map((marker, i) => (
                <CustomMarker
                    key={i}
                    position={[marker.latitude, marker.longitude]}
                />
            ))}
        </>
    );
}

export default MarkersOverlay;