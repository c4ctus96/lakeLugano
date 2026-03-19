import React, { useState, useContext } from "react";
import { useObjects } from './ObjectsContext.jsx';

const FocusContext = React.createContext();

export function FocusProvider({ children }) {
    const [focus, setFocus] = useState(null);
    const { objects } = useObjects();
    const selectedTrail = objects?.find(coords => coords.id === focus);

    return (
        <FocusContext.Provider value={{ focus, setFocus, selectedTrail }}>
            {children}
        </FocusContext.Provider>
    );
}

export function useFocus() {
    return useContext(FocusContext);
}