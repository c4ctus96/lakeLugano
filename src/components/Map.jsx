import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, TileLayer, Popup, Marker, useMap, Polyline } from 'react-leaflet'
import "leaflet-gpx";
import { db } from './Firebase';

function Map() {
  const position = [45.9863, 8.9700]

  const route = [
    [45.9863, 8.97],
    [45.9880, 8.975],
    [45.9900, 8.98],
    [45.9920, 8.985]
  ];


  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "trails"));
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
  }, []);

  const trailObject = trails.map(trail => trail.track);

  return (
    <div className="mainMap">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '100vh', width: '100%' }}
        zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/*<Marker position={position}>
          <Popup>
            Lake Lugano
          </Popup>
        </Marker>*/}

        <Polyline positions={route} color="blue" weight={4} />

        {trailObject.map((route, i) => (
          <>
            <Polyline key={`route ${i}`} positions={route.map(point => [point.latitude, point.longitude])}
              color="red"
              weight={4} />
            <Marker key={`marker ${i}`} position={[route[0].latitude, route[0].longitude]} />
          </>
        ))}

      </MapContainer>
    </div>
  )
}

export default Map;
