import { useFocus } from '../context/FocusContext.jsx';
import { useTranslation } from 'react-i18next';

import { GiBattery0 } from "react-icons/gi";
import { GiBattery25 } from "react-icons/gi";
import { GiBattery50 } from "react-icons/gi";
import { GiBattery75 } from "react-icons/gi";
import { GiBattery100 } from "react-icons/gi";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { MdElectricBike } from "react-icons/md";
import { PiBoat } from "react-icons/pi";

const icon = {
    "bikes": <MdElectricBike style={{ fontSize: '28px', color: 'black' }} />,
    "boats": <PiBoat style={{ fontSize: '28px', color: 'black' }} />
}

export default function RentalCard({ type })
{
    const { selectedTrail } = useFocus();
    const { t } = useTranslation();

    function batteryIcon(level) {
        if (level < 20) return (<GiBattery0 />)
        if (level >= 20 && level < 40) return (<GiBattery25 />)
        if (level >= 40 && level < 60) return (<GiBattery50 />)
        if (level >= 60 && level < 80) return (<GiBattery75 />)
        if (level >= 80) return (<GiBattery100 />)
    }

    const items = selectedTrail?.[type] || []

    return (
        <>
            {items.length>0 && <div className="card rentals-card" style={{}}>
                <div className="content" style={{ padding: '0', gap: '1.5rem' }}>
                    <h2>{t(`menu.rental-menu.${type}.title`)}</h2>
                    <p style={{ margin: '0px' }}>{t(`menu.rental-menu.${type}.availability`)} {items?.filter(x => x !== 0).length}/{items?.length}</p>
                    <div className="buttonsRow" style={{ display: 'flex', justifyContent: 'space-around', flex: '1', width: '100%', gap: 'auto' }}>
                        {items?.filter(x => x !== 0).map((chargeLevel, i) => (
                            <div key={`${type}-rental-${i}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                    <CircularProgress
                                        variant="determinate"
                                        value={chargeLevel}
                                        size={52}
                                        thickness={5}
                                        sx={{
                                            color: '#4caf50',
                                            '& .MuiCircularProgress-svg': {
                                                transformOrigin: 'center',
                                            }
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            top: 0, left: 0, bottom: 0, right: 0,
                                            position: 'absolute', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center',
                                        }}
                                    >
                                        {icon[type]}
                                    </Box>
                                </Box>
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0' }}>{batteryIcon(chargeLevel)}{chargeLevel}%</span>
                            </div>
                        ))}
                    </div>
                    <div className="buttonsRow" style={{ width: "100%" }}>
                        <button className="accent-btn" style={{ width: "100%" }} >{t(`menu.buttons.book-${type}`)}</button>
                    </div>
                </div>
            </div>}
        </>
    );
}