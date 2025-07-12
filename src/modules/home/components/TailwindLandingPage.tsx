"use client";
import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { Star, Heart, Share2, TrendingUp, Users, Zap } from "lucide-react";

const MotionDiv = motion.div;

interface TailwindLandingPageProps {
    onGetStarted: () => void;
}

const TailwindLandingPage: FC<TailwindLandingPageProps> = ({ onGetStarted }) => {
    const [isHovered, setIsHovered] = useState(false);

    const features = [
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Experience blazing fast NFT transactions with our optimized marketplace.",
            color: "from-yellow-400 to-orange-500",
        },
        {
            icon: Heart,
            title: "Community Driven",
            description: "Join a thriving community of creators, collectors, and enthusiasts.",
            color: "from-pink-400 to-red-500",
        },
        {
            icon: TrendingUp,
            title: "Market Analytics",
            description: "Real-time insights and analytics for informed trading decisions.",
            color: "from-green-400 to-blue-500",
        },
        {
            icon: Users,
            title: "Creator Friendly",
            description: "Built for creators with powerful tools and fair commission structure.",
            color: "from-purple-400 to-pink-500",
        },
        {
            icon: Share2,
            title: "Cross-Chain",
            description: "Trade across multiple blockchains seamlessly.",
            color: "from-blue-400 to-purple-500",
        },
        {
            icon: Star,
            title: "Premium Experience",
            description: "Enjoy a premium trading experience with advanced features.",
            color: "from-indigo-400 to-purple-500",
        },
    ];

    const stats = [
        { label: "Total Volume", value: "$10M+", icon: "💰" },
        { label: "Active Users", value: "50K+", icon: "👥" },
        { label: "Collections", value: "1K+", icon: "🎨" },
        { label: "Transactions", value: "100K+", icon: "⚡" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-purple-600/10 dark:from-primary-400/5 dark:to-purple-400/5"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-4000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
                    <MotionDiv
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-8">
                            <span>🚀</span>
                            <span>Powered by Andromeda Protocol</span>
                        </div>

                        {/* Main heading */}
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8">
                            <span className="block">The Future of</span>
                            <span className="gradient-text">NFT Marketplace</span>
                        </h1>

                        {/* Description */}
                        <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                            Discover, collect, and trade extraordinary NFTs in the most advanced
                            decentralized marketplace. Built for creators, collectors, and the future of digital ownership.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                            <button
                                onClick={onGetStarted}
                                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-700"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <span className="relative z-10">Explore Marketplace</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>

                            <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-400 dark:hover:text-primary-400 transition-all duration-300">
                                Learn More
                            </button>
                        </div>

                        {/* User avatars */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm"
                                    >
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Join 50,000+ users already trading on our platform
                            </p>
                        </div>
                    </MotionDiv>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white dark:bg-gray-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionDiv
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl mb-2">{stat.icon}</div>
                                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </MotionDiv>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionDiv
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Why Choose Our Marketplace?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Experience the next generation of NFT trading with features designed
                            for both beginners and advanced traders.
                        </p>
                    </MotionDiv>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <MotionDiv
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 card-hover"
                            >
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-6`}>
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <MotionDiv
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Ready to Start Trading?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
                            Join thousands of creators and collectors in the most advanced
                            NFT marketplace. Start your journey today.
                        </p>
                        <button
                            onClick={onGetStarted}
                            className="px-10 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-700"
                        >
                            Get Started Now
                        </button>
                    </MotionDiv>
                </div>
            </div>
        </div>
    );
};

export default TailwindLandingPage;
