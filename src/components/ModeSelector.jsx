import { useMode } from '../context/ModeContext';
import { useTranslation } from 'react-i18next';

import { AiOutlineCompass } from "react-icons/ai";
import { MdDirectionsBike } from "react-icons/md";
import { RiWalkFill } from "react-icons/ri";
import { FaBusSimple } from "react-icons/fa6";
import { PiBoat } from "react-icons/pi";


function ModeSelector() {
    const { t } = useTranslation();
    const { mode, setMode } = useMode();

    return (
        <div className="mode-card">
            <button className="button" onClick={() => setMode("bike")}><MdDirectionsBike />{t("modeSelector.bike")}</button>
            <button className="button" onClick={() => setMode("walk")}><RiWalkFill />{t("modeSelector.walk")}</button>
            <button className="button" onClick={() => setMode("explore")}><AiOutlineCompass />{t("modeSelector.explore")}</button>
            <button className="button" onClick={() => setMode("commute")}><FaBusSimple />{t("modeSelector.commute")}</button>
            <button className="button" onClick={() => setMode("swim")}><PiBoat />{t("modeSelector.boats")}</button>
        </div>
    );
}

export default ModeSelector;