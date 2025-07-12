"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import TailwindNFTCard from "../../common/ui/TailwindNFTCard";

const MotionDiv = motion.div;

interface TailwindDiscoverPageProps { }

const TailwindDiscoverPage: FC<TailwindDiscoverPageProps> = () => {
    // Mock data for demonstration
    const featuredNFTs = [
        {
            id: "1",
            title: "Cosmic Dreams #001",
            creator: "ArtistOne",
            price: "2.5 ETH",
            image: "/api/placeholder/400/400",
            likes: 234,
            views: 1250,
            rarity: "legendary" as const,
        },
        {
            id: "2",
            title: "Digital Sunset",
            creator: "CreatorTwo",
            price: "1.8 ETH",
            image: "/api/placeholder/400/400",
            likes: 156,
            views: 890,
            rarity: "epic" as const,
        },
        {
            id: "3",
            title: "Abstract Mind",
            creator: "ArtistThree",
            price: "0.9 ETH",
            image: "/api/placeholder/400/400",
            likes: 89,
            views: 445,
            rarity: "rare" as const,
        },
    ];

    const categories = [
        { name: "Art", count: 1234, icon: "🎨", color: "from-pink-500 to-rose-500" },
        { name: "Gaming", count: 856, icon: "🎮", color: "from-blue-500 to-cyan-500" },
        { name: "Music", count: 432, icon: "🎵", color: "from-purple-500 to-violet-500" },
        { name: "Sports", count: 298, icon: "⚽", color: "from-green-500 to-emerald-500" },
        { name: "Photography", count: 567, icon: "📸", color: "from-yellow-500 to-orange-500" },
        { name: "Virtual Worlds", count: 789, icon: "🌍", color: "from-indigo-500 to-blue-500" },
    ];

    const stats = [
        { label: "Total Volume", value: "$45.2M", change: "+12.5%", trend: "up" },
        { label: "Active Users", value: "125K", change: "+8.2%", trend: "up" },
        { label: "Collections", value: "2.4K", change: "+15.1%", trend: "up" },
        { label: "Floor Price", value: "0.05 ETH", change: "-3.2%", trend: "down" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <span>🔥</span>
                        <span>Live Marketplace</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Discover Amazing
                        <span className="gradient-text"> NFTs</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Explore curated collections, discover trending artists, and find your next favorite digital collectible.
                    </p>
                </MotionDiv>

                {/* Stats Grid */}
                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                        >
                            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                {stat.label}
                            </div>
                            <div className={`flex items-center text-xs font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                <span className="mr-1">
                                    {stat.trend === 'up' ? '↗️' : '↘️'}
                                </span>
                                {stat.change}
                            </div>
                        </div>
                    ))}
                </MotionDiv>

                {/* Categories */}
                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Browse by Category
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer card-hover"
                            >
                                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                                    {category.icon}
                                </div>
                                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                    {category.name}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    {category.count.toLocaleString()} items
                                </div>
                            </div>
                        ))}
                    </div>
                </MotionDiv>

                {/* Featured Collections */}
                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            🔥 Featured Collections
                        </h2>
                        <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200">
                            View All →
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredNFTs.map((nft, index) => (
                            <MotionDiv
                                key={nft.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                            >
                                <TailwindNFTCard
                                    {...nft}
                                    onLike={() => console.log('Liked:', nft.id)}
                                    onShare={() => console.log('Shared:', nft.id)}
                                    onClick={() => console.log('Clicked:', nft.id)}
                                />
                            </MotionDiv>
                        ))}
                    </div>
                </MotionDiv>

                {/* Trending Section */}
                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">
                        Don&apos;t Miss Out on Trending Collections
                    </h2>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                        Join thousands of collectors and discover the hottest NFT drops. Get early access to exclusive collections and limited editions.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                            Explore Trending
                        </button>
                        <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200">
                            Create Collection
                        </button>
                    </div>
                </MotionDiv>
            </div>
        </div>
    );
};

export default TailwindDiscoverPage;
