import React from 'react';
import './App.css';
import SpotifyWidget from './components/SpotifyWidget';
import LinkTree from './components/LinkTree';
import Profile from './components/Profile';
import { GoatCounterProvider } from './components/GoatCounterProvider';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <LanguageProvider>
      <GoatCounterProvider>
        <div className="App">
          <LanguageSwitcher />
          <div className="container">
            <SpotifyWidget />
            <Profile />
            <LinkTree />
          </div>
        </div>
      </GoatCounterProvider>
    </LanguageProvider>
  );
}

export default App;
