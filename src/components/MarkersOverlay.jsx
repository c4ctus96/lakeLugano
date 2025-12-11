import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { MapContainer, TileLayer, Popup, Marker, useMap, Polyline } from 'react-leaflet'
import { db } from './Firebase';
import { useMode } from './ModeContext'

function MarkersOverlay() {
    const [markers, setMarkers] = useState([]);
    const { mode } = useMode();

    useEffect(() => {
        const markersModeQuery = query(
            collection(db, "staticMarkers"),
            where("tags", "array-contains", mode)
        );

        console.log("Map render mode: ", mode);
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
                <React.Fragment key={`group ${i}`}>
                    <Marker key={`marker ${i}`} position={[marker.latitude, marker.longitude]} />
                </React.Fragment>
            ))}
        </>
    );
}

export default MarkersOverlay;