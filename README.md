# Portfolio

A modern, responsive portfolio website for showcasing projects, experience, and leadership activities.

## Features

- ✨ **Dark/Light Mode Toggle**: Seamless theme switching with persistent preferences
- 🔄 **GitHub Integration**: Automatically syncs and displays your latest GitHub repositories
- 📌 **Project Pinning**: Pin your best projects to showcase them prominently
- 🗺️ **Roadmap Experience**: Timeline-style display of your professional journey
- 🏆 **Leadership Section**: Showcase extracurricular activities and achievements
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🚀 **Easy Deployment**: One-command deployment to GitHub Pages

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Your Information**
   Edit `src/config.js` with your personal details:
   - Personal information (name, title, summary, contact)
   - Social media links
   - GitHub username
   - Pinned repositories
   - Work experiences
   - Leadership roles

3. **Add Your Assets**
   Place the following files in the `public` folder:
   - `profile.jpg` - Your profile photo
   - `resume.pdf` - Your resume PDF
   - `companies/` - Company logos for experience section
   - `leadership/` - Images for leadership activities

4. **Update Repository Name**
   In `vite.config.js`, update the `base` to match your GitHub repository name:
   ```javascript
   base: '/your-repo-name/',
   ```

## Development

Run the development server:
```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

## Deployment to GitHub Pages

1. **Create a GitHub Repository**
   - Create a new repository (e.g., `Portfolio`)
   - Initialize git and push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/yourusername/Portfolio.git
     git push -u origin main
     ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages"
   - Select `gh-pages` branch as the source
   - Your site will be live at `https://yourusername.github.io/Portfolio/`

## Customization

### Adding More Experiences
Edit the `experiences` array in `src/config.js`:
```javascript
{
  id: 3,
  title: "Your Position",
  company: "Company Name",
  location: "City, State",
  period: "Jan 2024 - Present",
  description: "What you did...",
  technologies: ["Tech1", "Tech2"],
  logo: "/companies/logo.png"
}
```

### Adding Leadership Roles
Edit the `leadership` array in `src/config.js`:
```javascript
{
  id: 3,
  title: "Your Role",
  organization: "Organization Name",
  period: "Jan 2024 - Present",
  description: "What you did...",
  achievements: ["Achievement 1", "Achievement 2"],
  image: "/leadership/image.jpg"
}
```

### Pinning Projects
Add repository names to the `pinnedRepos` array in `src/config.js`:
```javascript
pinnedRepos: ["repo-name-1", "repo-name-2", "repo-name-3", "repo-name-4"]
```

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Lucide React (Icons)
- GitHub API

## License

MIT License - Feel free to use this for your own portfolio!
