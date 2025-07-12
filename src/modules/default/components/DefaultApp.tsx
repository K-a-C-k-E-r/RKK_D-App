"use client";
import { APP_ENV } from "@/appEnv";
import { Layout } from "@/modules/common/layout";
import { TailwindLayout } from "@/modules/common/layout";
import { DiscoverPage, TailwindDiscoverPage } from "@/modules/discover";
import { LandingPage, TailwindLandingPage } from "@/modules/home";
import { KEPLR_AUTOCONNECT_KEY, connectAndromedaClient, initiateKeplr, useAndromedaStore } from "@/zustand/andromeda";
import { updateConfig } from "@/zustand/app";
import React, { FC, useEffect, useState } from "react"

interface Props {
}

const DefaultApp: FC<Props> = (props) => {
    const { } = props;
    const [showLanding, setShowLanding] = useState(true);
    const [useTailwind, setUseTailwind] = useState(true); // Toggle between Chakra and Tailwind
    const isConnected = useAndromedaStore(state => state.isConnected)
    const chainId = useAndromedaStore(state => state.chainId)
    const isLoading = useAndromedaStore(state => state.isLoading)
    const keplr = useAndromedaStore(state => state.keplr)

    useEffect(() => {
        initiateKeplr();
    }, []);

    useEffect(() => {
        const autoconnect = localStorage.getItem(KEPLR_AUTOCONNECT_KEY);
        if (!isLoading && typeof keplr !== "undefined" && autoconnect === keplr?.mode) {
            if (!isConnected || (isConnected && chainId !== APP_ENV.DEFAULT_CONFIG.chainId)) {
                connectAndromedaClient(APP_ENV.DEFAULT_CONFIG.chainId);
            }
        }
    }, [keplr, isConnected, isLoading, chainId]);

    useEffect(() => {
        updateConfig(APP_ENV.DEFAULT_CONFIG);
    }, [])

    const handleGetStarted = () => {
        setShowLanding(false);
    };

    // Tailwind version
    if (useTailwind) {
        if (showLanding) {
            return (
                <TailwindLayout>
                    <TailwindLandingPage onGetStarted={handleGetStarted} />
                    {/* Toggle button */}
                    <button
                        onClick={() => setUseTailwind(false)}
                        className="fixed top-20 right-4 z-50 px-3 py-1 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                        Switch to Chakra UI
                    </button>
                </TailwindLayout>
            );
        }

        return (
            <TailwindLayout>
                <TailwindDiscoverPage />
                <button
                    onClick={() => setUseTailwind(false)}
                    className="fixed top-20 right-4 z-50 px-3 py-1 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                    Switch to Chakra UI
                </button>
            </TailwindLayout>
        );
    }

    // Chakra UI version (original)
    if (showLanding) {
        return (
            <Layout>
                <LandingPage onGetStarted={handleGetStarted} />
                <button
                    onClick={() => setUseTailwind(true)}
                    className="ui-toggle-button chakra"
                >
                    Switch to Tailwind
                </button>
            </Layout>
        );
    }

    return (
        <Layout>
            <DiscoverPage />
            <button
                onClick={() => setUseTailwind(true)}
                className="ui-toggle-button chakra"
            >
                Switch to Tailwind
            </button>
        </Layout>
    )
}

export default DefaultApp