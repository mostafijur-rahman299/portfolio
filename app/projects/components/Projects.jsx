"use client";

import React, { useState, useRef, useEffect } from "react";
import {
    motion,
    useAnimation,
    useInView,
    AnimatePresence,
} from "framer-motion";
import {
    ExternalLink,
    Github,
    Zap,
    ChevronDown,
    Mail,
    Menu,
    X,
    Moon,
    Sun,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/Tooltip";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const projects = [
    {
        title: "CSS for the shell of it",
        description: "Not all work needs to lead somewhere.",
        image: "/placeholder.svg?height=100&width=100",
        link: "#",
        github: "#",
        color: "from-emerald-400 to-cyan-400",
        skills: ["CSS", "Design", "Creativity"],
    },
    {
        title: "Neon Nexus",
        description: "A futuristic web platform for digital art exhibitions.",
        image: "/placeholder.svg?height=600&width=800",
        link: "#",
        github: "#",
        color: "from-pink-500 to-purple-500",
        skills: ["React", "Three.js", "WebGL", "Node.js", "MongoDB"],
    },
    {
        title: "Neon Nexus",
        description: "A futuristic web platform for digital art exhibitions.",
        image: "/placeholder.svg?height=600&width=800",
        link: "#",
        github: "#",
        color: "from-pink-500 to-purple-500",
        skills: ["React", "Three.js", "WebGL", "Node.js", "MongoDB"],
    },
    {
        title: "Neon Nexus",
        description: "A futuristic web platform for digital art exhibitions.",
        image: "/placeholder.svg?height=600&width=800",
        link: "#",
        github: "#",
        color: "from-pink-500 to-purple-500",
        skills: ["React", "Three.js", "WebGL", "Node.js", "MongoDB"],
    },
    // ... (include the rest of the projects)
];

const allTags = Array.from(
    new Set(projects.flatMap((project) => project.skills))
);

const SkillBadge = ({ skill, onClick, isActive }) => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Badge
                        variant="secondary"
                        className={`mr-2 mb-2 cursor-pointer ${
                            isActive
                                ? "bg-primary text-primary-foreground"
                                : "bg-primary/10 text-primary hover:bg-primary/20"
                        }`}
                        onClick={onClick}
                    >
                        {skill}
                    </Badge>
                </motion.div>
            </TooltipTrigger>
            <TooltipContent>
                <p>Filter by {skill}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

export function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedTags, setSelectedTags] = useState([]);

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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    const filteredProjects =
        selectedTags.length > 0
            ? projects.filter((project) =>
                  selectedTags.every((tag) => project.skills.includes(tag))
              )
            : projects;

    const toggleTag = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-200 to-teal-300 text-foreground overflow-hidden transition-all duration-500">
            <main className="relative z-10 pt-32 pb-16" ref={containerRef}>
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            delay: 0.2,
                        }}
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-8 text-emerald-800"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Projects.
                        </motion.h1>
                        <motion.p
                            className="text-xl text-emerald-700 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            Some thoughts, reflections, & notes on design and
                            development,
                            <br className="hidden md:inline" />
                            along with some latest work in progress.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-2 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {allTags.map((tag) => (
                            <SkillBadge
                                key={tag}
                                skill={tag}
                                onClick={() => toggleTag(tag)}
                                isActive={selectedTags.includes(tag)}
                            />
                        ))}
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="relative group"
                                variants={itemVariants}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            >
                                <motion.div
                                    className="relative overflow-hidden rounded-2xl shadow-lg"
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={600}
                                        className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                    />
                                    <motion.div
                                        className={`absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-90 bg-gradient-to-br ${project.color}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.7 }}
                                        whileHover={{ opacity: 0.9 }}
                                    />
                                    <motion.div
                                        className="absolute inset-0 flex flex-col justify-end p-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h2 className="text-2xl font-bold mb-2 text-white">
                                            {project.title}
                                        </h2>
                                        <p className="text-sm mb-4 text-white">
                                            {project.description}
                                        </p>
                                        <div className="mb-4 flex flex-wrap">
                                            {project.skills.map(
                                                (skill, skillIndex) => (
                                                    <Badge
                                                        key={skillIndex}
                                                        variant="secondary"
                                                        className="mr-2 mb-2 bg-white/20 text-white"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                )
                                            )}
                                        </div>
                                        <div className="flex space-x-4">
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                className="bg-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300"
                                                asChild
                                            >
                                                <Link href="/projects/new-project">
                                                    View Project
                                                </Link>
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                className="bg-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300"
                                                asChild
                                            >
                                                <a href={project.github}>
                                                    GitHub
                                                    <Github className="ml-2 h-4 w-4" />
                                                </a>
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                className="bg-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300"
                                                asChild
                                            >
                                                <a href={project.link}>
                                                    Live Demo
                                                    <ExternalLink className="ml-2 h-4 w-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </motion.div>
                                </motion.div>
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg"
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
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
