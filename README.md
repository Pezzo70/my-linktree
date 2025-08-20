# My LinkTree 🌳

A beautiful, modern link-tree application built with React and TypeScript, similar to Linktree. Features a Spotify last played widget, expandable links, and a stunning gradient background.

## ✨ Features

- 🎵 **Spotify Integration** - Display your last played track in the top left corner
- 🔗 **Expandable Links** - Organize your links with expandable categories
- 📱 **Responsive Design** - Looks great on all devices
- 🎨 **Modern UI** - Beautiful gradient background with floating particles
- ⚡ **Fast & Lightweight** - Built with React and TypeScript
- 🚀 **GitHub Pages Ready** - Easy deployment to GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-linktree.git
   cd my-linktree
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see your link-tree!

## ⚙️ Configuration

### 1. Update Profile Information

Edit `src/config.ts` to customize your profile:

```typescript
export const profileConfig: ProfileConfig = {
  name: "@yourusername",
  bio: "Your bio here",
  avatar: "https://your-avatar-url.com"
};
```

### 2. Customize Links

Update the `linksConfig` array in `src/config.ts`:

```typescript
export const linksConfig: LinkConfig[] = [
  {
    id: '1',
    title: 'Portfolio',
    url: 'https://yourportfolio.com',
    icon: '🎨',
    category: 'main'
  },
  {
    id: '2',
    title: 'Projects',
    url: '#',
    icon: '🚀',
    category: 'expandable',
    isExpanded: false,
    subLinks: [
      {
        id: '2.1',
        title: 'Project Alpha',
        url: 'https://project-alpha.com',
        icon: '⭐',
        category: 'main'
      }
    ]
  }
];
```

### 3. Spotify Integration (Optional)

To enable real Spotify integration:

1. **Create a Spotify App**
   - Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Create a new app
   - Get your Client ID and Client Secret

2. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_SPOTIFY_CLIENT_ID=your_client_id
   REACT_APP_SPOTIFY_CLIENT_SECRET=your_client_secret
   REACT_APP_SPOTIFY_REFRESH_TOKEN=your_refresh_token
   REACT_APP_SPOTIFY_USER_ID=your_user_id
   ```

3. **Enable Spotify widget**
   ```typescript
   export const spotifyConfig: SpotifyConfig = {
     enabled: true,
     // ... your credentials
   };
   ```

## 🚀 Deployment to GitHub Pages

### 1. Update Repository Information

Edit `package.json` and `src/config.ts`:

```json
{
  "homepage": "https://yourusername.github.io/my-linktree"
}
```

```typescript
export const githubPagesConfig = {
  homepage: "https://yourusername.github.io/my-linktree",
  repository: "yourusername/my-linktree"
};
```

### 2. Deploy

```bash
npm run deploy
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Set source to "Deploy from a branch"
4. Select the `gh-pages` branch
5. Save

Your link-tree will be available at `https://yourusername.github.io/my-linktree`

## 🎨 Customization

### Colors and Styling

The main styling is in `src/App.css`. You can customize:

- **Background gradient**: Modify the `background` property in `.App`
- **Particle effects**: Adjust the `background-image` in `.App::after`
- **Animation speed**: Change the `animation` duration in `.App::after`

### Component Styling

Each component has its own CSS file:
- `src/components/SpotifyWidget.css` - Spotify widget styling
- `src/components/Profile.css` - Profile section styling
- `src/components/LinkTree.css` - Links styling

### Adding New Link Categories

1. Add a new link object to `linksConfig`
2. Set `category: 'expandable'`
3. Add `subLinks` array with your sub-links
4. The UI will automatically handle the expand/collapse functionality

## 📱 Mobile Responsiveness

The application is fully responsive and includes:
- Mobile-optimized layouts
- Touch-friendly interactions
- Responsive typography
- Optimized spacing for small screens

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **CSS3** - Styling with modern features
- **GitHub Pages** - Hosting
- **Spotify Web API** - Music integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Linktree](https://linktr.ee)
- Icons from [Emoji](https://emojipedia.org)
- Background patterns and animations
- Spotify Web API for music integration

---

Made with ❤️ by [Your Name]
