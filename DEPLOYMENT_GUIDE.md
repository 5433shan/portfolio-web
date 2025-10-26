# 🚀 Deployment Guide - GitHub Pages

Your portfolio is ready to deploy! Follow these steps to get it live.

## Prerequisites

- ✅ GitHub account
- ✅ Portfolio content personalized
- ✅ Build tested locally (`npm run build` works)

## Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. **Repository name**: `portfolio-web` (or your preferred name)
3. **Visibility**: Public (required for free GitHub Pages)
4. **Important**: Do NOT initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### Step 2: Update Vite Configuration (If Needed)

**Current configuration**: `base: '/portfolio-web/'`

✅ **If your repo is named `portfolio-web`**: No changes needed!

❌ **If you used a different repo name**: Update `vite.config.js`:

```js
export default defineConfig({
  base: '/your-repo-name/',  // Change this to match your repo name
  // ... rest of config
})
```

Then rebuild:
```bash
npm run build
```

### Step 3: Push Your Code to GitHub

In your terminal, run these commands:

```bash
# Navigate to your project directory (if not already there)
cd /Users/shan5433/Desktop/portfolio/portfolio-web

# Check current branch
git branch

# If you're on 001-portfolio-website, that's fine!
# The GitHub Action will deploy from this branch

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/5433shan/portfolio-web.git

# Push your code
git push -u origin 001-portfolio-website

# Optional: If you want to create a main branch and push to it
# git checkout -b main
# git push -u origin main
```

**Note**: The deployment workflow is set to run on both `main` and `001-portfolio-website` branches.

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/5433shan/portfolio-web`
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - (This enables the automated deployment we configured)
5. Click **Save** if prompted

### Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 1-3 minutes)
4. ✅ Green checkmark = Successful deployment!
5. ❌ Red X = Deployment failed (see troubleshooting below)

### Step 6: Visit Your Live Site! 🎉

Your portfolio will be live at:

**https://5433shan.github.io/portfolio-web/**

(Replace with your actual GitHub username and repo name if different)

## 🔧 Optional: Set Up Web3Forms Secret (For Contact Form)

When you implement the contact form in Phase 5, you'll need to add the Web3Forms API key:

1. Get your access key from https://web3forms.com
2. Go to your GitHub repo → Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `WEB3FORMS_KEY`
5. Value: Your Web3Forms access key
6. Click "Add secret"

**Note**: This is only needed when you add the contact form feature.

## 📱 Test Your Live Site

Once deployed, test these features:

- ✅ Homepage loads with your name "Pin Shan Chuang"
- ✅ Profile section displays correctly
- ✅ 4 project cards appear
- ✅ Click a project to view details
- ✅ Navigation menu works (desktop and mobile)
- ✅ Social links (GitHub, LinkedIn, Email) work correctly
- ✅ Footer displays your copyright
- ✅ Mobile responsive design works

## 🔄 Making Updates

After your initial deployment, any time you want to update your portfolio:

```bash
# Make your changes to files
# Then commit and push:

git add .
git commit -m "Update portfolio content"
git push

# GitHub Actions will automatically rebuild and deploy!
```

Your site will update within 2-3 minutes.

## 🐛 Troubleshooting

### Deployment Failed (Red X)

1. Click on the failed workflow in the Actions tab
2. Check the error message
3. Common issues:
   - **npm ci failed**: Delete `package-lock.json` and run `npm install` locally, commit and push
   - **Build failed**: Run `npm run build` locally to see the error
   - **Permission denied**: Check that GitHub Pages is enabled in Settings

### Site Not Loading (404 Error)

1. **Check the base path**: Make sure `vite.config.js` has the correct repo name:
   ```js
   base: '/portfolio-web/',  // Must match your repo name!
   ```

2. **Rebuild and push**:
   ```bash
   npm run build
   git add .
   git commit -m "Fix base path"
   git push
   ```

3. **Verify Pages settings**: Go to Settings → Pages, make sure Source is "GitHub Actions"

### Images Not Showing

1. **Check image paths**: All image paths should start with `/` (e.g., `/images/profile.svg`)
2. **Check images exist**: Make sure images are in the `public/` folder
3. **Case sensitivity**: Filenames are case-sensitive on GitHub Pages

### Social Links Not Working

1. **Verify URLs**: Check `src/data/profile.json` has correct URLs
2. **Test locally**: Run `npm run dev` and test links
3. **Check for typos**: Common issue is missing `https://` prefix

## 📊 Monitor Your Deployment

**View deployment history**:
- Go to Actions tab to see all deployments
- Each push triggers a new deployment
- Failed deployments won't affect your live site

**Check deployment status**:
- Green checkmark = Live and working
- Yellow circle = Currently deploying
- Red X = Failed (previous version still live)

## 🎨 Custom Domain (Optional)

Want to use your own domain instead of GitHub Pages URL?

1. Buy a domain (e.g., from Namecheap, Google Domains)
2. Go to repository Settings → Pages
3. Add your custom domain
4. Update your domain's DNS settings (follow GitHub's instructions)
5. Update `vite.config.js`:
   ```js
   base: '/',  // For custom domain, use root
   ```

## 🔒 HTTPS

GitHub Pages automatically provides HTTPS for your site. Your URL will be:
- ✅ `https://5433shan.github.io/portfolio-web/`

## 📈 Next Steps After Deployment

1. ✅ Share your portfolio URL on LinkedIn
2. ✅ Add the URL to your GitHub profile bio
3. ✅ Include it in your resume
4. ✅ Test on different devices (mobile, tablet, desktop)
5. ✅ Ask friends/colleagues for feedback
6. 📸 Take screenshots for your records

## 🚀 Quick Reference Commands

```bash
# Test locally before pushing
npm run build
npm run preview

# Push changes to deploy
git add .
git commit -m "Your commit message"
git push

# View deployment logs
# Go to GitHub → Actions tab
```

## 🎯 Success Checklist

Before considering deployment complete:

- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled (Source: GitHub Actions)
- [ ] Workflow completed successfully (green checkmark)
- [ ] Site loads at https://5433shan.github.io/portfolio-web/
- [ ] Profile section shows "Pin Shan Chuang"
- [ ] All 4 projects load correctly
- [ ] Navigation works on mobile and desktop
- [ ] Social links work (GitHub, LinkedIn, Email)
- [ ] Site is mobile-responsive

## ❓ Need Help?

If you encounter issues:

1. Check the Actions tab for error messages
2. Run `npm run build` locally to test
3. Verify all paths in `vite.config.js` and `src/data/profile.json`
4. Check that images exist in `public/` folder

---

**Your portfolio is ready for the world! 🌟**

Once deployed, you can continue to add features (Experience, Contact Form, Blog) and each push will automatically update your live site.
