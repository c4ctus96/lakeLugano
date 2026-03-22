import { addDoc, collection, GeoPoint } from "firebase/firestore";
import { MapContainer, TileLayer, Popup, Marker, useMap, Polyline } from 'react-leaflet'
import { db } from './Firebase'
import { useState, useEffect } from "react"
import GPXParser from "gpxparser";
import { difficultyColors } from '../constants/difficultyColors';

const position = [45.9863, 8.9700]

function UploadGpx() {
    const [trackData, setTrackData] = useState({
        name: "",
        difficulty: 0,
        lengthKm: 0,
        types: [],
        description: "",
        src: "",
        coords: []
    });

    const pushTrack = async (trail) => {
        try {
            await addDoc(collection(db, "objects"), trail);
        } catch (error) {
            console.error("Upload failed: ", error);
        }
    }

    const handleSubmit = async (e) => {
        const formData = new FormData(e.target);
        const parser = new GPXParser();
        const fileInput = e.target.querySelector('input[type="file"]');
        const text = await fileInput.files[0].text();
        parser.parse(text);
        const parsedTrack = parser.tracks[0].points.map(
            p => new GeoPoint(p.lat, p.lon)
        );
        const newTrack = {
            name: formData.get("name"),
            description: formData.get("description"),
            src: formData.get("src"),
            lengthKm: parseFloat(formData.get("length")),
            ...(formData.get("difficulty") !== "" && { difficulty: Number(formData.get("difficulty")) }),
            types: formData.getAll("types"),
            coords: parsedTrack
        };
        setTrackData(newTrack);
    };

    const FitBoundsPolyline = ({ positions }) => {
        const map = useMap();
        useEffect(() => {
            if (!positions || positions.length === 0) return;
            map.fitBounds(positions)
        }, [positions, map])
        return (
            <Polyline
                positions={positions}
                key="preview"
                weight={5}
                color={difficultyColors[trackData.difficulty] || "blue"}
            />
        );
    }

    return (
        <div className="page" id="gpxUploadPage">
            <MapContainer
                center={position}
                zoom={13}
                style={{ height: '100vh', width: '100%' }}
                zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {trackData.coords?.length > 0 && (<FitBoundsPolyline
                    positions={trackData.coords.map(point => ([point.latitude, point.longitude]))}
                />)}
            </MapContainer>

            <div className="card" id="uploadTools">
                <h2>Aggiungi percorso</h2>
                <form onSubmit={
                    (e) => {
                        e.preventDefault();
                        if (e.target.checkValidity()) { // form is valid 
                            handleSubmit(e);
                        } else { // show browser validation messages 
                            e.target.reportValidity();
                        }
                    }
                }>
                    <input type="file" accept=".gpx" required></input>

                    <div className="buttonsRow">
                        <a>Nome percorso:</a>
                        <input
                            required
                            type="text"
                            name="name"
                        />
                    </div>

                    <div className="buttonsRow">
                        <a>Descrizione:</a>
                        <textarea
                            id="description"
                            name="description"
                            style={{ resize: "none", width: 205 + "px", height: 100 + "px" }}
                        >
                        </textarea>
                    </div>

                    <div className="buttonsRow">
                        <a>Fonte (URL):</a>
                        <input
                            type="url"
                            name="src"
                            id="src"
                        />
                    </div>

                    <div className="buttonsRow">
                        <a>Lunghezza (km):</a>
                        <input
                            required
                            type="number"
                            name="length"
                            id="length"
                            step="any"
                            min="0.01"
                            inputMode="decimal"
                            pattern="^[0-9]*[.]?[0-9]+$"
                        />
                    </div>
                    <div className="buttonsRow">
                        <a>Difficoltà:</a>
                        <label>
                            <select name="difficulty">
                                <option value="">--Seleziona--</option>
                                <option value="0">Facile</option>
                                <option value="1">Media</option>
                                <option value="2">Difficile</option>
                                <option value="3">Esperto</option>
                            </select>
                        </label>
                    </div>

                    <div className="buttonsRow">
                        <a>Tipo:</a>
                        <label>
                            <input type="checkbox" name="types" value="hikeTrail" />
                            Percorso pedonale
                        </label>
                        <label>
                            <input type="checkbox" name="types" value="bikeTrail" />
                            Percorso in bici
                        </label>
                        <label>
                            <input type="checkbox" name="types" value="boatRoute" />
                            Percorso laxi
                        </label>
                    </div>
                    <div className="buttonsRow">
                        <button onClick={() => console.log(trackData)} type="submit">Applica</button>
                        <button onClick={() => {pushTrack(trackData); alert("Percorso caricato!")}} disabled={trackData.coords?.length === 0} >Pubblica</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UploadGpx;