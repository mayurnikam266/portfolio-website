'use client'

import { motion } from 'framer-motion'
import { Section } from './section'

const skillCategories = [
  {
    category: 'Cloud Platforms',
    skills: ['AWS', 'EC2', 'S3', 'RDS', 'CloudWatch', 'CloudTrail', 'IAM', 'EKS', 'VPC'],
  },
  {
    category: 'Container & Orchestration',
    skills: ['Docker', 'Podman', 'Kubernetes'],
  },
  {
    category: 'DevOps & Automation',
    skills: ['Ansible', 'Git', 'GitHub Actions', 'Jenkins Basics', 'CI/CD'],
  },
  {
    category: 'Programming & Scripting',
    skills: ['Python', 'Bash', 'SQL', 'YAML'],
  },
  {
    category: 'Operating Systems',
    skills: ['RHEL (Red Hat Certified)', 'Ubuntu', 'Linux', 'Windows'],
  },
  {
    category: 'Networking',
    skills: ['TCP/IP', 'DNS', 'SSL/TLS', 'VPC', 'Security Groups', 'NAT Gateway'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Skills() {
  return (
    <Section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Skills & Expertise
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          A comprehensive toolkit for modern DevOps and cloud infrastructure
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-400 transition-colors"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full border border-slate-200 dark:border-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
