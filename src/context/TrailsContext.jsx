import { createContext, useContext, useState, useEffect } from 'react';
import { useMode } from './ModeContext';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../components/Firebase';

const TrailsContext = createContext();

export function TrailsProvider({ children }) {
    const [trails, setTrails] = useState([]);
    const { mode } = useMode();



    useEffect(() => {
        const trailsModeQuery = query(
            collection(db, "trails"),
            where("tags", "array-contains", mode)
        );

        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(trailsModeQuery);
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                console.log("Fetched trails:", data);
                
                setTrails(data);
            } catch (error) {
                console.error("Error fetching trails:", error);
            }
        };

        console.log("TrailsProvider mode:", mode);
        

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