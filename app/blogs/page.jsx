"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Sparkles } from 'lucide-react';
import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { ScrollArea } from "@/components/ScrollArea";

// Sample blog data - replace with your actual blog sources
const blogSources = [
    { name: "Dev.to", url: "https://dev.to/mostafij" },
    { name: "Hashnode", url: "https://hashnode.com/@NeptuneCode" },
];

// Sample blog posts - replace with your actual blog posts
const blogPosts = [
    {
        id: 1,
        title: "Object-Oriented Programming (OOP) In Python",
        excerpt:
            "Object-Oriented Programming (OOP) is a powerful paradigm that makes code more modular, organized, and scalable. By focusing on the creation and interaction of 'objects', OOP allows developers to design complex systems through...",
        url: "https://neptunecode.hashnode.dev/object-oriented-programming-in-python",
        source: "Hashnode",
        date: "Nov 25, 2024",
    },
    {
        id: 2,
        title: "Integrating Django with React: A Comprehensive Guide.",
        excerpt:
            "Combining Django with React is a powerful approach for full-stack development. Django handles the backend logic and data management, while React powers the frontend user interface (UI). In this post, we'll explore two methods of integrating React with Django...",
        url: "https://neptunecode.hashnode.dev/integrating-django-with-react",
        source: "Hashnode",
        date: "Oct 6, 2024",
    },
    {
        id: 3,
        title: "Securing Your Django Application: Best Practices for Preventing XSS, CSRF, and More",
        excerpt:
            "Security should always be at the forefront of any web development project. With Django, you get a framework that provides a lot of built-in security features, but there are still steps you must take to ensure your application is secure. In this post, we'll explore some best practices for preventing common web vulnerabilities such as Cross-Site Scripting (XSS), SQL Injection, Cross-Site Request Forgery (CSRF), and more...",
        url: "https://dev.to/mostafij/securing-your-django-application-best-practices-for-preventing-xss-csrf-and-more-27me",
        source: "Dev.to",
        date: "Sep 25, 2024",
    },
    {
        id: 4,
        title: "Must-Know HTML Attributes for Every Web Developer",
        excerpt:
            "HTML is the backbone of any web page, providing the essential structure needed to display content. Whether you're a beginner or an experienced web developer, having a handy reference to key HTML attributes can be invaluable. In this blog, we'll explore some of the most important HTML attributes to help you enhance your web pages...",
        url: "https://neptunecode.hashnode.dev/html-attributes-for-every-web-developer",
        source: "Hashnode",
        date: "Sep 21, 2024",
    },
    {
        id: 5,
        title: "Introduction to CSS: A Beginner's Guide",
        excerpt:
            "CSS, or Cascading Style Sheets, is a cornerstone of modern web development. It plays a crucial role in defining the look and feel of websites, allowing developers to control layout, colors, fonts, and overall appearance. Without CSS, websites would look plain, unattractive, and difficult to navigate...",
        url: "https://neptunecode.hashnode.dev/introduction-to-css-a-beginners-guide",
        source: "Hashnode",
        date: "Sep 16, 2024",
    },
];

export default function BlogShowcase() {
    const [filteredPosts, setFilteredPosts] = useState(blogPosts);
    const [selectedSource, setSelectedSource] = useState("All");

    const filterPosts = (source) => {
        setSelectedSource(source);
        if (source === "All") {
            setFilteredPosts(blogPosts);
        } else {
            setFilteredPosts(
                blogPosts.filter((post) => post.source === source)
            );
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-20"></div>
            <main className="container mx-auto px-4 py-4 max-w-6xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-32 mb-12"
                >
                    <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                        My Blog Posts
                    </h1>
                    <p className="text-xl text-gray-300">Explore my latest thoughts and tutorials</p>
                </motion.div>

                <Tabs defaultValue="All" className="mb-8">
                    <TabsList className="grid w-full grid-cols-4 bg-indigo-800/50 rounded-full p-1">
                        <TabsTrigger
                            value="All"
                            onClick={() => filterPosts("All")}
                            className="rounded-full data-[state=active]:bg-pink-600 data-[state=active]:text-white transition-all duration-300"
                        >
                            All
                        </TabsTrigger>
                        {blogSources.map((source) => (
                            <TabsTrigger
                                key={source.name}
                                value={source.name}
                                onClick={() => filterPosts(source.name)}
                                className="rounded-full data-[state=active]:bg-pink-600 data-[state=active]:text-white transition-all duration-300"
                            >
                                {source.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <TabsContent value={selectedSource}>
                        <ScrollArea className="h-[calc(100vh-300px)] pr-4">
                            <AnimatePresence>
                                <motion.div 
                                    className="grid gap-6"
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.1 } }
                                    }}
                                >
                                    {filteredPosts.map((post) => (
                                        <motion.div
                                            key={post.url}
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: { opacity: 1, y: 0 }
                                            }}
                                        >
                                            <Card className="group hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-lg border-none overflow-hidden">
                                                <CardHeader>
                                                    <CardTitle className="text-xl font-semibold flex items-center">
                                                        <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                                                        <Link
                                                            href={post.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:underline text-pink-300 group-hover:text-pink-400 transition-colors duration-300"
                                                        >
                                                            {post.title}
                                                        </Link>
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                                                        {post.excerpt}
                                                    </p>
                                                    <div className="flex justify-between items-center text-sm text-gray-400">
                                                        <span className="bg-indigo-800 px-2 py-1 rounded-full text-xs">
                                                            {post.source}
                                                        </span>
                                                        <span>{post.date}</span>
                                                    </div>
                                                    <Button
                                                        asChild
                                                        className="mt-4 bg-pink-600 hover:bg-pink-700 text-white w-full group"
                                                    >
                                                        <Link
                                                            href={post.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Read More
                                                            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                                        </Link>
                                                    </Button>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </ScrollArea>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    );
}

