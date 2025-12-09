import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, TileLayer, Popup, Marker, useMap, Polyline } from 'react-leaflet'
import "leaflet-gpx";
import TrailsOverlay from './TrailsOverlay';


function Map() {
  const position = [45.9863, 8.9700]
  

  

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
        <TrailsOverlay />
      </MapContainer>
    </div>
  )
}

export default Map;
