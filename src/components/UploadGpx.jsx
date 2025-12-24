import { addDoc, collection, GeoPoint } from "firebase/firestore";
import { MapContainer, TileLayer, Popup, Marker, useMap, Polyline } from 'react-leaflet'
import { db } from './Firebase'
import { useState, useEffect } from "react"
import GPXParser from "gpxparser";

const position = [45.9863, 8.9700]

function UploadGpx() {
    const [trackData, setTrackData] = useState({
        name: "",
        difficulty: "",
        lengthKm: 0,
        tags: [],
        description: "",
        src: "",
        track: []
    });

    const pushTrack = async (trail) => {
        try {
            await addDoc(collection(db, "trails"), trail);
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
            difficulty: formData.get("difficulty"),
            tags: formData.getAll("tags"),
            track: parsedTrack
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
                color="red"
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
                {trackData.track?.length > 0 && (<FitBoundsPolyline
                    positions={trackData.track.map(point => ([point.latitude, point.longitude]))}
                />)}
            </MapContainer>

            <div className="card" id="uploadTools">
                <h1>Aggiungi percorso</h1>
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
                            <select name="difficulty" required>
                                <option value="">--Seleziona--</option>
                                <option value="easy">Facile</option>
                                <option value="moderate">Media</option>
                                <option value="hard">Difficile</option>
                                <option value="expert">Esperto</option>
                            </select>
                        </label>
                    </div>

                    <div className="buttonsRow">
                        <a>Modalità:</a>
                        <label>
                            <input type="checkbox" name="tags" value="walk" />
                            Walk
                        </label>
                        <label>
                            <input type="checkbox" name="tags" value="bike" />
                            Bike
                        </label>
                        <label>
                            <input type="checkbox" name="tags" value="swim" />
                            Swim
                        </label>
                    </div>
                    <div className="buttonsRow">
                        <button onClick={() => console.log(trackData)} type="submit">Applica</button>
                        <button onClick={() => pushTrack(trackData)} disabled={trackData.track?.length === 0} >Pubblica</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UploadGpx;