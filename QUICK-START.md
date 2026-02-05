# 🚀 Quick Start Guide

Get your portfolio live in 15 minutes!

## Step 1: Verify Installation (1 min)

The project is already set up! Verify it works:

```bash
cd "/Users/mayurnikam/mytasks/portfolio website"
npm run dev
```

Open http://localhost:3000 in your browser.

✅ You should see your portfolio website!

## Step 2: Update Your Information (10 min)

### A. Personal Details

**Hero Section** (`src/components/hero.tsx`):
- Line 41: Your name
- Line 47: Your title (e.g., "DevOps Engineer")
- Line 53-56: Your tagline

**Contact** (`src/components/contact.tsx`):
- Line 11: Your email (update in 3 places)
- Line 16-17: Your GitHub URL
- Line 21-22: Your LinkedIn URL

**SEO** (`src/app/layout.tsx`):
- Line 5: Update title
- Line 6: Update description

### B. Replace Assets

```bash
# Your profile photo (JPEG, ideally 200x200 to 500x500 px)
cp "your-photo.jpg" public/passport-photo.jpeg

# Your resume PDF
cp "your-resume.pdf" public/resume.pdf
```

### C. Quick Content Update

Files to customize:
1. `src/components/about.tsx` - Your story
2. `src/components/skills.tsx` - Your skills
3. `src/components/experience.tsx` - Your jobs
4. `src/components/education.tsx` - Your education

See `CONTENT-GUIDE.md` for detailed instructions.

## Step 3: Test Everything (2 min)

```bash
# Build the project
npm run build

# If build succeeds, you're good!
```

Test checklist:
- [ ] Dark/light mode toggle works
- [ ] Navigation menu works (try mobile view)
- [ ] Project PDFs open in modal
- [ ] All links work
- [ ] Mobile responsive

## Step 4: Deploy to Vercel (2 min)

### A. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: My portfolio"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### B. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy"

**That's it!** Your site will be live in ~2 minutes at:
`https://your-project.vercel.app`

## What You Get

✨ **Production-ready portfolio with:**
- Modern, professional design
- Dark/Light mode
- Fully responsive
- SEO optimized
- Fast loading
- PDF project viewer
- Contact section
- Experience timeline
- Skills showcase

## Common Tasks

### Update Content
```bash
# Edit component files
# See CONTENT-GUIDE.md for details
```

### Add New Project
```bash
# 1. Copy PDF to public/
cp "new-project.pdf" public/

# 2. Edit src/components/projects.tsx
# Add new project object to array

# 3. Test locally
npm run dev
```

### Change Colors
```bash
# Edit tailwind.config.ts
# Update color values in theme.extend.colors
```

### Deploy Changes
```bash
git add .
git commit -m "Update content"
git push

# Vercel auto-deploys!
```

## Need Help?

📚 **Documentation Files:**
- `README.md` - Technical details
- `DEPLOYMENT.md` - Deployment guide
- `CONTENT-GUIDE.md` - Content updates
- `PROJECT-SUMMARY.md` - Project overview
- `CHECKLIST.md` - Pre-deployment checklist
- `FILE-STRUCTURE.md` - File organization

🔗 **Useful Links:**
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Vercel Docs: https://vercel.com/docs
- Framer Motion: https://www.framer.com/motion

## Troubleshooting

### Build fails
```bash
# Delete cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### PDFs not loading
- Ensure PDFs are in `public/` directory
- Check filename matches in `projects.tsx`
- Verify PDF files are committed to git

### Images not showing
- Check file path in component
- Ensure image is in `public/` directory
- Verify filename matches exactly (case-sensitive)

### Dark mode not working
- Clear browser cache
- Check `theme-provider.tsx` is in layout
- Verify Tailwind config has `darkMode: 'class'`

## Pro Tips

💡 **Best Practices:**
1. Always test locally before deploying
2. Keep content professional and proofread
3. Optimize images (compress to < 500KB)
4. Keep PDFs under 10MB each
5. Update content regularly
6. Test on actual mobile devices

🎯 **Performance:**
- Site loads in < 2 seconds
- Lighthouse score 90+
- Fully accessible
- SEO optimized

## Next Steps

After deployment:
1. ✅ Share URL on LinkedIn
2. ✅ Add to your resume
3. ✅ Update regularly with new projects
4. ✅ Get feedback from peers
5. ✅ Consider custom domain

## Success Checklist

- [ ] Site running locally
- [ ] Personal info updated
- [ ] Profile photo replaced
- [ ] Resume PDF added
- [ ] Content proofread
- [ ] Build successful
- [ ] Pushed to GitHub
- [ ] Deployed on Vercel
- [ ] Live site works
- [ ] Shared with network

## Your Live Site

After deployment, your portfolio will be at:
```
https://your-project-name.vercel.app
```

You can also add a custom domain in Vercel settings!

---

## Commands Reference

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Run production build locally

# Git & Deploy
git add .            # Stage changes
git commit -m "msg"  # Commit changes
git push             # Push to GitHub (auto-deploys)

# Vercel CLI (optional)
vercel               # Deploy preview
vercel --prod        # Deploy to production
```

---

**You're all set! Good luck with your job search! 🎉**

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
