# Deployment Guide for Portfolio Website

This guide provides instructions for deploying your portfolio website from Replit to GitHub and other hosting platforms.

## Deploying to GitHub

There are two main approaches to deploy to GitHub from Replit:

### Method 1: Manual Export and Upload

1. **Export files from Replit**:
   - Click on the "..." menu next to your project name
   - Select "Download as zip"
   - Extract the zip file on your local computer

2. **Upload to GitHub**:
   - Create a new repository on GitHub if you haven't already
   - Initialize Git in the extracted folder:
     ```bash
     git init
     git add .
     git commit -m "Initial commit of portfolio website"
     git branch -M main
     git remote add origin https://github.com/batrapulkit/Portfolio.git
     git push -u origin main
     ```

### Method 2: Using GitHub Sync (Alternative)

If Method 1 doesn't work, you can use this approach:

1. **Deploy your site on Replit**:
   - Click the "Deploy" button in your Replit project
   - Obtain your Replit deployment URL

2. **Clone your GitHub repository locally**:
   ```bash
   git clone https://github.com/batrapulkit/Portfolio.git
   cd Portfolio
   ```

3. **Download files from Replit URL**:
   - Use a tool like `wget` to download all files from your Replit deployment
   - Add these files to your local repository
   - Push changes to GitHub:
     ```bash
     git add .
     git commit -m "Add portfolio files from Replit"
     git push
     ```

## Hosting Options

Once your code is on GitHub, you have several hosting options:

### GitHub Pages

1. Go to your GitHub repository
2. Navigate to Settings > Pages
3. Set the source to your main branch
4. Your site will be published at `https://batrapulkit.github.io/Portfolio/`

### Netlify

1. Sign up for a Netlify account
2. Click "New site from Git"
3. Select your GitHub repository
4. Configure build settings if needed
5. Deploy!

### Vercel

1. Sign up for a Vercel account
2. Import your GitHub repository
3. Configure project settings
4. Deploy the site

## Troubleshooting

If you encounter issues with Git operations in Replit:
- Try using the Replit "Version Control" tab instead of command line
- Consider creating a new repository with the files downloaded from Replit
- GitHub Desktop is a user-friendly alternative to command-line Git

## Getting Help

If you need assistance with deployment, you can:
- Check GitHub documentation
- Visit Replit documentation
- Ask for help in developer communities like Stack Overflow