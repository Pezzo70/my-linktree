export interface ProfileConfig {
  name: string;
  bio: string;
  avatar: string;
}

export type IconType = 'emoji' | 'brand' | 'custom';

export interface LinkConfig {
  id: string;
  title: string;
  url: string;
  icon: string;
  iconType: IconType;
  category: 'main' | 'expandable';
  isExpanded?: boolean;
  subLinks?: LinkConfig[];
}

export interface SpotifyConfig {
  enabled: boolean;
  clientId?: string;
  clientSecret?: string;
  refreshToken?: string;
  userId?: string;
}

export const profileConfig: ProfileConfig = {
  name: "Gabriel Pezzo",
  bio: "Developer, creator, and music enthusiast. Building amazing things one line at a time.",
  avatar: "https://cdn3.vectorstock.com/i/1000x1000/61/72/nerd-face-emoji-clever-emoticon-with-glasses-vector-28926172.jpg"
};

export const linksConfig: LinkConfig[] = [
  {
    id: '1',
    title: 'Digital Garden',
    url: 'https://gabrielpezzo.dev',
    icon: '🎨',
    iconType: 'brand',
    category: 'expandable',
    subLinks: [
      {
        id: '1.1',
        title: 'Blog',
        url: 'https://gabrielpezzo.dev/#blog',
        icon: '✍️',
        iconType: 'emoji',
        category: 'main'
      },
      {
        id: '1.2',
        title: 'Notes',
        url: 'https://www.gabrielpezzo.dev/#note',
        icon: '📝',
        iconType: 'emoji',
        category: 'main'
      }
    ]
  },
  {
    id: '5',
    title: 'Curriculum Vitae',
    icon: '📄',
    iconType: 'emoji',
    category: 'expandable',
    url: "",
    subLinks: [
      {
        id: '5.1',
        title: 'Português 🇧🇷',
        url: '/cv_ptbr.pdf',
        icon: '📄',
        iconType: 'emoji',
        category: 'main'
      },
      {
        id: '5.2',
        title: 'English 🇺🇸',
        url: '/cv_en.pdf',
        icon: '📄',
        iconType: 'emoji',
        category: 'main'
      }
    ]
  },
  {
    id: '2',
    title: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
    iconType: 'brand',
    category: 'main'
  },
  {
    id: '3',
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin',
    iconType: 'brand',
    category: 'main'
  },
  {
    id: '4',
    title: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter',
    iconType: 'brand',
    category: 'main'
  }  
];

export const spotifyConfig: SpotifyConfig = {
  enabled: true,
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
  refreshToken: process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN,
  userId: process.env.REACT_APP_SPOTIFY_USER_ID
};


export const githubPagesConfig = {
  homepage: "https://pezzo70.github.io/my-linktree",
  repository: "pezzo70/my-linktree"
};
