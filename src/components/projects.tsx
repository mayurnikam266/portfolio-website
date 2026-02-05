'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, X, Github } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  pdfFile: string
  githubUrl: string
  highlights: string[]
}

const projects: Project[] = [
  {
    id: 'ansible-vm-monitoring',
    title: 'Automated EC2 Virtual Machine Health Monitoring System using Ansible',
    description: 'Developed an automated Virtual Machine health monitoring system using Ansible Dynamic Inventory for EC2 instance discovery (Environment=dev).',
    technologies: ['Ansible', 'AWS EC2', 'Dynamic Inventory', 'YAML', 'Linux', 'Python'],
    pdfFile: 'Virtual Machine Health Monitoring with Ansible.pdf',
    githubUrl: 'https://github.com/mayurnikam266/Ansible-VM-Health-Monitoring',
    highlights: [
      'Developed automated VM health monitoring using Ansible Dynamic Inventory for EC2',
      'Monitored CPU, RAM, and Disk usage with auto-formatted HTML health reports',
      'Implemented automated tagging, SSH key configuration, and zero-manual workflow',
      'Delivered fully automated end-to-end monitoring pipeline for cloud infrastructure',
    ],
  },
  {
    id: 'aws-multitier',
    title: 'AWS Secure Multi Tier Deployment With Bastion Host and NAT Gateway',
    description: 'Designed and deployed a secure AWS multi-tier architecture for WordPress using VPC with public and private subnets.',
    technologies: ['AWS EC2', 'VPC', 'IAM', 'NAT Gateway', 'Bastion Host', 'WordPress', 'MariaDB'],
    pdfFile: 'AWS Multitier Secure Wordpress Deployment.pdf',
    githubUrl: 'https://github.com/mayurnikam266/AWS-Secure-Multi-Tier-Deployment',
    highlights: [
      'Designed secure AWS multi-tier architecture with VPC, public/private subnets',
      'Implemented Bastion Host for secure SSH access and NAT Gateway for outbound traffic',
      'Deployed WordPress on EC2 (Apache, PHP) with MariaDB in isolated private subnet',
      'Configured security groups, route tables following AWS security best practices',
    ],
  },
]

interface PdfModalProps {
  project: Project | null
  onClose: () => void
}

function PdfModal({ project, onClose }: PdfModalProps) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 rounded-lg shadow-2xl w-full h-full max-w-[95vw] max-h-[95vh] overflow-hidden flex flex-col m-4"
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-hidden">
          <iframe
            src={`/${project.pdfFile}`}
            className="w-full h-full"
            title={project.title}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          Showcasing key projects and accomplishments
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-400 transition-all hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">
                  Key Highlights:
                </h4>
                <ul className="space-y-1">
                  {project.highlights.slice(0, 2).map((highlight, i) => (
                    <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white dark:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <span>View PDF</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <PdfModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
