import lakeSelfie from '../assets/lakeSelfie1.jpeg'
import { useTranslation } from 'react-i18next';

const LandingPage = () => {
    const { t } = useTranslation();
    return (
        <div className="page" id="landingPage">
            <div id="header">
                <button id="themeToggle"></button>
            </div>
            <div className="container">
                <div className="content" id="imageContainer">
                    {<img src={lakeSelfie} alt="Lake Selfie" />}
                </div>
                <div className="content">
                        <h1>{t("landingPage.section1.title")}</h1>
                        <p>{t("landingPage.section1.text")}</p>
                        <button className="cta" >{t("landingPage.section1.cta")}</button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;