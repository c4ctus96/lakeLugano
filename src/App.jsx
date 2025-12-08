// styles are loaded globally from src/main.jsx
import ModeSelector from './components/ModeSelector'
import Map from './components/Map'
import { ModeProvider } from './components/ModeContext'

function App() {
  return (
    <div className="mainPage">
      <ModeProvider>
        <ModeSelector />
        <Map />
      </ModeProvider>
    </div>
  )
}

export default App