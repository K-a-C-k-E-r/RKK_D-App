"use client";
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Text,
    VStack,
    HStack,
    Grid,
    GridItem,
    Icon,
    useColorModeValue,
    SimpleGrid,
    Card,
    CardBody,
    Badge,
    Avatar,
    AvatarGroup,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Star, Zap, Shield, Globe, TrendingUp, Users } from "lucide-react";
import React, { FC } from "react";
import { tailwindUtils, cn } from "@/utils/tailwind";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface LandingPageProps {
    onGetStarted: () => void;
}

const LandingPage: FC<LandingPageProps> = ({ onGetStarted }) => {
    const bg = useColorModeValue("white", "gray.900");
    const cardBg = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.600", "gray.300");
    const accentColor = useColorModeValue("primary.600", "primary.400");
    const borderColor = useColorModeValue("gray.200", "gray.700");
    const iconBg = useColorModeValue("primary.50", "primary.900");
    const ctaBg = useColorModeValue("primary.50", "primary.900");
    const ctaBorderColor = useColorModeValue("primary.200", "primary.700");

    const features = [
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Experience blazing fast NFT transactions with our optimized marketplace.",
        },
        {
            icon: Shield,
            title: "Secure & Trusted",
            description: "Built with enterprise-grade security to protect your digital assets.",
        },
        {
            icon: Globe,
            title: "Cross-Chain",
            description: "Trade across multiple blockchains seamlessly with Andromeda Protocol.",
        },
        {
            icon: TrendingUp,
            title: "Analytics",
            description: "Real-time market insights and analytics for informed trading decisions.",
        },
        {
            icon: Users,
            title: "Community",
            description: "Join a thriving community of creators, collectors, and traders.",
        },
        {
            icon: Star,
            title: "Premium Experience",
            description: "Enjoy a premium trading experience with advanced features.",
        },
    ];

    const stats = [
        { label: "Total Volume", value: "$10M+", color: "green" },
        { label: "Active Users", value: "50K+", color: "blue" },
        { label: "Collections", value: "1K+", color: "purple" },
        { label: "Transactions", value: "100K+", color: "orange" },
    ];

    return (
        <Box bg={bg} minH="100vh">
            {/* Hero Section */}
            <Container maxW="7xl" pt={{ base: 20, md: 32 }} pb={{ base: 16, md: 24 }}>
                <MotionFlex
                    direction="column"
                    align="center"
                    textAlign="center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={cn(tailwindUtils.spacing.section, "tw-relative")}
                >
                    <Badge
                        colorScheme="purple"
                        fontSize="sm"
                        px={4}
                        py={2}
                        borderRadius="full"
                        mb={6}
                        className={cn(
                            tailwindUtils.animations.pulse,
                            tailwindUtils.effects.shadow.colored,
                            "tw-backdrop-blur-sm"
                        )}
                    >
                        🚀 Powered by Andromeda Protocol
                    </Badge>

                    <Heading
                        size="3xl"
                        mb={6}
                        bgGradient="linear(to-r, primary.400, primary.600, purple.600)"
                        bgClip="text"
                        lineHeight="1.2"
                        className={cn(
                            tailwindUtils.text.gradient,
                            "tw-text-5xl md:tw-text-6xl lg:tw-text-7xl"
                        )}
                    >
                        The Future of
                        <br />
                        NFT Marketplace
                    </Heading>

                    <Text
                        fontSize="xl"
                        color={textColor}
                        maxW="2xl"
                        mb={8}
                        lineHeight="1.6"
                        className={cn(
                            tailwindUtils.text.pretty,
                            "tw-text-lg md:tw-text-xl lg:tw-text-2xl"
                        )}
                    >
                        Discover, collect, and trade extraordinary NFTs in the most advanced
                        decentralized marketplace. Built for creators, collectors, and the future of digital ownership.
                    </Text>

                    <HStack spacing={4} mb={12} className="tw-flex-wrap tw-justify-center">
                        <Button
                            size="lg"
                            colorScheme="primary"
                            onClick={onGetStarted}
                            px={8}
                            py={6}
                            fontSize="lg"
                            _hover={{ transform: "translateY(-2px)", shadow: "xl" }}
                            transition="all 0.3s"
                            className={cn(
                                tailwindUtils.animations.scale,
                                tailwindUtils.effects.shadow.glow,
                                "tw-font-semibold"
                            )}
                        >
                            Explore Marketplace
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            px={8}
                            py={6}
                            fontSize="lg"
                            _hover={{ transform: "translateY(-2px)" }}
                            transition="all 0.3s"
                            className={cn(
                                tailwindUtils.animations.hover,
                                "tw-backdrop-blur-sm"
                            )}
                        >
                            Learn More
                        </Button>
                    </HStack>

                    {/* User Avatars */}
                    <VStack spacing={2}>
                        <AvatarGroup size="md" max={5}>
                            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                            <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
                            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                            <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                        </AvatarGroup>
                        <Text fontSize="sm" color={textColor}>
                            Join 50,000+ users already trading on our platform
                        </Text>
                    </VStack>
                </MotionFlex>
            </Container>

            {/* Stats Section */}
            <Container maxW="7xl" py={16}>
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
                        {stats.map((stat, index) => (
                            <VStack key={index} spacing={2}>
                                <Text fontSize="3xl" fontWeight="bold" color={accentColor}>
                                    {stat.value}
                                </Text>
                                <Text color={textColor} fontSize="sm">
                                    {stat.label}
                                </Text>
                            </VStack>
                        ))}
                    </SimpleGrid>
                </MotionBox>
            </Container>

            {/* Features Section */}
            <Container maxW="7xl" py={20}>
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    textAlign="center"
                    mb={16}
                >
                    <Heading size="xl" mb={4}>
                        Why Choose Our Marketplace?
                    </Heading>
                    <Text fontSize="lg" color={textColor} maxW="2xl" mx="auto">
                        Experience the next generation of NFT trading with features designed
                        for both beginners and advanced traders.
                    </Text>
                </MotionBox>

                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}
                    className="tw-gap-8"
                >
                    {features.map((feature, index) => (
                        <MotionBox
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                        >
                            <Card
                                bg={cardBg}
                                border="1px"
                                borderColor={borderColor}
                                _hover={{
                                    transform: "translateY(-5px)",
                                    shadow: "xl",
                                    borderColor: accentColor,
                                }}
                                transition="all 0.3s"
                                h="full"
                                className={cn(
                                    tailwindUtils.animations.hover,
                                    tailwindUtils.effects.shadow.soft,
                                    "tw-backdrop-blur-sm"
                                )}
                            >
                                <CardBody p={8} className="tw-space-y-4">
                                    <VStack align="start" spacing={4}>
                                        <Box
                                            p={3}
                                            borderRadius="lg"
                                            bg={iconBg}
                                            color={accentColor}
                                            className={cn(
                                                tailwindUtils.animations.scale,
                                                "tw-transition-colors tw-duration-300"
                                            )}
                                        >
                                            <Icon as={feature.icon} boxSize={6} />
                                        </Box>
                                        <Heading size="md" className="tw-font-bold">
                                            {feature.title}
                                        </Heading>
                                        <Text color={textColor} lineHeight="1.6" className={tailwindUtils.text.pretty}>
                                            {feature.description}
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>
                        </MotionBox>
                    ))}
                </Grid>
            </Container>

            {/* CTA Section */}
            <Container maxW="4xl" py={20}>
                <MotionBox
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Card
                        bg={ctaBg}
                        border="1px"
                        borderColor={ctaBorderColor}
                        p={12}
                        textAlign="center"
                    >
                        <CardBody>
                            <VStack spacing={6}>
                                <Heading size="xl" color={accentColor}>
                                    Ready to Start Trading?
                                </Heading>
                                <Text fontSize="lg" color={textColor} maxW="lg">
                                    Join thousands of creators and collectors in the most advanced
                                    NFT marketplace. Start your journey today.
                                </Text>
                                <Button
                                    size="lg"
                                    colorScheme="primary"
                                    onClick={onGetStarted}
                                    px={10}
                                    py={6}
                                    fontSize="lg"
                                    _hover={{ transform: "translateY(-2px)", shadow: "xl" }}
                                    transition="all 0.3s"
                                >
                                    Get Started Now
                                </Button>
                            </VStack>
                        </CardBody>
                    </Card>
                </MotionBox>
            </Container>
        </Box>
    );
};

export default LandingPage;
