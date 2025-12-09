import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { MapContainer, TileLayer, Popup, Marker, useMap, Polyline } from 'react-leaflet'
import { db } from './Firebase';
import { useMode } from './ModeContext'

function TrailsOverlay() {
    const [trails, setTrails] = useState([]);
    const { mode } = useMode();

    useEffect(() => {
        const trailsModeQuery = query(
            collection(db, "trails"),
            where("tags", "array-contains", mode)
        );

        console.log("Map render mode: ", mode);
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(trailsModeQuery);
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setTrails(data);
            } catch (error) {
                console.error("Error fetching trails:", error);
            }
        };

        fetchData();
    }, [mode]);

    const trailObject = trails.map(trail => trail.track);

    return (
        <>
            {trailObject.map((route, i) => (
                <React.Fragment key={`group ${i}`}>
                    <Polyline key={`route ${i}`} positions={route.map(point => [point.latitude, point.longitude])}
                        color="red"
                        weight={4} />
                    <Marker key={`marker ${i}`} position={[route[0].latitude, route[0].longitude]} />
                </React.Fragment>
            ))}
        </>
    );
}

export default TrailsOverlay;