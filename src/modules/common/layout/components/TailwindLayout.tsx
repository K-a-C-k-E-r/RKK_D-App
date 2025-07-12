"use client";
import React, { FC, ReactNode } from "react";
import TailwindNavbar from "./TailwindNavbar";

interface TailwindLayoutProps {
    children?: ReactNode;
}

const TailwindLayout: FC<TailwindLayoutProps> = (props) => {
    const { children } = props;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <TailwindNavbar />
            <main className="pt-4">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Brand */}
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                    ⚡
                                </div>
                                <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                                    Andromeda Marketplace
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
                                The most advanced decentralized NFT marketplace. Discover, collect, and trade extraordinary digital assets.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                                    <span className="sr-only">Twitter</span>
                                    🐦
                                </a>
                                <a href="#" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                                    <span className="sr-only">Discord</span>
                                    💬
                                </a>
                                <a href="#" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                                    <span className="sr-only">GitHub</span>
                                    🐙
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
                                Marketplace
                            </h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Explore</a></li>
                                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Collections</a></li>
                                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Activity</a></li>
                                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Rankings</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
                                Resources
                            </h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Help Center</a></li>
                                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">API Docs</a></li>
                                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Community</a></li>
                                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Blog</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            © 2024 Andromeda Protocol. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors duration-200">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Powered by Badge */}
            <div className="fixed bottom-4 left-4 z-50">
                <a
                    href="https://www.andromedaprotocol.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 bg-white dark:bg-gray-800 shadow-lg rounded-xl px-3 py-2 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                    <div className="w-6 h-6 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs group-hover:rotate-12 transition-transform duration-200">
                        ⚡
                    </div>
                    <div className="text-xs">
                        <div className="text-gray-600 dark:text-gray-300 font-medium">Powered by</div>
                        <div className="text-primary-600 dark:text-primary-400 font-bold">Andromeda</div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default TailwindLayout;
