# Content Update Guide

Quick reference for updating portfolio content without diving into code.

## Profile Information

### Hero Section
**File:** `src/components/hero.tsx`

Update:
- Name: Line 41
- Title/Role: Line 47
- Description: Lines 53-56
- Social links: Lines 77-101

```typescript
// Example:
<h1>Your Name</h1>
<p>Your Title</p>
```

### Profile Photo
**Location:** `public/passport-photo.jpeg`

Replace the file with your photo (keep the same name or update in `hero.tsx`).

## About Section
**File:** `src/components/about.tsx`

Update paragraphs (lines 23-39) and key expertise items (lines 43-64).

## Skills
**File:** `src/components/skills.tsx`

Update the `skillCategories` array (lines 7-29):

```typescript
const skillCategories = [
  {
    category: 'Your Category',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
  // Add more categories...
]
```

## Projects
**File:** `src/components/projects.tsx`

Update the `projects` array (lines 16-45):

```typescript
const projects: Project[] = [
  {
    id: 'unique-id',
    title: 'Project Title',
    description: 'Project description...',
    technologies: ['Tech1', 'Tech2'],
    pdfFile: 'your-project.pdf', // Must be in public/
    highlights: [
      'Highlight 1',
      'Highlight 2',
    ],
  },
]
```

**Adding a new project PDF:**
1. Copy PDF to `public/` directory
2. Add project entry to array
3. Reference filename in `pdfFile` property

## Experience
**File:** `src/components/experience.tsx`

Update the `experiences` array (lines 14-64):

```typescript
const experiences: ExperienceItem[] = [
  {
    id: '1',
    position: 'Job Title',
    company: 'Company Name',
    period: '2020 - Present',
    location: 'City, State',
    description: 'Brief description...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
  },
]
```

## Education & Certifications
**File:** `src/components/education.tsx`

### Education
Update `education` array (lines 20-31):

```typescript
const education: EducationItem[] = [
  {
    degree: 'Degree Name',
    institution: 'University Name',
    year: '2019',
    details: 'Specialization or honors',
  },
]
```

### Certifications
Update `certifications` array (lines 33-57):

```typescript
const certifications: CertificationItem[] = [
  {
    name: 'Certification Name',
    issuer: 'Issuing Organization',
    year: '2023',
    credentialId: 'CERT-ID-123',
  },
]
```

## Contact Information
**File:** `src/components/contact.tsx`

Update `contactLinks` array (lines 7-22):

```typescript
const contactLinks = [
  {
    icon: Mail, // Keep icon imports
    label: 'Email',
    value: 'your@email.com',
    href: 'mailto:your@email.com',
  },
  // Update GitHub, LinkedIn URLs...
]
```

Update location info (line 85-86):
```typescript
<p>Based in City, State • Available for remote work</p>
```

## SEO Metadata
**File:** `src/app/layout.tsx`

Update metadata (lines 5-14):

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your professional summary...',
  keywords: ['keyword1', 'keyword2'],
}
```

## Colors & Styling

### Theme Colors
**File:** `tailwind.config.ts`

Modify color palette (lines 12-23):
```typescript
colors: {
  // Add custom colors
  brand: {
    500: '#your-color',
  },
}
```

### Fonts
**File:** `src/app/layout.tsx`

Change Google Fonts link (line 27) and font name.

## Resume PDF
**File:** Add to `public/resume.pdf`

The "Download Resume" button links to `/resume.pdf`.

## Quick Checklist for Content Updates

Before deploying content changes:
- [ ] Update all personal information
- [ ] Replace profile photo
- [ ] Add project PDFs to `public/`
- [ ] Update skills to match your expertise
- [ ] Add your actual work experience
- [ ] Include your education and certifications
- [ ] Update contact information and social links
- [ ] Add your resume PDF
- [ ] Test locally: `npm run dev`
- [ ] Build succeeds: `npm run build`
- [ ] Push to GitHub
- [ ] Verify on live site

## Common Customizations

### Add a new section
1. Create component in `src/components/your-section.tsx`
2. Import and add to `src/app/page.tsx`
3. Add nav item to `src/components/navigation.tsx`

### Change color scheme
1. Update Tailwind colors in `tailwind.config.ts`
2. Replace color classes throughout components
3. Test in both light and dark modes

### Add animations
Use Framer Motion variants for consistent animations:
```typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

## Need Help?

- Check README.md for technical setup
- See DEPLOYMENT.md for deployment issues
- Review component files for inline comments
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs

---

**Pro tip:** Make small changes, test locally, then deploy. This makes troubleshooting easier!
