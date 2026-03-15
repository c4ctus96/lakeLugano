import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Popup, Marker, useMap, Polyline } from 'react-leaflet'
import "leaflet-gpx";
import MapObjectsOverlay from './MapObjectsOverlay';


export default function Map() {
  const position = [45.9863, 8.9700]

  return (
    <div className="mainMap">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '100vh', width: '100%' }}
        zoomControl={false}
        maxZoom={21}
        zoomSnap={0.25}
        zoomDelta={0.25}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxNativeZoom={19}
          maxZoom={21}
        />
        <MapObjectsOverlay />
      </MapContainer>
    </div>
  )
}
