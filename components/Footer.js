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
