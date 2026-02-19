import React, { useState, useContext } from "react";

const FocusContext = React.createContext();

export function FocusProvider({ children }) {
    const [focus, setFocus] = useState(null);

    return (
        <FocusContext.Provider value={{ focus, setFocus }}>
            {children}
        </FocusContext.Provider>
    );
}

export function useFocus() {
    return useContext(FocusContext);
}