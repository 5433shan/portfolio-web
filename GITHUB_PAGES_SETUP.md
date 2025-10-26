# GitHub Pages Deployment Fix

Your deployment failed because of environment protection rules. Here's how to fix it:

## Option 1: Remove Environment Protection (Recommended for Personal Projects)

1. Go to: https://github.com/5433shan/portfolio-web/settings/environments
2. Click on "github-pages" environment
3. Scroll down and click "Delete environment"
4. Confirm deletion
5. Go back to Actions tab and re-run the failed workflow

## Option 2: Add Main Branch to Deployment Branches

1. Go to: https://github.com/5433shan/portfolio-web/settings/environments
2. Click on "github-pages" environment
3. Under "Deployment branches and tags", click "Add deployment branch or tag rule"
4. Select "main" branch
5. Click "Save protection rules"
6. Go to Actions tab and re-run the failed workflow

## Option 3: Use 001-portfolio-website Branch Instead

Update the workflow to deploy from your current branch:

1. Edit `.github/workflows/deploy.yml`
2. Change line 4 from `- main` to `- 001-portfolio-website`
3. Commit and push the change

## After Fixing

Once you've applied one of the fixes above:

1. Go to: https://github.com/5433shan/portfolio-web/actions
2. Click on the failed "Deploy to GitHub Pages" workflow
3. Click "Re-run all jobs"
4. Wait 2-3 minutes for deployment to complete
5. Visit: https://5433shan.github.io/portfolio-web/

## Verify GitHub Pages is Enabled

Also make sure GitHub Pages is configured:

1. Go to: https://github.com/5433shan/portfolio-web/settings/pages
2. Under "Source", select "GitHub Actions"
3. Click Save

Your site will be live at: https://5433shan.github.io/portfolio-web/
