import { createContext, useContext, useState, useEffect } from 'react';
import { useMode } from './ModeContext';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../components/Firebase';

const ObjectsContext = createContext();

export function ObjectsProvider({ children }) {
    const [objects, setObjects] = useState([]);
    const { mode } = useMode();

    const typesByMode = {
        "walk": ["hikeTrail"],
        "bike": ["bikeTrail", "eBikeStation"],
        "explore": ["legacy", "restaraunt", "viewoint", "mountain", "church", "military"],
        "commute": ["busStation", "trainStation", "ferryPort"],
        "boats": ["boatStation", "boatRoute"]
    };

    const allowedTypes = typesByMode[mode] || [];

    useEffect(() => {
        if (!allowedTypes.length) {
            setObjects([]);
            return;
        }

        const objectsModeQuery = query(
            collection(db, "objects"),
            where("types", "array-contains-any", allowedTypes)
        );

        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(objectsModeQuery);
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setObjects(data);
            } catch (error) {
                console.error("Error fetching trails:", error);
            }
        };
        fetchData();
    }, [mode]);

    return (
        <ObjectsContext.Provider value={{ objects }}>
            {children}
        </ObjectsContext.Provider>
    );
}

export function useObjects() {
    return useContext(ObjectsContext);
}