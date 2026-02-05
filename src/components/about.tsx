'use client'

import { motion } from 'framer-motion'
import { Section } from './section'

export function About() {
  return (
    <Section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          About Me
        </h2>

        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed" style={{ textAlign: 'justify' }}>
          <p>
            I'm pursuing B.Tech in Artificial Intelligence and Data Science at Maharashtra Institute of Technology, Aurangabad 
            with a CGPA of 8.45/10. My passion lies in Cloud Computing, DevOps, and Automation, where I combine academic 
            knowledge with hands-on experience to build robust infrastructure solutions.
          </p>

          <p>
            With strong expertise in AWS (EC2, S3, CloudWatch, IAM, RDS), Kubernetes, Docker, and Ansible, I focus on deploying 
            secure, scalable, and monitored cloud environments. I'm hands-on with TCP/IP, DNS, and SSL/TLS networking concepts, 
            ensuring comprehensive understanding of infrastructure at all layers.
          </p>

          <p>
            As a Red Hat Academy Student Ambassador at MIT Aurangabad, I actively promote Linux and open-source culture, 
            conduct technical workshops, and guide peers in setting up RHEL environments. I'm Red Hat Certified (RHCSA & RHCE) 
            and committed to continuous learning in the DevOps ecosystem.
          </p>
        </div>

        <div className="mt-12 p-8 bg-blue-50 dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">Key Expertise</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 dark:text-slate-300">
            <li className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span>AWS Cloud Services (EC2, S3, RDS, IAM, EKS)</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span>Container Technologies (Docker, Podman, Kubernetes)</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span>Configuration Management (Ansible)</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span>Linux System Administration (RHEL, Ubuntu)</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span>Networking (TCP/IP, DNS, SSL/TLS)</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
              <span>Python & Bash Scripting</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </Section>
  )
}
