"use client";
import React, { FC, useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Wallet, Search, Bell } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import useApp from "@/lib/app/hooks/useApp";
import { LINKS } from "@/utils/links";

const MotionDiv = motion.div;

interface TailwindNavbarProps { }

const TailwindNavbar: FC<TailwindNavbarProps> = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { config } = useApp();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Check for system theme preference
        if (typeof window !== 'undefined') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setIsDark(mediaQuery.matches);

            const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (typeof document !== 'undefined') {
            document.documentElement.classList.toggle('dark');
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { name: 'Explore', href: '/explore' },
        { name: 'Collections', href: '/collections' },
        { name: 'Create', href: '/create' },
        { name: 'Activity', href: '/activity' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
                    : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href={LINKS.home()}>
                            <div className="flex items-center space-x-2 group cursor-pointer">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-200">
                                    ⚡
                                </div>
                                <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                                    {config.name}
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-purple-600 group-hover:w-full transition-all duration-200"></span>
                                </Link>
                            ))}
                        </div>

                        {/* Right side actions */}
                        <div className="flex items-center space-x-4">
                            {/* Search */}
                            <button
                                className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                                aria-label="Search"
                            >
                                <Search size={20} />
                            </button>

                            {/* Notifications */}
                            <button
                                className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 relative"
                                aria-label="Notifications"
                            >
                                <Bell size={20} />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>

                            {/* Theme toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                                aria-label="Toggle theme"
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            {/* Connect Wallet */}
                            <button className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                                <Wallet size={16} />
                                <span>Connect</span>
                            </button>

                            {/* Mobile menu button */}
                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                            >
                                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <MotionDiv
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
                        >
                            <div className="px-4 py-6 space-y-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200">
                                        <Wallet size={16} />
                                        <span>Connect Wallet</span>
                                    </button>
                                </div>
                            </div>
                        </MotionDiv>
                    )}
                </AnimatePresence>
            </nav>

            {/* Spacer to prevent content from going under fixed navbar */}
            <div className="h-16"></div>
        </>
    );
};

export default TailwindNavbar;
