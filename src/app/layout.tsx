import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Mayur Nikam | DevOps Engineer',
  description: 'Professional portfolio of Mayur Nikam, experienced DevOps engineer specializing in cloud infrastructure, CI/CD, and automation.',
  keywords: ['DevOps', 'AWS', 'Kubernetes', 'CI/CD', 'Infrastructure', 'Automation', 'Cloud'],
  authors: [{ name: 'Mayur Nikam' }],
  openGraph: {
    title: 'Mayur Nikam | DevOps Engineer',
    description: 'Professional portfolio of Mayur Nikam, experienced DevOps engineer specializing in cloud infrastructure, CI/CD, and automation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
