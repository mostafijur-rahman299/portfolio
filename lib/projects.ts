export interface CaseStudy {
  problem: string
  approach: string
  outcome: string
}

export interface Product {
  slug: string
  title: string
  description: string
  tech: string[]
  status: string
  link: string | null
  linkLabel?: string
  year: string
  featured: boolean
  caseStudy?: CaseStudy
}

export interface ClientProject {
  slug: string
  title: string
  description: string
  tech: string[]
  role: string
  status: string
  link: string | null
  linkLabel?: string
  year: string
}

// ── Products I built & own ──────────────────────────────────────────────────

export const myProducts: Product[] = [
  {
    slug: 'toolera',
    title: 'ToolEra',
    description:
      'A free online tool collection with 60+ utilities for developers, designers, and professionals. Includes password generators, image tools, code formatters, calculators, and more.',
    tech: ['Next.js', 'TypeScript', 'SEO', 'Tools'],
    status: 'Active',
    link: 'https://thetoolera.com',
    linkLabel: 'Visit ToolEra',
    year: '2024',
    featured: true,
    caseStudy: {
      problem:
        'TODO — replace with the real story: what gap were you filling? Who were the free online tools out there failing, and why did building your own collection make sense instead of pointing people at existing options?',
      approach:
        'TODO — walk through the actual decisions: why Next.js, how the 60+ tools are organized/generated, how you approached SEO for a tools directory, and any tradeoffs you made along the way.',
      outcome:
        'TODO — add real numbers if you have them (traffic, tool usage, search rankings) or, if not, describe what shipping this taught you and what you would change if you rebuilt it today.',
    },
  },
  {
    slug: 'wapiflow',
    title: 'wapiflow',
    description:
      'A modern API integration platform that simplifies webhook management and workflow automation. Built with Next.js, TypeScript, and real-time database sync.',
    tech: ['Next.js', 'TypeScript', 'Webhooks', 'Database'],
    status: 'Active',
    link: null,
    year: '2024',
    featured: true,
    caseStudy: {
      problem:
        'TODO — describe the specific webhook/workflow pain point that pushed you to build wapiflow instead of using an existing tool like Zapier or n8n.',
      approach:
        'TODO — explain the architecture: how webhook management works, what "real-time database sync" actually does under the hood, and the hardest engineering problem you had to solve.',
      outcome:
        'TODO — where does it stand today (private beta, internal use, early users)? What is the immediate next milestone before a public launch?',
    },
  },
  {
    slug: 'tutorasia',
    title: 'TutorAsia',
    description:
      'An online tutoring platform connecting students with expert tutors. Features video sessions, progress tracking, and interactive learning tools.',
    tech: ['React', 'Node.js', 'Video API', 'Analytics'],
    status: 'Active',
    link: null,
    year: '2023',
    featured: true,
    caseStudy: {
      problem:
        'TODO — who are the students/tutors this serves, and what made the existing tutoring options (in-person or other platforms) inadequate for them?',
      approach:
        'TODO — describe the video session infrastructure, how progress tracking works, and any decisions around scaling or matching tutors to students.',
      outcome:
        'TODO — usage numbers if available, or the current stage of the platform and what you learned building an education product specifically.',
    },
  },
  {
    slug: 'battery-health-checker',
    title: 'Battery Health Checker',
    description:
      'A utility tool that analyzes device battery health and gives recommendations for optimal performance.',
    tech: ['React Native', 'System APIs', 'Analytics', 'Android'],
    status: 'Complete',
    link: 'https://play.google.com/store/apps/details?id=com.mrstech.batterycaremonitor',
    linkLabel: 'View on Play Store',
    year: '2023',
    featured: false,
  },
  {
    slug: 'daily-motivation-quotes',
    title: 'Daily Motivation Quotes',
    description:
      'An elegant app delivering daily motivational quotes with sharing, favorites, and personalized themes.',
    tech: ['React Native', 'APIs', 'Local Storage', 'Android'],
    status: 'Complete',
    link: 'https://play.google.com/store/apps/details?id=com.mrstech.MotivationQuotes',
    linkLabel: 'View on Play Store',
    year: '2022',
    featured: false,
  },
  {
    slug: 'todox',
    title: 'TodoX',
    description:
      'A clean and intuitive task management app for Android, helping users stay organized and productive with a minimal, distraction-free interface.',
    tech: ['React Native', 'Local Storage', 'Android'],
    status: 'Complete',
    link: 'https://play.google.com/store/apps/details?id=com.mahmudsajib01.TodoX',
    linkLabel: 'View on Play Store',
    year: '2022',
    featured: false,
  },
]

// ── Projects I worked on ────────────────────────────────────────────────────

export const clientProjects: ClientProject[] = [
  {
    slug: 'crinf-net',
    title: 'Crinf.net',
    description:
      'A content and information platform delivering structured data and resources to its users. Contributed to backend architecture, API development, and performance optimisation.',
    tech: ['Node.js', 'REST API', 'PostgreSQL', 'Backend'],
    role: 'Backend Engineer',
    status: 'Active',
    link: 'https://crinf.net/',
    linkLabel: 'Visit site',
    year: '2023',
  },
  {
    slug: 'wuseller',
    title: 'WuSeller',
    description:
      'A multi-vendor e-commerce platform enabling sellers to manage listings, orders, and payments. Built scalable backend services and integrated third-party payment gateways.',
    tech: ['React', 'Node.js', 'E-commerce', 'Payments'],
    role: 'Full Stack Engineer',
    status: 'Active',
    link: 'https://www.wuseller.com/',
    linkLabel: 'Visit site',
    year: '2023',
  },
  {
    slug: 'telemedicine-platform',
    title: 'Telemedicine Platform',
    description:
      'A healthcare platform connecting patients with doctors for remote consultations. Developed real-time video call integration, appointment scheduling, and prescription management.',
    tech: ['React', 'WebRTC', 'Node.js', 'Healthcare'],
    role: 'Full Stack Engineer',
    status: 'Complete',
    link: null,
    year: '2022',
  },
  {
    slug: 'resource-aggregation',
    title: 'Resource Aggregation',
    description:
      'A platform that aggregates resources from multiple sources, normalises the data, and presents it through a unified API and dashboard for downstream consumers.',
    tech: ['Node.js', 'Data Pipeline', 'REST API', 'Dashboard'],
    role: 'Backend Engineer',
    status: 'Complete',
    link: null,
    year: '2022',
  },
  {
    slug: 'electricity-management-system',
    title: 'Electricity Management System',
    description:
      'A utility management system for tracking electricity consumption, billing, and reporting across multiple zones. Included real-time monitoring and automated alert features.',
    tech: ['React', 'Node.js', 'IoT', 'Analytics'],
    role: 'Full Stack Engineer',
    status: 'Complete',
    link: null,
    year: '2022',
  },
  {
    slug: 'whatsapp-marketing-platform',
    title: 'WhatsApp Marketing Platform',
    description:
      'A bulk messaging and campaign management tool built on the WhatsApp Business API. Supports contact segmentation, scheduled broadcasts, and delivery analytics.',
    tech: ['Node.js', 'WhatsApp API', 'Queue', 'Analytics'],
    role: 'Backend Engineer',
    status: 'Complete',
    link: null,
    year: '2023',
  },
]
