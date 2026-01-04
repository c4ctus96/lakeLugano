import lakeSelfie from '../assets/lakeSelfie1.jpeg'
import Header from './Header.jsx';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ThemeSwitch from './ThemeSwitch';
import LanguageSelector from './LanguageSelector';

const LandingPage = () => {
    const { t } = useTranslation();
    return (
        <div className="page" id="landingPage">
            <Header />
            <div className="container">
                <div className="content" id="imageContainer">
                    {<img src={lakeSelfie} alt="Lake Selfie" />}
                </div>
                <div className="content">
                        <h1>{t("landingPage.section1.title")}</h1>
                        <p>{t("landingPage.section1.text")}</p>
                        <Link to="/map" className="cta" >{t("landingPage.section1.cta")}</Link>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;