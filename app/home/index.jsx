"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    Code,
    Github,
    Linkedin,
    Twitter,
    GraduationCap,
    Server,
    Database,
    Globe,
    Cloud,
    Cpu,
    GitBranch,
    Layers,
    Paintbrush,
    Smartphone,
    Briefcase,
    ChevronDown,
    Zap,
    ExternalLink,
    ArrowRight,
    Mouse,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/Button";
import Profile from "@/public/assets/images/profile-image.jpeg";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/Card";

import {
    motion,
    useAnimation,
    useInView,
    AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/Footer";
import ContactSection from "@/app/contact/page";
import { allProjects } from "@/app/projects/page";
import { Badge } from "@/components/Badge";

const skills = {
    backend: [
        {
            name: "Python, Django",
            icon: Server,
            level: "Advanced",
            progress: 80,
        },
        {
            name: "Django Rest Framework",
            icon: Server,
            level: "Advanced",
            progress: 75,
        },
        {
            name: "PostgreSQL",
            icon: Database,
            level: "Intermediate",
            progress: 70,
        },
        { name: "MySQL", icon: Database, level: "Intermediate", progress: 65 },
        { name: "GraphQL", icon: Globe, level: "Beginner", progress: 40 },
        { name: "REST API", icon: Globe, level: "Intermediate", progress: 40 },

    ],
    frontend: [
        { name: "React", icon: Code, level: "Advanced", progress: 95 },
        { name: "Next.js", icon: Server, level: "Intermediate", progress: 90 },
        {
            name: "Tailwind CSS",
            icon: Code,
            level: "Intermediate",
            progress: 80,
        },
        { name: "CSS/SASS", icon: Paintbrush, level: "Advanced", progress: 85 },
        { name: "jQuery", icon: Smartphone, level: "Advanced", progress: 85 },
    ],
    devops: [
        { name: "Docker", icon: Cloud, level: "Intermediate", progress: 70 },
        { name: "CI/CD", icon: GitBranch, level: "Beginner", progress: 75 },
        { name: "Kubernetes", icon: Layers, level: "Beginner", progress: 45 },
    ],
    other: [
        { name: "Git", icon: GitBranch, level: "Advanced", progress: 90 },
        { name: "Agile", icon: Cpu, level: "Advanced", progress: 85 },
    ],
};

const education = [
    {
        degree: "Bachelor of Science in Computer Science",
        school: "European University Of Bangladesh",
        year: "2021 - 2025",
        description:
            "Focused on algorithms, data structures, and software engineering principles.",
        courses: [
            "Advanced Algorithms",
            "Machine Learning",
            "Database Systems",
            "Web Development",
        ],
    },
    {
        degree: "Diploma in Computer Science",
        school: "Thakurgaon Polytechnic Institute",
        year: "2016 - 2020",
        description: "Specialized in computer hardware and software.",
        courses: [
            "Computer Architecture",
            "Networking",
            "Programming Fundamentals",
            "Operating Systems",
        ],
    },
];

const services = [
    {
        name: "Full-Stack Development",
        icon: Code,
        description:
            "I develop full-stack applications using the latest technologies, ensuring seamless integration and functionality across all parts of the stack.",
        technologies: ["Python", "Django", "Next.js", "React", "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "AWS", "CI/CD"],
    },
    {
        name: "Frontend Development",
        icon: Paintbrush,
        description:
            "I create responsive and dynamic user interfaces with modern JavaScript frameworks and CSS pre-processors.",
        technologies: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "SASS",
            "TypeScript",
        ],
    },
    {
        name: "API Integration",
        icon: Globe,
        description:
            "I integrate APIs to enhance the functionality of applications, focusing on seamless data exchange and system interoperability.",
        technologies: ["RESTful APIs", "GraphQL", "Axios", "Fetch API", "Postman", "Insomnia", "Swagger", "OpenAPI"],
    },
    {
        name: "DevOps & Deployment",
        icon: Cloud,
        description:
            "I deploy applications using Docker, Kubernetes, and CI/CD pipelines, emphasizing automation, scalability, and maintainability.",
        technologies: [
            "Docker",
            "Kubernetes",
            "Jenkins",
            "GitHub Actions",
            "AWS",
        ],
    },
    {
        name: "Performance Optimization",
        icon: Cpu,
        description:
            "I optimize applications for performance and scalability, reducing load times and improving user experience.",
        technologies: [
            "Lazy Loading",
            "Code Splitting",
            "Caching",
            "Database Indexing",
        ],
    },
    {
        name: "Consulting",
        icon: Briefcase,
        description:
            "I provide expert consulting services to help businesses strategize, implement, and manage their technology solutions effectively.",
        technologies: [
            "Technical Architecture",
            "Code Review",
            "Best Practices",
            "Team Training",
        ],
    },
];

function SkillCard() {
    const [activeTab, setActiveTab] = useState("skills");
    const [expandedService, setExpandedService] = useState(null);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.1 },
        });
    }, [activeTab, controls]);

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            key="skills"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(skills).map(([category, categorySkills]) => (
                    <Card
                        key={category}
                        className="bg-white/10 backdrop-blur-md overflow-hidden border-none transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
                    >
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold text-pink-300 capitalize">
                                {category}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {categorySkills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        className="relative"
                                        onHoverStart={() =>
                                            setHoveredSkill(skill.name)
                                        }
                                        onHoverEnd={() => setHoveredSkill(null)}
                                    >
                                        <div className="flex items-center space-x-3 mb-2">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                                                <skill.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-200">
                                                    {skill.name}
                                                </p>
                                                <Badge
                                                    variant="secondary"
                                                    className="mt-1"
                                                >
                                                    {skill.level}
                                                </Badge>
                                            </div>
                                        </div>
                                        {/* <Progress value={skill.progress} className="h-2 bg-gray-700" indicatorClassName="bg-gradient-to-r from-pink-500 to-purple-600" /> */}
                                        {hoveredSkill === skill.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded"
                                            >
                                                {skill.progress}%
                                            </motion.div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.div>
    );
}

function EducationCard() {
    const [activeTab, setActiveTab] = useState("skills");
    const [expandedService, setExpandedService] = useState(null);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.1 },
        });
    }, [activeTab, controls]);

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            key="education"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                    <Card
                        key={edu.degree}
                        className="bg-white/10 backdrop-blur-md overflow-hidden border-none transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
                    >
                        <CardHeader className="relative pb-0">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-bl-full flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                                <GraduationCap className="text-white w-8 h-8" />
                            </div>
                            <CardTitle className="text-2xl text-gray-200">
                                {edu.degree}
                            </CardTitle>
                            <CardDescription className="text-gray-300 text-lg">
                                {edu.school} | {edu.year}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                {edu.description}
                            </p>
                            <h4 className="text-lg font-semibold text-pink-300 mb-2">
                                Key Courses:
                            </h4>
                            <ul className="list-disc list-inside text-gray-300">
                                {edu.courses.map((course, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        {course}
                                    </motion.li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.div>
    );
}

const ProjectCard = ({ project, isHovered, onHover }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
    >
        <Card
            className={`h-full w-full relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${project.color}`}
            onMouseEnter={() => onHover(project.id)}
            onMouseLeave={() => onHover(null)}
        >
            <CardHeader className="relative pb-0">
                <motion.div
                    className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <project.icon className="w-10 h-10 text-white" />
                </motion.div>
                <CardTitle className="text-2xl font-bold text-white mb-2">
                    {project.title}
                </CardTitle>
                <CardDescription className="text-white/80">
                    {project.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <motion.div className="mb-4 flex flex-wrap" layout>
                    {project.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Badge className="mr-2 mb-2 bg-white/20 text-white">
                                {skill}
                            </Badge>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="flex flex-wrap gap-2">
                    <Button
                        variant="secondary"
                        size="sm"
                        asChild
                        className="bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:shadow-lg"
                    >
                        <Link href={`/projects/${project.title}`}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    {project.demoLink && (
                        <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="border-white/40 text-white bg-white/10 transition-all duration-300 hover:shadow-lg"
                        >
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    )}
                    {project.githubLink && (
                        <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="border-white/40 text-white bg-white/10 transition-all duration-300 hover:shadow-lg"
                        >
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </a>
                        </Button>
                    )}
                </div>
            </CardContent>
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute -top-2 -left-2 bg-white rounded-full p-2 shadow-lg"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                        }}
                    >
                        <Zap className="h-6 w-6 text-black" />
                    </motion.div>
                )}
            </AnimatePresence>
        </Card>
    </motion.div>
);


function ServicesComponent() {
    const [activeTab, setActiveTab] = useState("skills");
    const [expandedService, setExpandedService] = useState(null);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.1 },
        });
    }, [activeTab, controls]);

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            key="services"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <Card
                        key={service.name}
                        className="bg-white/10 backdrop-blur-md overflow-hidden border-none transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
                    >
                        <CardHeader className="relative pb-0">
                            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                                <service.icon className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle className="text-2xl text-gray-200">
                                {service.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{
                                    height:
                                        expandedService === service.name
                                            ? "auto"
                                            : "80px",
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="text-gray-300 mb-4">
                                    {service.description}
                                </p>
                                {expandedService === service.name && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <h4 className="text-lg font-semibold text-pink-300 mb-2">
                                            Technologies:
                                        </h4>
                                        <ul className="list-disc list-inside text-gray-300">
                                            {service.technologies.map(
                                                (tech, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        initial={{
                                                            opacity: 0,
                                                            x: -20,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            x: 0,
                                                        }}
                                                        transition={{
                                                            delay: idx * 0.1,
                                                        }}
                                                    >
                                                        {tech}
                                                    </motion.li>
                                                )
                                            )}
                                        </ul>
                                    </motion.div>
                                )}
                            </motion.div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="mt-2"
                                onClick={() =>
                                    setExpandedService(
                                        expandedService === service.name
                                            ? null
                                            : service.name
                                    )
                                }
                            >
                                {expandedService === service.name
                                    ? "Read Less"
                                    : "Read More"}
                                <ChevronDown
                                    className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                                        expandedService === service.name
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.div>
    );
}

export function HomeComponent() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white overflow-hidden">
            {/* Enhanced background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/circuit-pattern.svg')] opacity-5"></div>
                <div
                    className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
                    style={{
                        transform: `translate(${
                            Math.sin(scrollY * 0.01) * 50
                        }px, ${Math.cos(scrollY * 0.01) * 50}px)`,
                    }}
                ></div>
                <div
                    className="absolute top-3/4 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
                    style={{
                        transform: `translate(${
                            Math.cos(scrollY * 0.01) * 50
                        }px, ${Math.sin(scrollY * 0.01) * 50}px)`,
                    }}
                ></div>
                <div
                    className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
                    style={{
                        transform: `translate(${
                            Math.sin(scrollY * 0.02) * 50
                        }px, ${Math.cos(scrollY * 0.02) * 50}px)`,
                    }}
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <HomeContent />
                <SkillsSection />
                <EducationSection />
                <ProjectsSection />
                <ServicesSection />
                <ContactSection />
                <Footer />
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <Mouse className="w-6 h-6 mb-2 animate-bounce" />
                <span className="text-sm">Scroll to explore</span>
            </motion.div>

            {/* Enhanced particles */}
            <Particles scrollY={scrollY} />
        </div>
    );
}

function Particles({ scrollY }) {
    return (
        <div className="fixed inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    initial={{
                        x:
                            Math.random() *
                            (typeof window !== "undefined"
                                ? window.innerWidth
                                : 1000),
                        y:
                            Math.random() *
                            (typeof window !== "undefined"
                                ? window.innerHeight
                                : 1000),
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        y: [
                            null,
                            Math.random() *
                                (typeof window !== "undefined"
                                    ? window.innerHeight
                                    : 1000),
                        ],
                        x: [
                            null,
                            Math.random() *
                                (typeof window !== "undefined"
                                    ? window.innerWidth
                                    : 1000),
                        ],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        opacity: Math.random() * 0.5 + 0.25,
                        transform: `translateY(${scrollY * 0.2}px)`,
                    }}
                />
            ))}
        </div>
    );
}

function HomeContent() {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();
    const [currentSkill, setCurrentSkill] = useState(0);
    const skills = ["Django", "React", "Next.js", "Docker", "AWS", "CI/CD"];
    const router = useRouter();

    const handleHover = () => {
        setIsHovered(!isHovered);
        controls.start({
            scale: isHovered ? 1 : 1.05,
            transition: { duration: 0.3 },
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkill((prev) => (prev + 1) % skills.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="relative z-10 container mx-auto px-4 py-20 sm:py-24 md:py-28 lg:py-32 max-w-6xl ">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                <motion.div
                    className="w-full lg:w-1/2 sm:w-1/2 md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="relative inline-block mx-auto lg:mx-0">
                        <motion.div
                            className="relative"
                            animate={controls}
                            onHoverStart={handleHover}
                            onHoverEnd={handleHover}
                        >
                            <div className="w-full max-w-xs h-full max-h-xs lg:max-w-sm lg:max-h-sm overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out">
                                <Image
                                    src={Profile}
                                    alt="Profile"
                                    width={350}
                                    height={300}
                                    className="object-cover transition-all duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-900 mix-blend-multiply opacity-80"></div>
                               
                            </div>
                        </motion.div>
                        <motion.div
                            className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-full p-3 sm:p-4 shadow-lg"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.5,
                            }}
                        >
                            <Code className="h-8 w-8 sm:h-12 sm:w-12 text-indigo-600" />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full lg:w-10/12 sm:w-1/2 md:w-1/2 text-center lg:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2,
                    }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
                        Mostafijur Rahman
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl text-indigo-200 mb-4 sm:mb-6">
                        Full-Stack Software Engineer
                    </p>
                    <div className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 sm:mb-8">
                        <p className="mb-4">
                        Hi, I’m Mostafijur Rahman, full-stack software developer with 4+ years of experience delivering scalable, high-impact web and mobile solutions. I specialize in crafting innovative, user-focused products that exceed client expectations. Let’s collaborate to turn your ideas into exceptional results.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start space-x-2">
                            <span className="font-semibold">Skills:</span>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentSkill}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="inline-block bg-pink-600 text-white px-3 py-1 rounded"
                                >
                                    {skills[currentSkill]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                        <Link href="#contact">
                            <Button
                                variant="secondary"
                                className="flex items-center text-indigo-900 font-bold bg-white hover:bg-indigo-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <Briefcase className="h-6 w-6 mr-2" /> Contact
                                Me
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            className="flex items-center bg-white/10 transition-colors duration-300"
                            onClick={() => {
                                router.push("/about");
                            }}
                        >
                            <ChevronDown className="h-6 w-6 mr-2" /> Learn More
                        </Button>
                    </div>
                    <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                        <motion.a
                            href="https://github.com/mostafijur-rahman299"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white hover:text-indigo-200 transition-colors duration-300"
                        >
                            <Github className="h-8 w-8" />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/hello-mostafij"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white hover:text-indigo-200 transition-colors duration-300"
                        >
                            <Linkedin className="h-8 w-8" />
                        </motion.a>
                        <motion.a
                            href="https://x.com/mostafijur_"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white hover:text-indigo-200 transition-colors duration-300"
                        >
                            <Twitter className="h-8 w-8" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

function SkillsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, staggerChildren: 0.1 },
                    },
                }}
            >
                <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-300">
                    Skills & Expertise
                </h2>
                <SkillCard />
            </motion.div>
        </section>
    );
}

function EducationSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <section
            ref={ref}
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900/50 to-purple-800/50"
        >
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, staggerChildren: 0.1 },
                    },
                }}
            >
                <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-300">
                    Educational Journey
                </h2>
                <EducationCard />
            </motion.div>
        </section>
    );
}

function ProjectsSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
            <div className="max-w-7xl mx-auto" ref={containerRef}>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                >
                    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-300">  
                    Projects Showcase
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <AnimatePresence>
                        {allProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                isHovered={hoveredIndex === project.id}
                                onHover={setHoveredIndex}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <section
            ref={ref}
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-800 to-indigo-900"
        >
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, staggerChildren: 0.1 },
                    },
                }}
            >
                <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-300">
                    Services Offered
                </h2>
                <ServicesComponent />
            </motion.div>
        </section>
    );
}


