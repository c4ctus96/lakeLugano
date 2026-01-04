import ThemeSwitch from './ThemeSwitch';
import LanguageSelector from './LanguageSelector';

export default function header() {
    return (
        <div id="header">
            <ThemeSwitch />
            <LanguageSelector />
        </div>
    );
}