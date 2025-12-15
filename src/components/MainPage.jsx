import ModeSelector from './ModeSelector'
import Map from './Map'
import { ModeProvider } from './ModeContext'

function MainPage() {
    return (
        <div className="mainPage">
            <ModeProvider>
                <ModeSelector />
                <Map />
            </ModeProvider>
        </div>
    )
}

export default MainPage