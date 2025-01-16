import ProjectsComponent from "@/app/projects/components/Projects";
import { Server, Database, Globe, Cloud, Cpu, Layers } from "lucide-react";

export const allProjects = [
    {
        id: 6,
        title: "Anonymous Chat App",
        description: "A chat app that allows users to chat anonymously with each other. It's end-to-end encrypted and secure app.",
        skills: ["Django", "Next.js", "PostgreSQL", "Docker", "Kubernetes", "Redis", "WebSocket", "TailwindCSS", "Django Channels"],
        demoLink: null,
        githubLink: "https://github.com/mostafijur-rahman299/annonymous-chat",
        icon: Layers,
        color: "from-violet-400 to-purple-600",
    },
    {
        id: 0,
        title: "WhatsApp API Integration & Customer Management",
        description:
            "A system that integrates WhatsApp API for customer communication and management.",
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
    },

    {
        id: 1,
        title: "Telemedicine Consultation App",
        description:
            "A platform where patients can consult with doctors using AI-driven medical suggestions.",
        skills: [
            "Django",
            "Django Rest Framework",
            "React",
            "Docker",
            "PostgreSQL",
            "OpenAI API",
            "Celery",
            "Redis",
        ],
        demoLink: "https://9jatelemedicine.com/",
        githubLink: null,
        icon: Server,
        color: "from-pink-400 to-rose-600",
    },
    {
        id: 3,
        demoLink: "https://crinf.net/",
        githubLink: null,
        icon: Database,
        color: "from-cyan-400 to-blue-600",
        id: 2,
        title: "Poll & PTC Earn Platform",
        description:
            "A platform where users can earn by participating in polls, PTC, and surveys.",
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
    },
    {
        id: 4,
        demoLink: "https://wizerproperties.com/",
        githubLink: null,
        icon: Cloud,
        color: "from-emerald-400 to-teal-600",
        title: "Property Management System",
        description:
            "A platform for property owners and managers to oversee real estate listings, manage tenants, and track rent payments.",
        color: "from-purple-500 to-blue-400",
        skills: [
            "Django",
            "React",
            "Docker",
            "MySQL",
            "Stripe API",
            "Google Map",
            "Google Place API",
        ],
    },
    {
        id: 5,

        demoLink: "https://ml-pipeline.example.com",
        githubLink: "https://github.com/yourusername/ml-pipeline",
        icon: Cpu,
        color: "from-amber-400 to-orange-600",
        title: "Enterprise Resource Planning (ERP)",
        description:
            "It's designed to streamline business processes, including finance, inventory, human resources, and sales, within a single, integrated platform.",
        skills: [
            "Python",
            "Django",
            "Django Rest Framework",
            "Docker",
            "PostgreSQL",
            "Celery",
            "Redis",
        ],
    },
    
];

export default function Page() {
    return <ProjectsComponent />;
}
