import React, { FC, ReactNode } from "react"
import Providers from "./providers";
import { Metadata } from "next";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: "Andromeda NFT Marketplace",
        template: "%s | Andromeda Marketplace"
    },
    description: "Discover, collect, and trade extraordinary NFTs in the most advanced decentralized marketplace. Built for creators, collectors, and the future of digital ownership.",
    keywords: ["NFT", "marketplace", "blockchain", "crypto", "digital art", "collectibles", "Andromeda"],
    authors: [{ name: "Andromeda Protocol" }],
    creator: "Andromeda Protocol",
    publisher: "Andromeda Protocol",
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
    openGraph: {
        type: "website",
        title: "Andromeda NFT Marketplace",
        description: "The future of NFT trading - discover, collect, and trade extraordinary digital assets.",
        siteName: "Andromeda Marketplace",
    },
    twitter: {
        card: "summary_large_image",
        title: "Andromeda NFT Marketplace",
        description: "The future of NFT trading - discover, collect, and trade extraordinary digital assets.",
    },
}

interface Props {
    children?: ReactNode;
}

const RootLayout = async (props: Props) => {
    const { children } = props;

    return (
        <html lang="en" className={inter.className}>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}

export default RootLayout