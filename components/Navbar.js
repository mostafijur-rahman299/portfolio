"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Briefcase, User, FileText, BookOpen, Mail, ChevronRight } from 'lucide-react';
import { Button } from "@/components/Button";
import Link from "next/link";
import { useTheme } from "next-themes";

const NavItem = ({ href, children, icon: Icon, isActive, onClick }) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`flex items-center text-sm font-medium transition-all duration-300 px-4 py-3 rounded-full ${
                isActive
                    ? "text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                    : "text-gray-700 dark:text-gray-300 hover:bg-pink-400 dark:hover:bg-gray-800"
            }`}
        >
            <Icon size={18} />
            <span>{children}</span>
            {isActive && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full z-[-1]"
                    layoutId="active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
            )}
        </Link>
    );
};

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setActiveSection(window.location.pathname.split("/")[1] || "home");
    }, []);

    const handleNavItemClick = (section) => {
        setActiveSection(section);
        setIsMenuOpen(false);
    };

    const navItems = [
        { href: "/", label: "Home", icon: Home },
        { href: "/projects", label: "Projects", icon: Briefcase },
        { href: "/about", label: "About Me", icon: User },
        { href: "/resume", label: "Resume", icon: FileText },
        { href: "/blogs", label: "Blogs", icon: BookOpen }
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                 "bg-transparent"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <motion.div
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/">
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                                MR
                            </span>
                        </Link>
                    </motion.div>
                    <motion.div
                        className={`hidden md:flex space-x-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-1 rounded-full transition-all duration-300 ${
                            isScrolled ? "shadow-md" : ""
                        }`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navItems.map((item) => (
                            <NavItem
                                key={item.href}
                                href={item.href}
                                icon={item.icon}
                                isActive={activeSection === item.href.slice(1) || (item.href === "/" && activeSection === "home")}
                                onClick={() => handleNavItemClick(item.href.slice(1) || "home")}
                            >
                                {item.label}
                            </NavItem>
                        ))}
                    </motion.div>
                    <div className="flex items-center space-x-4">
                        
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
                    >
                        <div className="container mx-auto px-6 py-4">
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="py-2"
                                >
                                    <NavItem
                                        href={item.href}
                                        icon={item.icon}
                                        isActive={activeSection === item.href.slice(1) || (item.href === "/" && activeSection === "home")}
                                        onClick={() => handleNavItemClick(item.href.slice(1) || "home")}
                                    >
                                        {item.label}
                                    </NavItem>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

