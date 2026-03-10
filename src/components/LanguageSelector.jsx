import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();

    const handleChange = (e) => {
        setLanguage(e.target.value);
    }

    return (
        <select value={language} onChange={handleChange} id="languageSelector">
            <option value="en">English</option>
            <option value="it">Italiano</option>
        </select>
    );
}