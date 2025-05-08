import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Layers, Globe, Server, Database, Cloud, Cpu } from "lucide-react"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const apps = [
  {
    id: 7,
    title: "Shipper-Carrier Logistics Platform",
    slug: "shipper-carrier-logistics-platform",
    description:
      "A platform for shippers and carriers to manage logistics and transportation.",
    skills: ["Django", "Django Rest Framework", "React", "Docker", "PostgreSQL", "Celery", "Redis", "React Native", "React Native CLI"],
    demoLink: null,
    githubLink: null,
    icon: Globe,
    color: "from-blue-400 to-indigo-600",
    image: "/projects/poncore/banner.png",
    category: ["web-app", "mobile-app"],
  },
  {
    id: 8,
    title: "Todo App",
    slug: "todo-app",
    description:
      "A todo app that allows users to manage their tasks and projects.",
    skills: ["Django", "Django Rest Framework", "Docker", "PostgreSQL", "React Native", "Expo"],
    demoLink: null,
    githubLink: null,
    icon: Globe,
    color: "from-blue-400 to-indigo-600",
    image: "/projects/todox/banner.jpeg",
    category: ["mobile-app"],
  }
]

export const projectData = [
  {
    id: 6,
    title: "Anonymous Chat App",
    slug: "anonymous-chat",
    description:
      "A chat app that allows users to chat anonymously with each other. It's end-to-end encrypted and secure app.",
    skills: [
      "Django",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Redis",
      "WebSocket",
      "TailwindCSS",
      "Django Channels",
    ],
    demoLink: null,
    githubLink: "https://github.com/mostafijur-rahman299/annonymous-chat",
    icon: Layers,
    color: "from-violet-400 to-purple-600",
    image: "/projects/anonymous-chat/banner.jpg",
    category: ["web-app"],  
  },
  {
    id: 0,
    title: "WhatsApp API Integration & Customer Management",
    slug: "whatsapp-integration",
    description: "A system that integrates WhatsApp API for customer communication and management.",
    skills: [
      "Django",
      "Django Rest Framework",
      "React",
      "Redux",
      "WhatsApp API",
      "PostgreSQL",
      "Docker",
      "Celery",
      "Django Channels",
      "RabbitMQ",
    ],
    demoLink: "https://app.whatsupseller.com/",
    githubLink: null,
    icon: Globe,
    color: "from-blue-400 to-indigo-600",
    image: "/projects/whatsapp-integration/banner.webp",
    category: ["web-app"],
  },
  {
    id: 1,
    title: "Telemedicine Consultation App",
    slug: "telemedicine",
    description: "A platform where patients can consult with doctors using AI-driven medical suggestions.",
    skills: ["Django", "Django Rest Framework", "React", "Docker", "PostgreSQL", "OpenAI API", "Celery", "Redis"],
    demoLink: "https://9jatelemedicine.com/",
    githubLink: null,
    icon: Server,
    color: "from-pink-400 to-rose-600",
    image: "/projects/telemedicine/banner.webp",
    category: ["web-app"],
  },  
  {
    id: 2,
    title: "Poll & PTC Earn Platform",
    slug: "poll-ptc-earn",
    description: "A platform where users can earn by participating in polls, PTC, and surveys.",
    skills: [
      "Django",
      "Django Rest Framework",
      "PostgreSQL",
      "VanillaJS",
      "jQuery",
      "Third Party API Integration",
      "Celery",
      "Redis",
    ],
    demoLink: "https://crinf.net/",
    githubLink: null,
    icon: Database,
    color: "from-cyan-400 to-blue-600",
    image: "/projects/crinf/banner.webp",
    category: ["web-app"],
  },
  {
    id: 4,
    title: "Property Management System",
    slug: "property-management",
    description:
      "A platform for property owners and managers to oversee real estate listings, manage tenants, and track rent payments.",
    skills: ["Django", "React", "Docker", "MySQL", "Stripe API", "Google Map", "Google Place API"],
    demoLink: "https://wizerproperties.com/",
    githubLink: null,
    icon: Cloud,
    color: "from-purple-500 to-blue-400",
    image: "/projects/property-management/banner.jpeg",
    category: ["web-app"],
  },
  {
    id: 5,
    title: "Enterprise Resource Planning (ERP)",
    slug: "erp",
    description:
      "It's designed to streamline business processes, including finance, inventory, human resources, and sales, within a single, integrated platform.",
    skills: ["Python", "Django", "Django Rest Framework", "Docker", "PostgreSQL", "Celery", "Redis", "React", "React Native"],
    demoLink: null,
    githubLink: null,
    icon: Cpu,
    color: "from-amber-400 to-orange-600",
    image: "/projects/erp/banner.jpeg",
    category: ["web-app"],
  },

  ...apps,
]


