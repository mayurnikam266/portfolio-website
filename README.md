# Mayur Nikam - Professional Portfolio Website

A modern, production-ready portfolio website showcasing DevOps expertise and professional accomplishments.

## Features

✨ **Modern Design**
- Clean, minimal aesthetic inspired by Vercel, Linear, and Notion
- Dark/Light mode with smooth transitions
- Responsive design (mobile, tablet, desktop)
- Smooth animations with Framer Motion

🎯 **Sections**
- Hero section with profile photo and CTAs
- About me with key expertise highlights
- Skills categorized by technology domain
- Featured projects with embedded PDF viewer
- Professional experience timeline
- Education and certifications
- Contact section with social links

⚡ **Technical**
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide Icons for UI elements
- SEO optimized with metadata
- Dark mode support with next-themes

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)
- **Deployment:** Vercel

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Copy PDF files to public directory:
```bash
cp "AWS Multitier Secure Wordpress Deployment.pdf" public/
cp "Virtual Machine Health Monitoring with Ansible.pdf" public/
```

4. Copy passport photo:
```bash
cp "passport photo.jpeg" public/passport-photo.jpeg
```

### Running Locally

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── navigation.tsx      # Navigation bar
│   │   ├── hero.tsx            # Hero section
│   │   ├── about.tsx           # About section
│   │   ├── skills.tsx          # Skills section
│   │   ├── projects.tsx        # Projects section with PDF modal
│   │   ├── experience.tsx      # Experience timeline
│   │   ├── education.tsx       # Education and certifications
│   │   ├── contact.tsx         # Contact section
│   │   ├── section.tsx         # Reusable section wrapper
│   │   ├── theme-provider.tsx  # Theme provider setup
│   │   └── theme-toggle.tsx    # Dark mode toggle
│   └── styles/                 # Additional styles if needed
├── public/
│   ├── passport-photo.jpeg     # Profile photo
│   ├── AWS Multitier Secure Wordpress Deployment.pdf
│   └── Virtual Machine Health Monitoring with Ansible.pdf
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## Customization

### Update Content

Edit the data in component files:
- Hero section: `src/components/hero.tsx`
- About: `src/components/about.tsx`
- Skills: `src/components/skills.tsx` (skillCategories array)
- Projects: `src/components/projects.tsx` (projects array)
- Experience: `src/components/experience.tsx` (experiences array)
- Education: `src/components/education.tsx` (education and certifications arrays)
- Contact: `src/components/contact.tsx` (contactLinks array)

### Update Colors

Modify Tailwind theme in `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      // Add custom colors here
    },
  },
}
```

### Update Fonts

Change font in `src/app/layout.tsx`:
```typescript
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

And update `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Select the repository and click "Deploy"
4. Vercel will automatically build and deploy

**No additional configuration needed!**

### Environment Variables

Create a `.env.local` file if needed:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## PDF Files

Project PDFs are loaded from the `/public` directory using iframe:
```typescript
<iframe
  src={`/${project.pdfFile}`}
  className="w-full h-full"
  title={project.title}
/>
```

Ensure PDF files are placed in the `public/` folder for proper loading.

## Performance

- ✅ Optimized images with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ CSS-in-JS with Tailwind for minimal bundle
- ✅ SEO metadata for search engines
- ✅ Responsive design for all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## SEO

The portfolio includes:
- Meta tags with description and keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- Schema.org markup ready
- Mobile-friendly design

## Performance Metrics

Lighthouse scores target:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

## License

This project is open source and available under the MIT License.

## Author

**Mayur Nikam**
DevOps Engineer | Cloud Infrastructure Specialist

## Support

For issues or questions, please open an issue on the repository.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
