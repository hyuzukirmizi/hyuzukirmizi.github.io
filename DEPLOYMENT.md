# Deployment Guide

## Step 1: Initialize Git Repository

Open a terminal in your project folder and run:

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named exactly: **Portfolio**
3. **Important**: Do NOT initialize with README, .gitignore, or license (we already have these)
4. Leave it as a public repository

## Step 3: Push to GitHub

Replace `hyuzukirmizi` with your GitHub username if different:

```bash
git remote add origin https://github.com/hyuzukirmizi/Portfolio.git
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. That's it! The workflow will automatically deploy

## Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once successful, your site will be live at:

   **https://hyuzukirmizi.github.io/Portfolio/**

## Step 6: Update Content

After initial deployment, when you make changes:

```bash
git add .
git commit -m "Update content"
git push
```

The site will automatically redeploy within 2-3 minutes.

## Important Notes

✅ **Portfolio Repository Exclusion**: The "Portfolio" repository is automatically excluded from showing in your Projects section (configured in `config.js`)

✅ **Custom Domain (Optional)**: If you want to use a custom domain:
   1. Add a file named `CNAME` in the `public` folder with your domain
   2. Configure DNS settings with your domain provider
   3. Update the `base` path in `vite.config.js` to `/`

✅ **Before Deploying**: Make sure to add your actual:
   - Profile photo (`public/Yuzukirmizi_Haluk.jpg`)
   - Resume PDF (`public/resume.pdf`)
   - Company logos (`public/companies/`)
   - Leadership photos (`public/leadership/`)
   - Certificate files (`public/files/`)

## Troubleshooting

**404 Error**: Make sure the repository name is exactly "Portfolio" (case-sensitive)

**Images Not Loading**: Verify all images are in the `public` folder with correct paths in `config.js`

**Projects Not Showing**: Check that your GitHub username in `config.js` matches your actual username
