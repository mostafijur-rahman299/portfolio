'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { myProducts as projects } from '@/lib/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 lg:mb-16 gap-4"
        >
          <div>
            <p className="section-label">
              <span className="w-4 h-px bg-muted-foreground/60 inline-block" />
              Work
            </p>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle max-w-md">Things I've built and shipped to the world.</p>
          </div>
          <Link href="/products" className="link-arrow shrink-0 self-start sm:self-end">
            All projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Featured row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="card-clean group p-6 sm:p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4 gap-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground group-hover:opacity-70 transition-opacity leading-snug">
                    {project.title}
                  </h3>
                  <span className="tag-green shrink-0 mt-1">{project.status}</span>
                </div>
                <p className="text-sm sm:text-base text-secondary leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3 mt-auto">
                  {project.caseStudy ? (
                    <Link
                      href={`/products/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-secondary transition-all duration-200 group-hover:gap-2.5"
                    >
                      Read case study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  ) : project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-secondary transition-all duration-200 group-hover:gap-2.5"
                    >
                      {project.linkLabel || 'View Project'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground cursor-default">
                      Coming Soon
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
        </div>

        {/* Smaller row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.07 + 0.14 }}
                className="card-clean group p-5 sm:p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3 gap-3">
                  <h3 className="font-serif text-lg font-bold text-foreground group-hover:opacity-70 transition-opacity">
                    {project.title}
                  </h3>
                  <span className="tag shrink-0 mt-0.5">{project.status}</span>
                </div>
                <p className="text-sm text-secondary leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-secondary transition-all duration-200 group-hover:gap-2.5 mt-auto"
                  >
                    {project.linkLabel || 'View Project'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground mt-auto cursor-default">
                    Coming Soon
                  </span>
                )}
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
