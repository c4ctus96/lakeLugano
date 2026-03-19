import {useFocus} from './FocusContext.jsx';
import React, { useState, useContext, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from '../components/Firebase';

const ImagesContext = React.createContext();

export function ImagesProvider({ children })
{
    const [ images, setImages ] = useState([]);
    const { selectedTrail } = useFocus();

    useEffect(() => {
        if (!selectedTrail) {
            setImages([]);
            return;
        }

        const imagesQuery = query(
            collection(db, `objects/${selectedTrail?.id}/img`),
        )

        const fetchImages = async () => {
            try {
                const querySnapshot = await getDocs(imagesQuery);
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setImages(data);
                console.log("Done fetching images", data);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        }

        fetchImages();

        console.log(images)

    }, [selectedTrail])

    return (
        <ImagesContext.Provider value={{ images, setImages }}>
            {children}
        </ImagesContext.Provider>
    );
}

export function useImages() {
    return useContext(ImagesContext);
}