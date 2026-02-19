import React, { useState, useContext } from "react";

const ModeContext = React.createContext();

export function ModeProvider({ children })
{
    const [mode, setMode] = useState("explore");

    return(
        <ModeContext.Provider value={{ mode, setMode }}>
            { children }
        </ModeContext.Provider>
    );
}

export function useMode() {
  return useContext(ModeContext);
}