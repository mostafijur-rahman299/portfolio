import { Projects } from "@/app/projects/components/Projects"
import Telemedicine from "@/public/assets/images/projects/telemedicine/banner.webp";
import Crinf from "@/public/assets/images/projects/crinf/banner.webp";
import WhatsappIntegration from "@/public/assets/images/projects/whatsapp-integration/banner.webp";
import PropertyManagement from "@/public/assets/images/projects/property-management/banner.jpeg";
import ResumeChecker from "@/public/assets/images/projects/resume-checker/banner.jpeg";
import ERP from "@/public/assets/images/projects/erp/banner.jpeg";

export const allProjects = [
    {
        id: 3,
        title: "WhatsApp API Integration & Customer Management",
        description: "A system that integrates WhatsApp API for customer communication and management.",
        image: WhatsappIntegration,
        demo_link: "https://app.whatsupseller.com/",
        github: "#",
        color: "from-green-500 to-teal-500",
        skills: ["Django", "Django Rest Framework", "React", "Redux", "WhatsApp API", "PostgreSQL", "Celery", "Websocket", "RabbitMQ"],
    },
  {
      id: 1,
      title: "Telemedicine Consultation System",
      description: "A platform where patients can consult with doctors using AI-driven medical suggestions.",
      image: Telemedicine,
      demo_link: "#",
      github: "#",
      color: "from-blue-400 to-indigo-400",
      skills: ["Django", "Django Rest Framework", "React", "PostgreSQL", "OpenAI API", "Celery", "Redis"],
  },
  {
      id: 2,
      title: "Poll & PTC Earn Platform",
      description: "A platform where users can earn by participating in polls, PTC, and surveys.",
      image: Crinf,
      demo_link: "#",
      github: "#",
      color: "from-yellow-400 to-orange-400",
      skills: ["Django", "Django Rest Framework", "PostgreSQL", "VanillaJS", "jQuery", "Third Party API Integration", "Celery", "Redis"],
  },
  {
      id: 4,
      title: "Property Management System",
      description: "A platform for property owners and managers to oversee real estate listings, manage tenants, and track rent payments.",
      image: PropertyManagement,
      demo_link: "#",
      github: "#",
      color: "from-purple-500 to-blue-400",
      skills: ["Django", "React", "PostgreSQL", "Stripe API", "Google Map", "Google Place API"],
  },
  {
      id: 5,
      title: "Enterprise Resource Planning (ERP)",
      description: "An ERP system for managing business operations, including inventory, accounting, and customer relationship management.",
      image: ERP,
      demo_link: "#",
      github: "#",
      color: "from-blue-400 to-indigo-400",
      skills: ["Python", "Django", "Django Rest Framework", "PostgreSQL", "Celery", "Redis"],
  },
  {
    id: 6,
    title: "AI Resume Checker",
    description: "An AI-powered tool that reviews and analyzes resumes, providing insights and suggestions to improve content and structure.",
    image: ResumeChecker,
    demo_link: "#",
    github: "#",
    color: "from-red-400 to-pink-500",
    skills: ["Python", "OpenAI API", "Natural Language Processing", "Django"],
}
];

export default function Page() {
  return <Projects />
}
