"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/Card";
import {
    Code,
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
} from "lucide-react";
import Footer from "@/components/Footer";
import profilePic from "@/public/assets/images/profile-image.jpeg";


export default function About() {
    const [selectedImage, setSelectedImage] = useState(null);

    const skills = {
        backend: [
            { name: "Python, Django", icon: Server, level: "Advanced" },
            { name: "Django Rest Framework", icon: Server, level: "Intermediate" },
            { name: "PostgreSQL", icon: Database, level: "Intermediate" },
            { name: "MySQL", icon: Database, level: "Intermediate" },
            { name: "GraphQL", icon: Globe, level: "Beginner" },
        ],
        frontend: [
            { name: "React", icon: Code, level: "Advanced" },
            { name: "Next.js", icon: Server, level: "Advanced" },
            { name: "Tailwind CSS", icon: Code, level: "Intermediate" },
            { name: "CSS/SASS", icon: Paintbrush, level: "Advanced" },
            { name: "jQuery", icon: Smartphone, level: "Advanced" },
        ],
        devops: [
            { name: "Docker", icon: Cloud, level: "Intermediate" },
            { name: "CI/CD", icon: GitBranch, level: "Intermediate" },
            { name: "Kubernetes", icon: Layers, level: "Beginner" },
        ],
        other: [
            { name: "Git", icon: GitBranch, level: "Advanced" },
            { name: "Agile", icon: Cpu, level: "Advanced" },
        ],
    };

    const education = [
        {
            degree: "Bachelor of Science in Computer Science",
            school: "European University Of Bangladesh",
            year: "2020 - 2024",
            description:
                "Focused on algorithms, data structures, and software engineering principles.",
        },
        {
            degree: "Diploma in Computer Science",
            school: "Thakurgaon Polytechnic Institute",
            year: "2016 - 2020",
            description:
                "Specialized in computer hardware and software.",
        },
    ];

    const services = [
        { name: "Full-Stack Development", icon: Code, description: "I develop full-stack applications using the latest technologies, ensuring seamless integration and functionality across all parts of the stack." },
        { name: "Frontend Development", icon: Code, description: "I create responsive and dynamic user interfaces with modern JavaScript frameworks and CSS pre-processors." },
        { name: "API Integration", icon: Globe, description: "I integrate APIs to enhance the functionality of applications, focusing on seamless data exchange and system interoperability." },
        { name: "DevOps & Deployment", icon: Cloud, description: "I deploy applications using Docker, Kubernetes, and CI/CD pipelines, emphasizing automation, scalability, and maintainability." },
        { name: "Performance Optimization", icon: Cpu, description: "I optimize applications for performance and scalability, reducing load times and improving user experience." },
        { name: "Consulting", icon: Briefcase, description: "I provide expert consulting services to help businesses strategize, implement, and manage their technology solutions effectively." },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-600 to-black text-white">
            <div className="container mx-auto px-4 pt-32 pb-16 max-w-7xl">
                <motion.h1
                    id="about"
                    className="text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-500"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About the Developer
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <motion.div
                        className="md:col-span-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src={profilePic}
                            alt="Profile Picture"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-xl"
                        />
                    </motion.div>

                    <motion.div
                        className="md:col-span-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-black bg-opacity-80 backdrop-blur-md rounded-lg p-8 shadow-xl relative overflow-hidden border border-gray-700">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-700/30 to-gray-900/30"></div>
                            <div className="relative z-10">
                                <div className="space-y-4 text-gray-300">
                                    <p className="text-lg relative pl-6">
                                        Passionate about technology and innovation, I am dedicated to building solutions that not only solve problems but also push the boundaries of what is possible with modern software development.
                                    </p>
                                    <p className="text-lg">
                                        My expertise spans across full-stack development, with a keen interest in both front-end and back-end technologies. I am constantly exploring new frameworks and tools to stay at the forefront of the industry.
                                    </p>
                                    <p className="text-lg relative pr-6">
                                        Outside of work, I enjoy contributing to open-source projects and engaging with the developer community to share knowledge and learn from others. My hobbies include photography and exploring the great outdoors.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    id="skills"
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-semibold mb-6 text-center text-gray-400">
                        Technical Skills
                    </h2>
                    <div className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-lg p-6 shadow-xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-800/20"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {Object.entries(skills).map(
                                ([category, categorySkills]) => (
                                    <div key={category} className="space-y-4">
                                        <h3 className="text-xl font-semibold text-gray-400 capitalize">
                                            {category}
                                        </h3>
                                        {categorySkills.map((skill, index) => (
                                            <motion.div
                                                key={skill.name}
                                                className="flex items-center space-x-2"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: index * 0.1,
                                                }}
                                            >
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-lg">
                                                    <skill.icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <span className="text-gray-400 font-medium">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    id="education"
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold mb-6 text-center text-gray-400">
                        Educational Background
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.degree}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                            >
                                <Card className="bg-gray-800 bg-opacity-70 backdrop-blur-lg overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-600 to-gray-800"></div>
                                    <CardHeader className="relative">
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-gray-600 rounded-bl-full flex items-center justify-center">
                                            <GraduationCap className="text-white w-8 h-8" />
                                        </div>
                                        <CardTitle className="text-2xl text-gray-400">
                                            {edu.degree}
                                        </CardTitle>
                                        <CardDescription className="text-gray-300 text-lg">
                                            {edu.school} | {edu.year}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-300">
                                            {edu.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    id="services"
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold mb-6 text-center text-gray-400">
                        Professional Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                            >
                                <Card className="bg-gray-800 bg-opacity-70 backdrop-blur-lg overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-600 to-gray-800"></div>
                                    <CardHeader className="relative">
                                        <div className="absolute top-5 right-4 w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                                            <service.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <CardTitle className="text-2xl text-gray-400">
                                            {service.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-300">
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
            <Footer />
        </div>
    );
}
