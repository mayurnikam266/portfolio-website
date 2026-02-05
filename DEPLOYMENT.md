# Deployment Guide - Vercel

This guide will walk you through deploying your portfolio website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- Project pushed to a GitHub repository

## Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

2. Create a new repository on GitHub
3. Push your code:
```bash
git remote add origin https://github.com/your-username/your-repo.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest)

1. Go to [Vercel](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and configure settings
5. Click "Deploy"

That's it! Your site will be live in ~2 minutes.

### Option B: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts. First deployment will be a preview. To deploy to production:
```bash
vercel --prod
```

## Step 3: Configure Domain (Optional)

1. In Vercel dashboard, go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed by Vercel

## Environment Variables

No environment variables are required for basic deployment. If you add API keys or secrets:

1. Go to Project Settings → Environment Variables in Vercel
2. Add variables (e.g., `NEXT_PUBLIC_SITE_URL`)
3. Redeploy your application

## Automatic Deployments

Once connected to GitHub:
- **Every push to main** triggers a production deployment
- **Pull requests** get preview deployments
- **Rollback** to any previous deployment instantly

## Performance Tips

Your site is already optimized with:
- ✅ Static page generation
- ✅ Image optimization
- ✅ Code splitting
- ✅ CDN distribution

Vercel provides:
- Global CDN
- Edge caching
- Automatic HTTPS
- DDoS protection

## Monitoring

Check deployment status and analytics:
1. Visit [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. View Analytics, Speed Insights, and Logs

## Troubleshooting

### Build fails

Check build logs in Vercel dashboard. Common issues:
- Missing dependencies (run `npm install` locally to verify)
- TypeScript errors (run `npm run build` locally to check)
- File paths case-sensitive on Vercel

### PDFs not loading

Ensure PDF files are in the `public/` directory and committed to git.

### Images not showing

Verify image paths and that images are in `public/` directory.

## Custom Build Commands

If needed, update in `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

## Free Tier Limits

Vercel's free tier includes:
- Unlimited personal projects
- 100 GB bandwidth/month
- Serverless function execution
- Automatic SSL certificates
- Preview deployments

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Community: https://github.com/vercel/next.js/discussions

---

## Quick Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] All assets in `public/` directory
- [ ] `package.json` has all dependencies
- [ ] Build succeeds locally (`npm run build`)
- [ ] Connected to Vercel
- [ ] Deployment successful
- [ ] Site accessible at Vercel URL
- [ ] Dark mode working
- [ ] PDFs loading correctly
- [ ] Mobile responsive
- [ ] (Optional) Custom domain configured

**Congratulations! Your portfolio is live! 🎉**
