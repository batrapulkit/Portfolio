#!/bin/bash

# Portfolio Website GitHub Deployment Script
# Run this script on your local machine after downloading files from Replit

echo "========================================"
echo "  Portfolio Website Deployment Helper   "
echo "========================================"
echo ""
echo "This script will help you deploy your portfolio to GitHub."
echo "Make sure you have Git installed and configured."
echo ""

# Ask for GitHub information
read -p "Enter your GitHub username: " username
read -p "Enter your repository name (e.g., Portfolio): " repo_name

echo ""
echo "Preparing to upload to github.com/$username/$repo_name..."
echo ""

# Initialize Git repository
echo "Step 1: Initializing Git repository..."
git init

# Add all files
echo "Step 2: Adding files to Git..."
git add .

# Commit changes
echo "Step 3: Committing files..."
git commit -m "Initial commit of portfolio website"

# Set main branch
echo "Step 4: Setting up main branch..."
git branch -M main

# Add remote repository
echo "Step 5: Adding remote repository..."
git remote add origin https://github.com/$username/$repo_name.git

# Push to GitHub
echo "Step 6: Pushing to GitHub..."
git push -u origin main

# Check result
if [ $? -eq 0 ]; then
  echo ""
  echo "✅ SUCCESS! Your portfolio has been pushed to GitHub."
  echo "Your portfolio is now available at: https://github.com/$username/$repo_name"
  echo ""
  echo "Next steps:"
  echo "1. Set up GitHub Pages in your repository settings"
  echo "2. Your site will be available at https://$username.github.io/$repo_name/"
else
  echo ""
  echo "❌ ERROR: There was a problem pushing to GitHub."
  echo ""
  echo "Troubleshooting tips:"
  echo "- Check your internet connection"
  echo "- Verify you have the correct permissions for the repository"
  echo "- Make sure Git is installed and properly configured"
  echo "- Try using a personal access token instead of password"
  echo "- Check the GitHub documentation for more help"
fi