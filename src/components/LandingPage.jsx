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
                    <h1>{t("landingPage.hero-section.title-1")}</h1>
                    <h1>{t("landingPage.hero-section.title-2")}</h1>
                </div>
                <div className="bottom-gradient"></div>
            </div>
            <div className="page" id="cards-section">
                <div className="container">
                    <h1>{t("landingPage.mode-cards.title")}</h1>
                    <div className="grid-container">
                        <div className="card">
                            <RiWalkFill size={iconSize} />
                            <div className="content">
                                <h2>{t("landingPage.mode-cards.walk.title")}</h2>
                                <h3>{t("landingPage.mode-cards.walk.text")}</h3>
                            </div>
                        </div>
                        <div className="card">
                            <MdDirectionsBike size={iconSize}/>
                            <div className="content">
                                <h2>{t("landingPage.mode-cards.bike.title")}</h2>
                                <h3>{t("landingPage.mode-cards.bike.text")}</h3>
                            </div>
                        </div>
                        <div className="card">
                            <AiOutlineCompass size={iconSize} />
                            <div className="content">
                                <h2>{t("landingPage.mode-cards.explore.title")}</h2>
                                <h3>{t("landingPage.mode-cards.explore.text")}</h3>
                            </div>
                        </div>
                        <div className="card">
                            <FaBusSimple size={iconSize} />
                            <div className="content">
                                <h2>{t("landingPage.mode-cards.commute.title")}</h2>
                                <h3>{t("landingPage.mode-cards.commute.text")}</h3>
                            </div>
                        </div>
                        <div className="card">
                            <PiBoat size={iconSize} />
                            <div className="content">
                                <h2>{t("landingPage.mode-cards.boats.title")}</h2>
                                <h3>{t("landingPage.mode-cards.boats.text")}</h3>
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
                        <h1>{t("landingPage.compatibility-section.title")}</h1>
                        <p>{t("landingPage.compatibility-section.text")}</p>
                        <Link to="/map" className="cta" >{t("landingPage.compatibility-section.cta")}</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;