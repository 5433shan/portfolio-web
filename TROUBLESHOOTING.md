# 🔧 Troubleshooting: GitHub Pages "Not Found" Error

## The Issue

You're seeing this error:
```
Error: Get Pages site failed. Please verify that the repository has Pages enabled
Error: HttpError: Not Found
```

This happens when the GitHub Actions workflow runs before GitHub Pages is properly configured.

## ✅ Solution (Takes 2 Minutes)

### Step 1: Verify Repository is Public

1. Go to your repository: https://github.com/5433shan/portfolio-web
2. Look for a "Public" or "Private" badge near the repository name
3. **If it says "Private"**:
   - Click Settings → General
   - Scroll to bottom → Danger Zone
   - Click "Change repository visibility"
   - Select "Make public"
   - Confirm by typing the repository name

**Why**: GitHub Pages free tier requires public repositories.

### Step 2: Enable GitHub Pages

1. Go to repository **Settings** → **Pages** (left sidebar)
2. Under "Build and deployment":
   - **Source**: Click the dropdown
   - Select **"GitHub Actions"** (NOT "Deploy from a branch")
3. You should see: "GitHub Actions deployments for this repository are enabled"

### Step 3: Re-run the Failed Workflow

1. Go to the **Actions** tab
2. Click on the failed workflow run (the one with the red X)
3. Click **"Re-run all jobs"** button (top right)
4. Wait 2-3 minutes for deployment to complete

**Expected result**: Green checkmark ✅

### Step 4: Verify Deployment

Once you see the green checkmark:

1. Go back to Settings → Pages
2. You should now see: "Your site is live at https://5433shan.github.io/portfolio-web/"
3. Click the link to visit your portfolio!

---

## 🔍 Alternative Solution: Manual Pages Setup

If the above doesn't work, try this:

### Method 1: Enable Pages First, Then Re-deploy

1. **Settings → Pages**
2. **Source**: Select "GitHub Actions"
3. Go to **Actions** tab
4. Click the failed workflow
5. Click "Re-run all jobs"

### Method 2: Push a Small Change to Trigger Deployment

```bash
# Make a small change to trigger re-deployment
cd /Users/shan5433/Desktop/portfolio/portfolio-web

# Add a comment or small change to README
echo "" >> README.md

# Commit and push
git add README.md
git commit -m "Trigger deployment"
git push
```

This will trigger a new deployment workflow with Pages already enabled.

---

## 🎯 Checklist for Successful Deployment

Before the workflow runs, ensure:

- [ ] Repository is **Public** (not Private)
- [ ] GitHub Pages is **Enabled** (Settings → Pages)
- [ ] Source is set to **"GitHub Actions"** (not "Deploy from a branch")
- [ ] You have **push access** to the repository
- [ ] The repository has a **valid workflow file** (`.github/workflows/deploy.yml`)

---

## 🐛 Other Common Issues

### Issue: "Permission denied" Error

**Solution**: Check workflow permissions
1. Settings → Actions → General
2. Scroll to "Workflow permissions"
3. Select "Read and write permissions"
4. Save

### Issue: Build Fails (Red X) for Different Reason

**Solution**: Check the error logs
1. Actions tab → Click the failed workflow
2. Click on the "build" job
3. Expand the failed step to see the error
4. Common issues:
   - Missing dependencies: Run `npm install` locally
   - Build errors: Run `npm run build` locally to test
   - Wrong Node version: Workflow uses Node 18

### Issue: 404 Error on Deployed Site

**Causes**:
1. **Wrong base path**: Check `vite.config.js`
   ```js
   base: '/portfolio-web/',  // Must match your repo name!
   ```

2. **Case sensitivity**: Repo name is case-sensitive
   - Repository: `Portfolio-Web`
   - Config should be: `base: '/Portfolio-Web/',`

3. **Custom domain**: If using custom domain, use:
   ```js
   base: '/',
   ```

**Fix**:
```bash
# Update vite.config.js with correct base path
# Then:
npm run build
git add .
git commit -m "Fix base path"
git push
```

---

## 📞 Still Having Issues?

If you're still stuck:

1. **Check the Actions log**:
   - Go to Actions tab
   - Click the failed run
   - Look for specific error messages

2. **Verify your setup**:
   - Repository is public
   - GitHub Pages is enabled
   - Source is "GitHub Actions"
   - Base path in `vite.config.js` matches repo name

3. **Test locally**:
   ```bash
   npm run build
   npm run preview
   ```
   If this works, the issue is with GitHub setup, not your code.

4. **Check GitHub Status**:
   - Visit: https://www.githubstatus.com/
   - Ensure GitHub Pages is operational

---

## ✅ Success Indicators

You'll know it's working when:

- ✅ Actions tab shows green checkmark
- ✅ Settings → Pages shows "Your site is live at..."
- ✅ Visiting the URL shows your portfolio
- ✅ Your name "Pin Shan Chuang" appears on the homepage

---

## 🚀 Quick Commands Reference

```bash
# Test build locally
npm run build
npm run preview

# Fix and redeploy
git add .
git commit -m "Fix deployment issue"
git push

# Check git remote
git remote -v

# Check current branch
git branch
```

---

**Most common solution**: Enable Pages in Settings, then re-run the workflow! ✨
