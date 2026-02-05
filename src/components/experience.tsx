'use client'

import { motion } from 'framer-motion'
import { Section } from './section'
import { Calendar, Building2 } from 'lucide-react'

interface ExperienceItem {
  id: string
  position: string
  company: string
  period: string
  location: string
  description: string
  achievements: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: '1',
    position: 'Red Hat Academy Student Ambassador',
    company: 'MIT Aurangabad',
    period: 'Feb 2024 - December 2025',
    location: 'Aurangabad, Maharashtra',
    description: 'Representing Red Hat Academy as a campus ambassador promoting Linux and open-source learning culture.',
    achievements: [
      'Represented Red Hat Academy promoting Linux and open-source culture on campus',
      'Conducted workshops and guided peers in setting up Red Hat Enterprise Linux environments',
      'Provided hands-on guidance on containerization tools (Docker, Podman) and DevOps practices',
      'Collaborated with Red Hat Academy coordinators to organize technical sessions and awareness programs',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export function Experience() {
  return (
    <Section id="experience" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Professional Experience
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          Building innovative cloud solutions throughout my career
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative p-6 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-400 transition-colors"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-[28px] top-[80px] w-0.5 h-[calc(100%+24px)] bg-slate-200 dark:bg-slate-700"></div>
              )}

              <div className="flex gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Building2 className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {exp.company} • {exp.location}
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-slate-600 dark:text-slate-300">
                        <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
