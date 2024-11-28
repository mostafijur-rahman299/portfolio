"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Linkedin, Mail, Phone, Github } from "lucide-react";
import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";

export default function Page() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-600 to-gray-700 py-32 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <Button
                    asChild
                    variant="secondary"
                    className="bg-slate-100 text-gray-600 hover:bg-slate-200 mb-4"
                >
                    <a href="/assets/download/mostafijur-resume.pdf" download>
                        <Download className="mr-2 h-4 w-4" /> Download Resume
                    </a>
                </Button>

                <Card className="bg-slate-100 shadow-xl rounded-lg overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <CardTitle className="text-3xl font-bold">MOSTAFIJUR RAHMAN</CardTitle>
                                <p className="mt-2 text-gray-300">
                                    Software Engineer
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-4">
                            <a
                                href="mailto:hello.mostafij@gmail.com"
                                className="flex items-center text-gray-300 hover:text-white"
                            >
                                <Mail className="mr-2 h-4 w-4" />{" "}
                                hello.mostafij@gmail.com
                            </a>
                            <a
                                href="https://github.com/mostafijur-rahman299"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-300 hover:text-white"
                            >
                                <Github className="mr-2 h-4 w-4" />{" "}
                                mostafijur-rahman299
                            </a>
                            <a
                                href="https://linkedin.com/in/hello-mostafij"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-300 hover:text-white"
                            >
                                <Linkedin className="mr-2 h-4 w-4" />{" "}
                                hello-mostafij
                            </a>
                            <span className="flex items-center text-gray-300">
                                <Phone className="mr-2 h-4 w-4" />{" "}
                                +8801789929182
                            </span>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                                Projects
                            </h2>
                            <div className="space-y-6">
                                <ProjectCard
                                    title="Telemedicine System"
                                    techStack="Django, React, PostgreSQL, OpenAI API"
                                    description={[
                                        "Developed a telemedicine platform for remote patient consultations, improving patient engagement by 40%.",
                                        "Integrated one-time messaging, doctor responses, and automated diagnosis and treatment suggestions using the OpenAI API.",
                                        "Optimized backend processes using Django's ORM for fast data access and React's dynamic rendering for smooth user experiences.",
                                        "Ensured compliance with healthcare standards and optimized backend processes, reducing doctor response time and enhancing patient satisfaction.",
                                    ]}
                                />
                                <ProjectCard
                                    title="WhatsApp API Integration & Customer Management System"
                                    techStack="Django, React, PostgreSQL, WhatsApp API"
                                    description={[
                                        "Developed a customer management system integrated with the WhatsApp API, enabling personalized messaging and automation of customer interactions.",
                                        "Implemented features for creating meta templates, customer profiles, marketing messages and scheduling reminder messages, along with real-time customer messaging.",
                                        "Improved system performance using Django's efficient query handling and React's dynamic UI rendering, reducing manual effort by 80%.",
                                    ]}
                                />
                            </div>
                        </section>
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                                Employment
                            </h2>
                            <Card className="bg-gray-50">
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-700">
                                        Software Engineer
                                    </h3>
                                    <p className="text-gray-600">
                                        VaidTech Services, Dhaka, Bangladesh
                                    </p>
                                    <p className="text-gray-600">
                                        2020-Present
                                    </p>
                                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                                        <li>
                                            Contributed to the development of a
                                            telemedicine platform, improving
                                            patient-doctor consultation
                                            efficiency.
                                        </li>
                                        <li>
                                            Integrated the WhatsApp API for
                                            customer management, automating 80%
                                            of customer interactions and
                                            improving customer retention by 25%.
                                        </li>
                                        <li>
                                            Developed a rewards-based platform
                                            for user engagement through polls,
                                            PTC, and surveys, serving 12,000+
                                            users.
                                        </li>
                                        <li>
                                            Deployed projects using Docker,
                                            streamlining the development process
                                            and reducing environment-related
                                            issues.
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </section>
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                                Education
                            </h2>
                            <div className="space-y-4">
                                <Card className="bg-gray-50">
                                    <CardContent className="p-4">
                                        <h3 className="text-xl font-semibold text-gray-700">
                                            Bachelor of Science in Computer
                                            Science
                                        </h3>
                                        <p className="text-gray-600">
                                            European University Of Bangladesh
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-gray-50">
                                    <CardContent className="p-4">
                                        <h3 className="text-xl font-semibold text-gray-700">
                                            Diploma In Computer Technology
                                        </h3>
                                        <p className="text-gray-600">
                                            Thakurgaon Polytechnic Institute
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                                Skills
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <SkillCard
                                    title="Programming Languages"
                                    skills={[
                                        "Python",
                                        "JavaScript",
                                        "HTML",
                                        "CSS",
                                    ]}
                                />
                                <SkillCard
                                    title="Backend Technologies"
                                    skills={[
                                        "Django",
                                        "Django Rest Framework",
                                        "MySQL",
                                        "PostgreSQL",
                                        "Redis",
                                        "GraphQL",
                                        "RESTful API",
                                    ]}
                                />
                                <SkillCard
                                    title="Frontend Technologies"
                                    skills={[
                                        "React.js",
                                        "Next.js",
                                        "Bootstrap",
                                        "VanillaJS",
                                        "jQuery",
                                    ]}
                                />
                                <SkillCard
                                    title="DevOps"
                                    skills={[
                                        "Docker",
                                        "Kubernetes",
                                        "Git",
                                        "CI/CD Pipeline",
                                    ]}
                                />
                            </div>
                        </section>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}

const ProjectCard = ({ title, techStack, description }) => (
    <Card className="bg-gray-50">
        <CardContent className="p-4">
            <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
            <p className="text-gray-600 mb-2">Tech Stack: {techStack}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </CardContent>
    </Card>
);

const SkillCard = ({ title, skills }) => (
    <Card className="bg-gray-50">
        <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </CardContent>
    </Card>
);
