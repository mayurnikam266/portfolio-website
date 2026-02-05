'use client'

import { motion } from 'framer-motion'
import { Section } from './section'
import { Award, GraduationCap } from 'lucide-react'

interface EducationItem {
  degree: string
  institution: string
  year: string
  details: string
}

interface CertificationItem {
  name: string
  issuer: string
  year: string
  credentialId: string
}

const education: EducationItem[] = [
  {
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'Maharashtra Institute of Technology, Aurangabad',
    year: 'Graduation: 2026',
    details: 'CGPA: 8.45/10',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Maharashtra State Board',
    year: '2022',
    details: 'Percentage: 80.83%',
  },
]

const certifications: CertificationItem[] = [
  {
    name: 'Red Hat Certified System Administrator (RHCSA)',
    issuer: 'Red Hat Academy',
    year: '2024',
    credentialId: '240-042-069',
  },
  {
    name: 'Red Hat Certified Engineer (RHCE)',
    issuer: 'Red Hat Academy',
    year: '2024',
    credentialId: '240-042-069',
  },
  {
    name: 'PCAP - Python Certification Course',
    issuer: 'KodeKloud',
    year: '2024',
    credentialId: '2D145B7D775E-2DECCB8C357A-2D14554A6710',
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

export function Education() {
  return (
    <Section id="education" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Education
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                >
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {item.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {item.institution}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{item.year}</p>
                  <p className="text-slate-600 dark:text-slate-300">{item.details}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-600" />
              Certifications
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                >
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex justify-between items-end">
                    <p className="text-sm text-slate-500 dark:text-slate-400">{cert.year}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      ID: {cert.credentialId}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
