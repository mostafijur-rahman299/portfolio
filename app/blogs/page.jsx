"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
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
        title: "Integrating Django with React: A Comprehensive Guide.",
        excerpt:
            "Combining Django with React is a powerful approach for full-stack development. Django handles the backend logic and data management, while React powers the frontend user interface (UI). In this post, we’ll explore two methods of integrating React with Django...",
        url: "https://neptunecode.hashnode.dev/integrating-django-with-react",
        source: "Hashnode",
        date: "Oct 6, 2024",
    },
    {
        id: 2,
        title: "Securing Your Django Application: Best Practices for Preventing XSS, CSRF, and More",
        excerpt:
            "Security should always be at the forefront of any web development project. With Django, you get a framework that provides a lot of built-in security features, but there are still steps you must take to ensure your application is secure. In this post, we'll explore some best practices for preventing common web vulnerabilities such as Cross-Site Scripting (XSS), SQL Injection, Cross-Site Request Forgery (CSRF), and more...",
        url: "https://dev.to/mostafij/securing-your-django-application-best-practices-for-preventing-xss-csrf-and-more-27me",
        source: "Dev.to",
        date: "Sep 25, 2024",
    },
    {
        id: 3,
        title: "Must-Know HTML Attributes for Every Web Developer",
        excerpt:
            "HTML is the backbone of any web page, providing the essential structure needed to display content. Whether you're a beginner or an experienced web developer, having a handy reference to key HTML attributes can be invaluable. In this blog, we’ll explore some of the most important HTML attributes to help you enhance your web pages...",
        url: "https://neptunecode.hashnode.dev/html-attributes-for-every-web-developer",
        source: "Hashnode",
        date: "Sep 21, 2024",
    },
    {
        id: 4,
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

    const filterPosts = (selectedSource) => {
        console.log(selectedSource);
        if (selectedSource === "All") {
            setFilteredPosts(blogPosts);
        } else {
            setFilteredPosts(
                blogPosts.filter((post) => post.source === selectedSource)
            );
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-200 to-teal-300 text-foreground">
            <main className="container mx-auto px-4 py-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-8 text-emerald-800 text-center mt-32">
                        My Blog Posts
                    </h1>

                    <Tabs defaultValue="All" className="mb-8">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger
                                value="All"
                                onClick={() => filterPosts("All")}
                            >
                                All
                            </TabsTrigger>
                            {blogSources.map((source) => (
                                <TabsTrigger
                                    key={source.name}
                                    value={source.name}
                                    onClick={() => filterPosts(source.name)}
                                >
                                    {source.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {["All", ...blogSources.map((s) => s.name)].map(
                            (source) => (
                                <TabsContent key={source} value={source}>
                                    <ScrollArea className="h-[calc(100vh-200px)] pr-4">
                                        <div className="grid gap-6">
                                            {filteredPosts.map(
                                                (post, index) => (
                                                    <motion.div
                                                        key={post.url}
                                                        initial={{
                                                            opacity: 0,
                                                            y: 20,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        transition={{
                                                            delay: index * 0.1,
                                                        }}
                                                    >
                                                        <Card className="hover:shadow-lg transition-shadow duration-300">
                                                            <CardHeader>
                                                                <CardTitle className="text-xl font-semibold">
                                                                    <Link
                                                                        href={
                                                                            post.url
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="hover:underline"
                                                                    >
                                                                        {
                                                                            post.title
                                                                        }
                                                                    </Link>
                                                                </CardTitle>
                                                            </CardHeader>
                                                            <CardContent>
                                                                <p className="text-sm text-gray-600 mb-4">
                                                                    {
                                                                        post.excerpt
                                                                    }
                                                                </p>
                                                                <div className="flex justify-between items-center text-sm text-gray-500">
                                                                    <span>
                                                                        {
                                                                            post.source
                                                                        }
                                                                    </span>
                                                                    <span>
                                                                        {
                                                                            post.date
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <Button
                                                                    asChild
                                                                    className="mt-4"
                                                                >
                                                                    <Link
                                                                        href={
                                                                            post.url
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        Read
                                                                        More
                                                                        <ExternalLink className="ml-2 h-4 w-4" />
                                                                    </Link>
                                                                </Button>
                                                            </CardContent>
                                                        </Card>
                                                    </motion.div>
                                                )
                                            )}
                                        </div>
                                    </ScrollArea>
                                </TabsContent>
                            )
                        )}
                    </Tabs>
                </motion.div>
            </main>
        </div>
    );
}
