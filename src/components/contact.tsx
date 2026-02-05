'use client'

import { motion } from 'framer-motion'
import { Section } from './section'
import { Mail, Github, Linkedin, MessageSquare, ArrowRight } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mayurnikam266@gmail.com',
    href: 'mailto:mayurnikam266@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/mayurnikam266',
    href: 'https://github.com/mayurnikam266',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mayur-nikam266',
    href: 'https://linkedin.com/in/mayur-nikam266',
  },
]

export function Contact() {
  return (
    <Section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Let&apos;s Work Together
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          I&apos;m always interested in hearing about new projects and opportunities. 
          Feel free to reach out if you&apos;d like to collaborate or chat about DevOps, cloud architecture, or anything tech-related.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <a
            href="mailto:mayurnikam266@gmail.com"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            Send me an email
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-6 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-400 transition-colors group"
              >
                <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{link.label}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{link.value}</p>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-12 border-t border-slate-200 dark:border-slate-800 text-center text-slate-600 dark:text-slate-400"
        >
          <p className="mb-4">Based in San Francisco, CA • Available for remote and on-site work</p>
          <p className="text-sm">© 2024 Mayur Nikam. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </Section>
  )
}
