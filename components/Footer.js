"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/Button";
import Link from "next/link";

const SocialIcon = ({ Icon, href }) => (
    <motion.a
        href={href}
        className="text-emerald-700 hover:text-emerald-900 transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
    >
        <Icon className="h-6 w-6" />
    </motion.a>
);

export default function Projects() {
    return (
        <motion.footer
            className="relative z-10 bg-transparent py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-2">
                        <motion.h3
                            className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600  to-teal-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                        >
                            Mostafijur Rahman
                        </motion.h3>
                        <motion.p
                            className="text-emerald-700 mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                        >
                            Passionate about creating innovative digital
                            solutions that make a difference in people&lsquo;s
                            lives and push the boundaries of what&lsquo;s
                            possible in technology.
                        </motion.p>
                        <motion.div
                            className="flex space-x-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6, duration: 0.5 }}
                        >
                            <SocialIcon Icon={Github} href="#" />
                            <SocialIcon Icon={Linkedin} href="#" />
                            <SocialIcon Icon={Twitter} href="#" />
                            <SocialIcon Icon={Mail} href="#" />
                        </motion.div>
                    </div>
                    <div>
                        <motion.h4
                            className="text-xl font-semibold mb-4 text-emerald-800"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8, duration: 0.5 }}
                        >
                            Quick Links
                        </motion.h4>
                        <motion.ul
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2, duration: 0.5 }}
                        >
                            <li>
                                <Link
                                    href="/"
                                    className="text-emerald-700 hover:text-emerald-900 transition-colors duration-300"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className="text-emerald-700 hover:text-emerald-900 transition-colors duration-300"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-emerald-700 hover:text-emerald-900 transition-colors duration-300"
                                >
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-emerald-700 hover:text-emerald-900 transition-colors duration-300"
                                >
                                    Contact
                                </Link>
                            </li>
                        </motion.ul>
                    </div>
                    <div>
                        <motion.h4
                            className="text-xl font-semibold mb-4 text-emerald-800"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.2, duration: 0.5 }}
                        >
                            Get in Touch
                        </motion.h4>
                        <motion.p
                            className="text-emerald-700 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.4, duration: 0.5 }}
                        >
                            Interested in working together? Let&lsquo;s connect
                            and create something amazing.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.6, duration: 0.5 }}
                        >
                            <Link href="/contact">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full bg-emerald-700 text-white hover:bg-emerald-800"
                                >
                                    Contact Me
                                    <Mail className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="mt-12 pt-8 border-t border-emerald-200 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8, duration: 0.5 }}
                >
                    <p className="text-emerald-700">
                        © 2024 NeptuneCode. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
}
