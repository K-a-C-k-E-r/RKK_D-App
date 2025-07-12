"use client";
import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Share2, Eye, TrendingUp, Star } from "lucide-react";

const MotionDiv = motion.div;

interface NFTCardProps {
    id: string;
    title: string;
    creator: string;
    price: string;
    image: string;
    likes?: number;
    views?: number;
    rarity?: 'common' | 'rare' | 'epic' | 'legendary';
    isLiked?: boolean;
    onLike?: () => void;
    onShare?: () => void;
    onClick?: () => void;
}

const TailwindNFTCard: FC<NFTCardProps> = ({
    id,
    title,
    creator,
    price,
    image,
    likes = 0,
    views = 0,
    rarity = 'common',
    isLiked = false,
    onLike,
    onShare,
    onClick,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const getRarityColors = (rarity: string) => {
        switch (rarity) {
            case 'legendary':
                return 'from-yellow-400 to-orange-500';
            case 'epic':
                return 'from-purple-400 to-pink-500';
            case 'rare':
                return 'from-blue-400 to-indigo-500';
            default:
                return 'from-gray-400 to-gray-500';
        }
    };

    const getRarityBadge = (rarity: string) => {
        switch (rarity) {
            case 'legendary':
                return { text: 'Legendary', icon: '👑' };
            case 'epic':
                return { text: 'Epic', icon: '💎' };
            case 'rare':
                return { text: 'Rare', icon: '⭐' };
            default:
                return { text: 'Common', icon: '🔹' };
        }
    };

    const rarityBadge = getRarityBadge(rarity);

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 overflow-hidden card-hover"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden">
                {/* Loading placeholder */}
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse flex items-center justify-center">
                        <div className="text-4xl opacity-50">🎨</div>
                    </div>
                )}

                {/* Main Image */}
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        } ${isHovered ? 'scale-110' : 'scale-100'}`}
                    onLoad={() => setImageLoaded(true)}
                />

                {/* Rarity Badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 bg-gradient-to-r ${getRarityColors(rarity)} text-white text-xs font-semibold rounded-full flex items-center space-x-1`}>
                    <span>{rarityBadge.icon}</span>
                    <span>{rarityBadge.text}</span>
                </div>

                {/* Action Buttons */}
                <div className={`absolute top-3 right-3 flex space-x-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                    }`}>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onLike?.();
                        }}
                        className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${isLiked
                                ? 'bg-red-500 text-white'
                                : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white'
                            }`}
                        aria-label="Like"
                    >
                        <Heart size={14} className={isLiked ? 'fill-current' : ''} />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onShare?.();
                        }}
                        className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-200"
                        aria-label="Share"
                    >
                        <Share2 size={14} />
                    </button>
                </div>

                {/* Stats overlay */}
                <div className={`absolute bottom-3 left-3 right-3 flex justify-between items-center transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                    <div className="flex items-center space-x-3 text-white">
                        <div className="flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                            <Eye size={12} />
                            <span className="text-xs">{views}</span>
                        </div>
                        <div className="flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                            <Heart size={12} />
                            <span className="text-xs">{likes}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Title and Creator */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        by <span className="font-medium text-primary-600 dark:text-primary-400">{creator}</span>
                    </p>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Current Price</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                            {price}
                        </p>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Hover effect border */}
            <div className={`absolute inset-0 rounded-2xl border-2 border-primary-400 transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>
        </MotionDiv>
    );
};

export default TailwindNFTCard;
