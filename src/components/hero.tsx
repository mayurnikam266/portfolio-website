'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl w-full text-center"
      >
        <motion.div variants={item} className="mb-6 sm:mb-8">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8">
            <Image
              src="/passport-photo.jpeg"
              alt="Mayur Nikam"
              fill
              className="rounded-full object-cover shadow-lg"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight"
        >
          Mayur Nikam
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light mb-6 sm:mb-8 px-2"
        >
          B.Tech in AI & Data Science | Cloud & DevOps Enthusiast
        </motion.p>

        <motion.p
          variants={item}
          className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
        >
          Strong expertise in Cloud Computing, DevOps, and Automation. Skilled in AWS, Kubernetes, Docker, and Ansible, experienced in deploying secure, scalable, and monitored cloud environments.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
        >
          <Link
            href="#projects"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-center"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            download="Mayur_Nikam_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg font-medium transition-colors text-center"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/mayurnikam266"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/mayur-nikam266"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:mayurnikam266@gmail.com"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
