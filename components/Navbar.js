"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Home,
    Briefcase,
    User,
    FileText,
    BookOpen,
    Menu,
    X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
            <Icon size={18} className="mr-2" />
            <span>{children}</span>
        </Link>
    );
};

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavItemClick = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { href: "/", label: "Home", icon: Home },
        { href: "/projects", label: "Projects", icon: Briefcase },
        { href: "/about", label: "About Me", icon: User },
        { href: "/resume", label: "Resume", icon: FileText },
        { href: "/blogs", label: "Blogs", icon: BookOpen },
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/">MR</Link>
                </motion.div>

                {/* Centered Nav Items */}
                <motion.div
                    className={`hidden md:flex space-x-6 ${
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
                            isActive={pathname === item.href}
                            onClick={handleNavItemClick}
                        >
                            {item.label}
                        </NavItem>
                    ))}
                </motion.div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
                    >
                        <div className="container mx-auto px-6 py-4 space-y-2">
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <NavItem
                                        href={item.href}
                                        icon={item.icon}
                                        isActive={pathname === item.href}
                                        onClick={handleNavItemClick}
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
