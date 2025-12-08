import { useMode } from './ModeContext';


import { AiOutlineCompass } from "react-icons/ai";
import { MdDirectionsBike } from "react-icons/md";
import { RiWalkFill } from "react-icons/ri";
import { GrSwim } from "react-icons/gr";
import { FaBusSimple } from "react-icons/fa6";


function ModeSelector() {
    
    const { mode, setMode } = useMode();
    console.log(mode);

    return (
        <div className="mode-card">
            <button className="button" onClick={() => setMode("bike")}><MdDirectionsBike /> bike</button>
            <button className="button" onClick={() => setMode("walk")}><RiWalkFill /> walk</button>
            <button className="button" onClick={() => setMode("explore")}><AiOutlineCompass /> explore</button>
            <button className="button" onClick={() => setMode("commute")}><FaBusSimple /> commute</button>
            <button className="button" onClick={() => setMode("swim")}><GrSwim /> swim</button>
            {/*<pre>{JSON.stringify(trails, null, 2)}</pre>
            <ul>
                {trails.map(trail => (
                    <li key={trail.id}>
                        {trail.name} – {trail.difficulty}
                    </li>
                ))}
            </ul>
            */}
        </div>
    );
}

export default ModeSelector;