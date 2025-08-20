import React, { useState, useEffect } from 'react';
import './SpotifyWidget.css';
import { spotifyConfig } from '../config';

interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  url: string;
}

const SpotifyWidget: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<SpotifyTrack | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!spotifyConfig.enabled) {
      setIsLoading(false);
      return;
    }

    const mockTrack: SpotifyTrack = {
      name: "Feel Good Inc.",
      artist: "Gorillaz",
      album: "Demon Days",
      albumArt: "https://vignette1.wikia.nocookie.net/kong/images/e/e5/Gorillaz_-_Demon_Days.png/revision/latest?cb=20150527101924",
      url: "https://open.spotify.com/track/0d28khcov6AiegSCpG5TuT"
    };

    setTimeout(() => {
      setCurrentTrack(mockTrack);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (!spotifyConfig.enabled) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="spotify-widget">
        <div className="spotify-loading">
          <div className="spotify-spinner"></div>
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  if (!currentTrack) {
    return null;
  }

  return (
    <div className="spotify-widget">
      <div className="spotify-content">
        <div className="spotify-album-art">
          <img src={currentTrack.albumArt} alt={currentTrack.album} />
        </div>
        <div className="spotify-info">
          <div className="spotify-track-name">{currentTrack.name}</div>
          <div className="spotify-artist">{currentTrack.artist}</div>
          <div className="spotify-album">{currentTrack.album}</div>
        </div>
        <div className="spotify-play-button">
          <a href={currentTrack.url} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpotifyWidget;
