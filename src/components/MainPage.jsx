import ModeSelector from './ModeSelector'
import Map from './Map'
import Menu from './Menu'
import { useFocus } from '../context/FocusContext';

function MainPage() {
    const { focus } = useFocus();
    return (
        <div className="mainPage">
            { focus && <Menu />}
            <ModeSelector />
            <Map />
        </div>
    )
}

export default MainPage