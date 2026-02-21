import { createContext, useContext, useState, useEffect } from 'react';
import { useMode } from './ModeContext';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../components/Firebase';

const TrailsContext = createContext();

export function TrailsProvider({ children }) {
    const [trails, setTrails] = useState([]);
    const { mode } = useMode();

    const typesByMode = {
        "walk": ["hikeTrail"],
        "bike": ["bikeTrail", "eBikeStation"],
        "explore": ["legacy", "restaraunt", "viewoint"],
        "commute": ["busStation", "trainStation", "ferryPort"],
        "boats": ["boatStation"]
    };

    const allowedTypes = typesByMode[mode] || [];

    useEffect(() => {
        if (!allowedTypes.length) {
            setTrails([]);
            return;
        }

        const trailsModeQuery = query(
            collection(db, "trails"),
            where("types", "array-contains-any", allowedTypes)
        );

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

    return (
        <TrailsContext.Provider value={{ trails }}>
            {children}
        </TrailsContext.Provider>
    );
}

export function useTrails() {
    return useContext(TrailsContext);
}