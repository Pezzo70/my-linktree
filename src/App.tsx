import React from 'react';
import './App.css';
import SpotifyWidget from './components/SpotifyWidget';
import LinkTree from './components/LinkTree';
import Profile from './components/Profile';
import { GoatCounterProvider } from './components/GoatCounterProvider';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
