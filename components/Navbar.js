"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import Link from "next/link";

const NavItem = ({ href, children, isActive }) => (
    <Link
        href={href}
        className={`text-sm font-medium transition-colors duration-300 ${
            isActive
                ? "text-emerald-800 font-bold"
                : "text-emerald-700 hover:text-emerald-900"
        }`}
    >
        {children}
    </Link>
);

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("notes");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);

            const sections = ["home", "projects", "about", "contact"];
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
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center md:justify-center">
                    <motion.div
                        className={`px-4 py-2 rounded-full transition-all duration-300 ${
                            isScrolled ? "bg-white shadow-md" : "bg-transparent"
                        }`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="hidden md:flex space-x-6">
                            <NavItem
                                href="/"
                                isActive={activeSection === "home"}
                            >
                                Home
                            </NavItem>
                            <NavItem
                                href="/projects"
                                isActive={activeSection === "projects"}
                            >
                                Projects
                            </NavItem>
                            <NavItem
                                href="/about"
                                isActive={activeSection === "about"}
                            >
                                About Me
                            </NavItem>
                            <NavItem
                                href="/resume"
                                isActive={activeSection === "resume"}
                            >
                                Resume
                            </NavItem>
                            <NavItem
                                href="/contact"
                                isActive={activeSection === "contact"}
                            >
                                Contact
                            </NavItem>
                        </div>
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </nav>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-white/80 backdrop-blur-md p-4"
                    >
                        <div className="flex flex-col space-y-4">
                            <NavItem
                                href="#work"
                                isActive={activeSection === "work"}
                            >
                                Projects
                            </NavItem>
                            <NavItem
                                href="#about"
                                isActive={activeSection === "about"}
                            >
                                About Me
                            </NavItem>
                            <NavItem
                                href="/resume"
                                isActive={activeSection === "resume"}
                            >
                                Resume
                            </NavItem>
                            <NavItem
                                href="#contact"
                                isActive={activeSection === "contact"}
                            >
                                Contact
                            </NavItem>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
