import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { supportedLanguages, SupportedLanguage } from '../i18n/translations';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languageConfig: Record<SupportedLanguage, { flag: string; label: string }> = {
    en: { flag: '🇺🇸', label: 'English' },
    ptbr: { flag: '🇧🇷', label: 'Português' }
  };

  const handleLanguageChange = (newLanguage: SupportedLanguage) => {
    if (newLanguage !== language) {
      setLanguage(newLanguage);
    }
  };

  return (
    <div className="language-switcher">
      {supportedLanguages.map((lang) => (
        <button
          key={lang}
          className={`language-button ${language === lang ? 'active' : ''}`}
          onClick={() => handleLanguageChange(lang)}
          aria-label={`Switch to ${languageConfig[lang].label}`}
          title={languageConfig[lang].label}
        >
          <span className="flag">{languageConfig[lang].flag}</span>
          <span className="label">{languageConfig[lang].label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
