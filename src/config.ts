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
  bio: "Software Engineer. Building amazing things one line at a time.",
  avatar: "/my-linktree/profile.jpg"
};

export const linksConfig: LinkConfig[] = [
  {
    id: '1',
    title: 'Digital Garden',
    url: 'https://www.gabrielpezzo.dev',
    icon: '🪴',
    iconType: 'brand',
    category: 'expandable',
    subLinks: [
      
      {
        id: '1.3',
        title: 'Home',
        url: 'https://www.gabrielpezzo.dev',
        icon: '🏠',
        iconType: 'emoji',
        category: 'main'
      },
      {
        id: '1.1',
        title: 'Posts',
        url: 'https://www.gabrielpezzo.dev/posts/',
        icon: '✍️',
        iconType: 'emoji',
        category: 'main'
      },
      {
        id: '1.2',
        title: 'Notes',
        url: 'https://www.gabrielpezzo.dev/notes/',
        icon: '📝',
        iconType: 'emoji',
        category: 'main'
      },
    ]
  },
  {
    id: '6',
    title: 'Curriculum Vitae',
    icon: '📄',
    iconType: 'emoji',
    category: 'expandable',
    url: "",
    subLinks: [
      {
        id: '6.1',
        title: 'Português',
        url: '/my-linktree/cvpezzo_ptbr.pdf',
        icon: '🇧🇷',
        iconType: 'emoji',
        category: 'main'
      },
      {
        id: '6.2',
        title: 'English',
        url: '/my-linktree/cvpezzo_en.pdf',
        icon: '🇺🇸',
        iconType: 'emoji',
        category: 'main'
      }
    ]
  },
  {
    id: '2',
    title: 'GitHub',
    url: 'https://github.com/Pezzo70',
    icon: 'github',
    iconType: 'brand',
    category: 'main'
  },
  {
    id: '3',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gabriel-pezzo-501694222/',
    icon: 'linkedin',
    iconType: 'brand',
    category: 'main'
  },  
  {
    id: '4',
    title: 'WhatsApp',
    url: 'https://wa.me/5513997194204',
    icon: 'whatsapp',
    iconType: 'brand',
    category: 'main'
  },  
  {
    id: '5',
    title: 'Email',
    url: 'mailto:gabriel.pezzo@gmail.com',
    icon: '📧',
    iconType: 'emoji',
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
