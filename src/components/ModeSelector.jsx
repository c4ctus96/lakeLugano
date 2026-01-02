import { useMode } from './ModeContext';
import { useTranslation } from 'react-i18next';

import { AiOutlineCompass } from "react-icons/ai";
import { MdDirectionsBike } from "react-icons/md";
import { RiWalkFill } from "react-icons/ri";
import { GrSwim } from "react-icons/gr";
import { FaBusSimple } from "react-icons/fa6";


function ModeSelector() {
    const { t } = useTranslation();
    const { mode, setMode } = useMode();
    console.log(mode);

    return (
        <div className="mode-card">
            <button className="button" onClick={() => setMode("bike")}><MdDirectionsBike />{t("modeSelector.bike")}</button>
            <button className="button" onClick={() => setMode("walk")}><RiWalkFill />{t("modeSelector.walk")}</button>
            <button className="button" onClick={() => setMode("explore")}><AiOutlineCompass />{t("modeSelector.explore")}</button>
            <button className="button" onClick={() => setMode("commute")}><FaBusSimple />{t("modeSelector.commute")}</button>
            <button className="button" onClick={() => setMode("swim")}><GrSwim />{t("modeSelector.swim")}</button>
        </div>
    );
}

export default ModeSelector;