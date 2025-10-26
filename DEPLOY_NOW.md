# 🚀 Deploy Your Portfolio Now - Quick Start

## ⚡ 5-Minute Deployment Checklist

Follow these exact steps to get your portfolio live:

### ☑️ Step 1: Create GitHub Repository

1. Open browser and go to: https://github.com/new
2. Fill in:
   - **Repository name**: `portfolio-web`
   - **Description**: "Personal portfolio website - ML Engineer"
   - **Visibility**: ✅ **Public** (required for free GitHub Pages)
   - ❌ **UNCHECK** "Add a README file"
   - ❌ **UNCHECK** "Add .gitignore"
   - ❌ **UNCHECK** "Choose a license"
3. Click "Create repository"

**Important**: Leave the repository empty! We'll push our existing code.

### ☑️ Step 2: Copy Your Repository URL

After creating the repo, GitHub shows you a page with URLs. Copy the HTTPS URL:

```
https://github.com/5433shan/portfolio-web.git
```

### ☑️ Step 3: Run These Commands

Open your terminal and run these commands **one at a time**:

```bash
# 1. Navigate to your project (if not already there)
cd /Users/shan5433/Desktop/portfolio/portfolio-web

# 2. Stage all files for commit
git add .

# 3. Commit your portfolio
git commit -m "Initial portfolio launch - Pin Shan Chuang ML Engineer portfolio with 4 sample projects"

# 4. Add GitHub as remote (paste your actual URL here)
git remote add origin https://github.com/5433shan/portfolio-web.git

# 5. Push your code to GitHub
git push -u origin 001-portfolio-website

# That's it! Your code is now on GitHub.
```

### ☑️ Step 4: Enable GitHub Pages

1. Go to your repository: https://github.com/5433shan/portfolio-web
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select **"GitHub Actions"** from dropdown
5. That's it! No need to save or configure anything else.

### ☑️ Step 5: Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You'll see a workflow called "Deploy to GitHub Pages" running
3. Wait 2-3 minutes for the green checkmark ✅
4. Once complete, your site is LIVE!

### ☑️ Step 6: Visit Your Live Portfolio! 🎉

Your portfolio is now live at:

**https://5433shan.github.io/portfolio-web/**

Click the link and see your portfolio live on the internet!

---

## 🎯 What Happens Next?

### Automatic Deployment
Every time you push changes to GitHub, your site automatically rebuilds and deploys. No manual steps needed!

```bash
# Make changes to your files
# Then:
git add .
git commit -m "Update portfolio"
git push

# Wait 2-3 minutes → Changes are live!
```

### Your Live Portfolio Includes:
- ✅ Your name: Pin Shan Chuang
- ✅ Title: ML Engineer
- ✅ Your GitHub, LinkedIn, and Email links
- ✅ 4 sample ML projects (you can update these anytime)
- ✅ Fully responsive design
- ✅ Smooth animations
- ✅ Accessible navigation

---

## 📝 Quick FAQ

**Q: Can I use a different repository name?**
A: Yes! But you'll need to update `vite.config.js`:
```js
base: '/your-repo-name/',  // Change this
```
Then rebuild: `npm run build`, commit, and push.

**Q: What if I get an error when pushing?**
A: Common issues:
- Wrong repository URL: Check the URL you copied
- Authentication failed: You may need to set up a Personal Access Token
  - Go to GitHub Settings → Developer settings → Personal access tokens
  - Create a classic token with 'repo' scope
  - Use the token as your password when pushing

**Q: Can I deploy to a different branch?**
A: Yes! The workflow supports both `main` and `001-portfolio-website`. You can:
```bash
git checkout -b main
git push -u origin main
```

**Q: How do I know if deployment succeeded?**
A:
- ✅ Green checkmark in Actions tab = Success
- ❌ Red X = Failed (check error logs)
- 🟡 Yellow circle = Still deploying (wait)

**Q: The site shows 404 error**
A: Check that:
1. GitHub Pages is enabled (Settings → Pages → Source: GitHub Actions)
2. Base path in `vite.config.js` matches your repo name
3. Workflow completed successfully (Actions tab)

---

## 🎨 After Launch - Quick Wins

Once your site is live, these quick updates will make it even better:

### 1. Add Your Profile Photo (5 min)
1. Get a professional photo (800x800px)
2. Convert to WebP: https://squoosh.app/
3. Save as `public/images/profile.webp`
4. Update `src/data/profile.json`: `"photo": "/images/profile.webp"`
5. Commit and push!

### 2. Add Your Resume (2 min)
1. Export resume as PDF
2. Save as `public/resume/Pin_Shan_Chuang_Resume.pdf`
3. Commit and push!

### 3. Customize Your Bio (3 min)
Edit `src/data/profile.json`:
```json
{
  "bio": "Your custom bio highlighting your ML expertise, experience, and what makes you unique..."
}
```

### 4. Share Your Portfolio
- LinkedIn: Add to profile summary and experience
- Resume: Add URL under contact information
- GitHub: Add to profile README
- Email signature: Include the link

---

## 🚀 Ready? Let's Deploy!

Just follow the 6 steps above and you'll be live in 5 minutes!

**Commands Summary**:
```bash
cd /Users/shan5433/Desktop/portfolio/portfolio-web
git add .
git commit -m "Initial portfolio launch"
git remote add origin https://github.com/5433shan/portfolio-web.git
git push -u origin 001-portfolio-website
```

Then enable GitHub Pages in Settings → Pages → Source: GitHub Actions

**Your portfolio URL**: https://5433shan.github.io/portfolio-web/

---

**Need detailed instructions?** See `DEPLOYMENT_GUIDE.md`

**Good luck! 🎉**
