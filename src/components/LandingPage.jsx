import lakeSelfie from '../assets/lakeSelfie1.jpeg'
import phone_laptop_example from '../assets/phone_laptop_example_4-3.png'
import Header from './Header.jsx';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { AiOutlineCompass } from "react-icons/ai";
import { MdDirectionsBike } from "react-icons/md";
import { RiWalkFill } from "react-icons/ri";
import { FaBusSimple } from "react-icons/fa6";
import { PiBoat } from "react-icons/pi";

import ThemeSwitch from './ThemeSwitch';
import LanguageSelector from './LanguageSelector';

const LandingPage = () => {
    const { t } = useTranslation();
    const iconSize = "2rem"
    return (
        <>
            <Header />
            <div className="page" id="hero-section">
                <div className="container">
                    <h1>Explore the Lugano Lake</h1>
                    <h1>Like Never Before</h1>
                </div>
                <div className="bottom-gradient"></div>
            </div>
            <div className="page" id="cards-section">
                <div className="container">
                    <h1>Find what you need, quickly</h1>
                    <div className="grid-container">
                        <div className="card">
                            <RiWalkFill size={iconSize} />
                            <div className="content">
                                <h2>Walk</h2>
                                <h3>Discover the beautiful hike trails of the Lugano lake.</h3>
                            </div>
                        </div>
                        <div className="card">
                            <MdDirectionsBike size={iconSize}/>
                            <div className="content">
                                <h2>Bike</h2>
                                <h3>Explore the lake on bike</h3>
                            </div>
                        </div>
                        <div className="card">
                            <AiOutlineCompass size={iconSize} />
                            <div className="content">
                                <h2>Explore</h2>
                                <h3>Discover hidden gems around Lugano lake.</h3>
                            </div>
                        </div>
                        <div className="card">
                            <FaBusSimple size={iconSize} />
                            <div className="content">
                                <h2>Commute</h2>
                                <h3>Find public transportation options.</h3>
                            </div>
                        </div>
                        <div className="card">
                            <PiBoat size={iconSize} />
                            <div className="content">
                                <h2>Boats</h2>
                                <h3>Explore the lake by water.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page" id="landingPage">
                <div className="container">
                    <div className="content" id="imageContainer">
                        {<img src={phone_laptop_example} alt="Lake Selfie" />}
                    </div>
                    <div className="content">
                        <h1>{t("landingPage.section1.title")}</h1>
                        <p>{t("landingPage.section1.text")}</p>
                        <Link to="/map" className="cta" >{t("landingPage.section1.cta")}</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;