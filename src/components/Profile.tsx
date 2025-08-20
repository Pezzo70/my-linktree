import React from 'react';
import './Profile.css';
import { profileConfig } from '../config';
import { useLanguage } from '../contexts/LanguageContext';

const Profile: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="profile">
      <div className="profile-avatar">
        <img 
          src={profileConfig.avatar} 
          alt="Profile" 
        />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">{profileConfig.name}</h1>
        <p className="profile-bio">
          {t('bio.bio')}
        </p>
      </div>
    </div>
  );
};

export default Profile;
