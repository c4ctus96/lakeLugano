import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from './context/ThemeContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { FocusProvider } from './context/FocusContext.jsx'
import { ModeProvider } from './context/ModeContext.jsx'
import { ObjectsProvider } from './context/ObjectsContext.jsx'
import { ImagesProvider } from './context/ImagesContext.jsx'

//import './index.css'
import './styles.css'
import App from './App.jsx'
import './components/i18next.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_USE_SUBPATH ? "/lakeLugano" : "/"}>
      <ThemeProvider>
        <LanguageProvider>
          <ModeProvider>
            <ObjectsProvider>
              <FocusProvider>
                <ImagesProvider>
                  <App />
                </ImagesProvider>
              </FocusProvider>
            </ObjectsProvider>
          </ModeProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
