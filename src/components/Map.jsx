import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, TileLayer, Popup, Marker, useMap, Polyline } from 'react-leaflet'
import "leaflet-gpx";
import TrailsOverlay from './TrailsOverlay';
import MarkersOverlay from './MarkersOverlay';
import { useMode } from './ModeContext';


function Map() {
  const position = [45.9863, 8.9700]
  const { mode } = useMode();

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
        {(mode === "bike" || mode === "walk") && <TrailsOverlay />}
        <MarkersOverlay />
      </MapContainer>
    </div>
  )
}

export default Map;
