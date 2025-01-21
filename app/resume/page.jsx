"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Linkedin, Mail, Phone, Github, Code } from 'lucide-react';
import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white overflow-hidden flex flex-col items-center justify-center relative py-32 ">
            

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 relative z-10"
            >
                <Button
                    asChild
                    variant="secondary"
                    className="bg-white text-indigo-600 hover:bg-indigo-100 mb-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                    <a href="/assets/download/mostafijur-resume.pdf" download>
                        <Download className="mr-2 h-4 w-4" /> Download Resume
                    </a>
                </Button>
                <Card className="bg-white/10 shadow-xl rounded-lg overflow-hidden backdrop-blur-md border border-white/20">
                    <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                        <div>
                            <CardTitle className="text-3xl font-bold">MOSTAFIJUR RAHMAN</CardTitle>
                            <p className="mt-2 text-indigo-200">
                                Software Engineer
                            </p>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-4">
                            <a
                                href="mailto:hello.mostafij@gmail.com"
                                className="flex items-center text-indigo-200 hover:text-white transition-colors duration-300"
                            >
                                <Mail className="mr-2 h-4 w-4" />
                                hello.mostafij@gmail.com
                            </a>
                            <a
                                href="https://github.com/mostafijur-rahman299"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-indigo-200 hover:text-white transition-colors duration-300"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                mostafijur-rahman299
                            </a>
                            <a
                                href="https://linkedin.com/in/hello-mostafij"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-indigo-200 hover:text-white transition-colors duration-300"
                            >
                                <Linkedin className="mr-2 h-4 w-4" />
                                hello-mostafij
                            </a>
                            <span className="flex items-center text-indigo-200">
                                <Phone className="mr-2 h-4 w-4" />
                                +8801789929182
                            </span>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <ResumeContent />
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}

function ResumeContent() {
    return (
        <div className="space-y-8">
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-indigo-200">Projects</h2>
                <div className="space-y-4">
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
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-indigo-200">Employment</h2>
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                    <CardContent className="p-4">
                        <h3 className="text-xl font-semibold text-indigo-200">Software Engineer</h3>
                        <p className="text-indigo-300">VaidTech Services, Dhaka, Bangladesh</p>
                        <p className="text-indigo-300">2020-Present</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-white">
                            <li>Contributed to the development of a telemedicine platform, improving patient-doctor consultation efficiency.</li>
                            <li>Integrated the WhatsApp API for customer management, automating 80% of customer interactions and improving customer retention by 25%.</li>
                            <li>Developed a rewards-based platform for user engagement through polls, PTC, and surveys, serving 12,000+ users.</li>
                            <li>Deployed projects using Docker, streamlining the development process and reducing environment-related issues.</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-indigo-200">Education</h2>
                <div className="space-y-4">
                    <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                        <CardContent className="p-4">
                            <h3 className="text-xl font-semibold text-indigo-200">Bachelor of Science in Computer Science</h3>
                            <p className="text-indigo-300">European University Of Bangladesh</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                        <CardContent className="p-4">
                            <h3 className="text-xl font-semibold text-indigo-200">Diploma In Computer Technology</h3>
                            <p className="text-indigo-300">Thakurgaon Polytechnic Institute</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-indigo-200">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <SkillCard title="Programming Languages" skills={["Python", "JavaScript", "HTML", "CSS"]} />
                    <SkillCard title="Backend Technologies" skills={["Django", "Django Rest Framework", "MySQL", "PostgreSQL", "Redis", "GraphQL", "RESTful API"]} />
                    <SkillCard title="Frontend Technologies" skills={["React.js", "Next.js", "Bootstrap", "VanillaJS", "jQuery"]} />
                    <SkillCard title="DevOps" skills={["Docker", "Kubernetes", "Git", "CI/CD Pipeline"]} />
                </div>
            </section>
        </div>
    );
}

const ProjectCard = ({ title, techStack, description }) => (
    <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
        <CardContent className="p-4">
            <h3 className="text-xl font-semibold text-indigo-200 mb-2">{title}</h3>
            <p className="text-indigo-300 mb-2">Tech Stack: {techStack}</p>
            <ul className="list-disc list-inside space-y-1 text-white">
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </CardContent>
    </Card>
);

const SkillCard = ({ title, skills }) => (
    <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
        <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-indigo-200">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-indigo-600/30 text-indigo-100 px-2 py-1 rounded text-sm">
                        {skill}
                    </span>
                ))}
            </div>
        </CardContent>
    </Card>
);


