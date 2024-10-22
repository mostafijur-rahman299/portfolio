"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/Card";
import { ScrollArea } from "@/components/ScrollArea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import {
    Code,
    GraduationCap,
    Briefcase,
    Camera,
    X,
    Youtube,
    Terminal,
    Server,
    Database,
    Globe,
    Cloud,
    Cpu,
    GitBranch,
    Layers,
    Paintbrush,
    Smartphone
} from "lucide-react";
import Footer from "@/components/Footer";

export default function About() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [code, setCode] = useState(`function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
      }

      console.log(fibonacci(10));`);
    const [output, setOutput] = useState("");
    const [activeSection, setActiveSection] = useState("about");

    const skills = {
        frontend: [
            { name: "React", icon: Code, level: "Advanced" },
            { name: "Next.js", icon: Server, level: "Advanced" },
            { name: "TypeScript", icon: Code, level: "Intermediate" },
            { name: "CSS/SASS", icon: Paintbrush, level: "Advanced" },
            { name: "Responsive Design", icon: Smartphone, level: "Advanced" },
        ],
        backend: [
            { name: "Node.js", icon: Server, level: "Advanced" },
            { name: "Express", icon: Server, level: "Intermediate" },
            { name: "MongoDB", icon: Database, level: "Intermediate" },
            { name: "SQL", icon: Database, level: "Intermediate" },
            { name: "GraphQL", icon: Globe, level: "Beginner" },
        ],
        devops: [
            { name: "Docker", icon: Cloud, level: "Intermediate" },
            { name: "AWS", icon: Cloud, level: "Beginner" },
            { name: "CI/CD", icon: GitBranch, level: "Intermediate" },
            { name: "Kubernetes", icon: Layers, level: "Beginner" },
        ],
        other: [
            { name: "Git", icon: GitBranch, level: "Advanced" },
            { name: "TDD", icon: Terminal, level: "Intermediate" },
            { name: "Agile", icon: Cpu, level: "Advanced" },
            { name: "REST APIs", icon: Cloud, level: "Advanced" },
        ],
    };

    const education = [
        {
            degree: "Bachelor of Science in Computer Science",
            school: "Tech University",
            year: "2015 - 2019",
            description:
                "Focused on algorithms, data structures, and software engineering principles.",
        },
        {
            degree: "Master of Science in Artificial Intelligence",
            school: "Innovation Institute",
            year: "2020 - 2022",
            description:
                "Specialized in machine learning, neural networks, and AI ethics.",
        },
    ];

    const photos = [
        "/placeholder.svg?height=800&width=1200&text=Coding+Session",
        "/placeholder.svg?height=800&width=1200&text=Hackathon+Win",
        "/placeholder.svg?height=800&width=1200&text=Conference+Talk",
        "/placeholder.svg?height=800&width=1200&text=Team+Building",
        "/placeholder.svg?height=800&width=1200&text=Project+Demo",
        "/placeholder.svg?height=800&width=1200&text=Award+Ceremony",
    ];

    const runCode = () => {
        try {
            const func = new Function(code);
            const consoleLog = console.log;
            let result = "";
            console.log = (...args) => {
                result += args.join(" ") + "\n";
            };
            func();
            console.log = consoleLog;
            setOutput(result);
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "about",
                "skills",
                "education",
                "gallery",
                "youtube",
                "showcase",
                "contact",
            ];
            const currentSection = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-200 to-teal-300 text-foreground">
            <div className="container mx-auto px-4 pt-32 pb-16 max-w-6xl">
                <motion.h1
                    id="about"
                    className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About Me
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <motion.div
                        className="md:col-span-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/placeholder.svg?height=600&width=600&text=Your+Photo"
                            alt="Your Name"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl"
                        />
                    </motion.div>

                    <motion.div
                        className="md:col-span-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-lg p-8 shadow-xl relative overflow-hidden border border-emerald-500">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-semibold mb-6 text-emerald-700 border-b-2 border-emerald-500 pb-2">
                                    My Story
                                </h2>
                                <div className="space-y-4 text-emerald-600">
                                    <p className="text-lg relative pl-6">
                                        <span className="absolute left-0 top-0 text-2xl text-emerald-500">
                                            &quot;
                                        </span>
                                        As a passionate full-stack developer
                                        and tech innovator, I always been
                                        fascinated by the power of technology to
                                        solve real-world problems. My journey in
                                        software development began with a simple
                                        &quot;Hello, World!&quot; program and
                                        has since evolved into creating complex,
                                        scalable applications that make a
                                        difference in people&lsquo;s lives.
                                    </p>
                                    <p className="text-lg">
                                        I thrive on challenges and continuously
                                        push myself to learn new technologies
                                        and methodologies. My goal is to create
                                        elegant, efficient solutions that not
                                        only meet but exceed expectations.
                                        Whether it&lsquo;s crafting intuitive user
                                        interfaces or optimizing backend
                                        systems, I&lsquo;m committed to
                                        delivering excellence in every line of
                                        code.
                                    </p>
                                    <p className="text-lg relative pr-6">
                                        When I&lsquo;m not coding, you can find me
                                        contributing to open-source projects,
                                        mentoring aspiring developers, or
                                        exploring the latest advancements in AI
                                        and machine learning. I believe in the
                                        power of community and collaboration to
                                        drive innovation in the tech industry.
                                        <span className="absolute right-0 bottom-0 text-2xl text-emerald-500">
                                            &quot;
                                        </span>
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
                    <h2 className="text-3xl font-semibold mb-6 text-center text-emerald-700">
                        My Skills
                    </h2>
                    <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-lg p-6 shadow-xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {Object.entries(skills).map(
                                ([category, categorySkills]) => (
                                    <div key={category} className="space-y-4">
                                        <h3 className="text-xl font-semibold text-emerald-700 capitalize">
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
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center shadow-lg">
                                                    <skill.icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <span className="text-emerald-700 font-medium">
                                                        {skill.name}
                                                    </span>
                                                    <Badge
                                                        variant={
                                                            skill.level ===
                                                            "Advanced"
                                                                ? "default"
                                                                : skill.level ===
                                                                  "Intermediate"
                                                                ? "secondary"
                                                                : "outline"
                                                        }
                                                        className="ml-2"
                                                    >
                                                        {skill.level}
                                                    </Badge>
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
                    <h2 className="text-3xl font-semibold mb-6 text-center text-emerald-700">
                        Education
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
                                <Card className="bg-white bg-opacity-70 backdrop-blur-lg overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                                    <CardHeader className="relative">
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500 rounded-bl-full flex items-center justify-center">
                                            <GraduationCap className="text-white w-8 h-8" />
                                        </div>
                                        <CardTitle className="text-2xl text-emerald-700">
                                            {edu.degree}
                                        </CardTitle>
                                        <CardDescription className="text-emerald-600 text-lg">
                                            {edu.school} | {edu.year}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-emerald-600">
                                            {edu.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    id="youtube"
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <h2 className="text-3xl font-semibold mb-6 text-center text-emerald-700">
                        My YouTube Channel
                    </h2>
                    <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-lg p-8 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="mb-4 md:mb-0 md:mr-8">
                                <h3 className="text-2xl font-semibold mb-2 text-emerald-700">
                                    Tech Tutorials and Coding Tips
                                </h3>
                                <p className="text-emerald-600 mb-4">
                                    Join me on my coding journey as I share
                                    insights, tutorials, and tips for aspiring
                                    developers.
                                </p>
                                <a
                                    href="https://www.youtube.com/your-channel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
                                >
                                    <Youtube className="w-6 h-6 mr-2" />
                                    <span>Subscribe Now</span>
                                </a>
                            </div>
                            <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/placeholder.svg?height=720&width=1280&text=YouTube+Channel+Preview"
                                    alt="YouTube Channel Preview"
                                    width={1280}
                                    height={720}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={selectedImage}
                                    alt="Enlarged gallery image"
                                    width={1200}
                                    height={800}
                                    className="object-contain w-full h-full"
                                />
                                <button
                                    className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    id="showcase"
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <h2 className="text-3xl font-semibold mb-6 text-center text-emerald-700">
                        Tech Showcase
                    </h2>
                    <Tabs defaultValue="live-coding" className="w-full">
                        <TabsList className="w-full mb-8 p-1 bg-white bg-opacity-70 backdrop-blur-lg rounded-full">
                            <TabsTrigger
                                value="live-coding"
                                className="w-1/3 data-[state=active]:bg-emerald-500 data-[state=active]:text-white rounded-full transition-all duration-300"
                            >
                                <Code className="w-5 h-5 mr-2" />
                                Live Coding
                            </TabsTrigger>
                            <TabsTrigger
                                value="project-insights"
                                className="w-1/3 data-[state=active]:bg-emerald-500 data-[state=active]:text-white rounded-full transition-all duration-300"
                            >
                                <Briefcase className="w-5 h-5 mr-2" />
                                Project Insights
                            </TabsTrigger>
                            <TabsTrigger
                                value="tech-blog"
                                className="w-1/3 data-[state=active]:bg-emerald-500 data-[state=active]:text-white rounded-full transition-all duration-300"
                            >
                                <Camera className="w-5 h-5 mr-2" />
                                Tech Blog
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="live-coding">
                            <Card className="bg-white bg-opacity-70 backdrop-blur-lg overflow-hidden">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-emerald-700">
                                        Live Coding Demo
                                    </CardTitle>
                                    <CardDescription className="text-emerald-600">
                                        Edit and run the code in real-time
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4">
                                        <textarea
                                            value={code}
                                            onChange={(e) =>
                                                setCode(e.target.value)
                                            }
                                            className="w-full h-48 p-4 bg-zinc-900 text-zinc-100 font-mono text-sm rounded-lg"
                                        />
                                    </div>
                                    <Button onClick={runCode}>Run Code</Button>
                                    {output && (
                                        <div className="mt-4 p-4 bg-zinc-100 rounded-lg">
                                            <h4 className="text-lg font-semibold mb-2">
                                                Output:
                                            </h4>
                                            <pre className="whitespace-pre-wrap">
                                                {output}
                                            </pre>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="project-insights">
                            <Card className="bg-white bg-opacity-70 backdrop-blur-lg overflow-hidden">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-emerald-700">
                                        Project Insights
                                    </CardTitle>
                                    <CardDescription className="text-emerald-600">
                                        Deep dive into my recent projects
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                                        <h3 className="text-lg font-semibold mb-2 text-emerald-700">
                                            AI-Powered Task Manager
                                        </h3>
                                        <p className="mb-4 text-emerald-600">
                                            Developed a task management
                                            application that uses natural
                                            language processing to automatically
                                            categorize and prioritize tasks.
                                            Implemented using React, Node.js,
                                            and TensorFlow.js.
                                        </p>
                                        <h3 className="text-lg font-semibold mb-2 text-emerald-700">
                                            Blockchain-based Voting System
                                        </h3>
                                        <p className="mb-4 text-emerald-600">
                                            Created a secure and transparent
                                            voting system using Ethereum smart
                                            contracts. The frontend was built
                                            with Next.js and ethers.js for
                                            blockchain interaction.
                                        </p>
                                        <h3 className="text-lg font-semibold mb-2 text-emerald-700">
                                            Real-time Collaborative IDE
                                        </h3>
                                        <p className="text-emerald-600">
                                            Engineered a web-based IDE that
                                            allows multiple developers to code
                                            together in real-time. Utilized
                                            WebSockets for live updates and
                                            Docker for isolated code execution
                                            environments.
                                        </p>
                                    </ScrollArea>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="tech-blog">
                            <Card className="bg-white bg-opacity-70 backdrop-blur-lg overflow-hidden">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-emerald-700">
                                        Tech Blog
                                    </CardTitle>
                                    <CardDescription className="text-emerald-600">
                                        My latest thoughts on technology trends
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                                        <h3 className="text-lg font-semibold mb-2 text-emerald-700">
                                            The Future of Web Development with
                                            AI
                                        </h3>
                                        <p className="mb-4 text-emerald-600">
                                            Exploring how artificial
                                            intelligence is reshaping the
                                            landscape of web development, from
                                            code generation to automated
                                            testing.
                                        </p>
                                        <h3 className="text-lg font-semibold mb-2 text-emerald-700">
                                            Mastering Microservices Architecture
                                        </h3>
                                        <p className="mb-4 text-emerald-600">
                                            A deep dive into the principles of
                                            microservices and how they can be
                                            effectively implemented in
                                            large-scale applications.
                                        </p>
                                        <h3 className="text-lg font-semibold mb-2 text-emerald-700">
                                            The Rise of Edge Computing in Web
                                            Applications
                                        </h3>
                                        <p className="text-emerald-600">
                                            Discussing the benefits and
                                            challenges of edge computing and its
                                            impact on web application
                                            performance and user experience.
                                        </p>
                                    </ScrollArea>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </motion.div>

                <motion.div
                    id="gallery"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <h2 className="text-3xl font-semibold mb-6 text-center text-emerald-700">
                        Photo Gallery
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {photos.map((photo, index) => (
                            <motion.div
                                key={index}
                                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedImage(photo)}
                            >
                                <Image
                                    src={photo}
                                    alt={`Gallery Image ${index + 1}`}
                                    width={400}
                                    height={300}
                                    className="object-cover  w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-lg font-semibold">
                                        View
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}
