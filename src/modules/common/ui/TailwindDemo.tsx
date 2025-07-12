"use client";
import {
    Box,
    Button,
    Card,
    CardBody,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Badge,
    useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { FC } from "react";
import { tailwindUtils, cn } from "@/utils/tailwind";

const MotionBox = motion(Box);

interface Props { }

const TailwindDemoComponent: FC<Props> = (props) => {
    const { } = props;
    const cardBg = useColorModeValue("white", "gray.800");

    return (
        <Container maxW="7xl" className={tailwindUtils.container}>
            <VStack spacing={8} className={tailwindUtils.spacing.section}>
                {/* Header with Tailwind gradient text */}
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={tailwindUtils.animations.fadeIn}
                >
                    <VStack spacing={4} textAlign="center">
                        <Badge
                            colorScheme="purple"
                            className={cn(
                                "tw-animate-pulse tw-shadow-lg",
                                tailwindUtils.effects.shadow.colored
                            )}
                        >
                            🎨 Tailwind + Chakra UI Demo
                        </Badge>
                        <Heading
                            size="2xl"
                            className={cn(
                                tailwindUtils.text.gradient,
                                "tw-font-bold tw-text-center"
                            )}
                        >
                            Enhanced with Tailwind CSS
                        </Heading>
                        <Text
                            className={cn(
                                tailwindUtils.text.pretty,
                                "tw-max-w-2xl tw-text-center tw-text-lg"
                            )}
                        >
                            This component demonstrates how Tailwind CSS works seamlessly alongside
                            Chakra UI without breaking the existing design.
                        </Text>
                    </VStack>
                </MotionBox>

                {/* Grid of demonstration cards */}
                <Box className={cn(tailwindUtils.gridCols[3], "tw-gap-6 tw-w-full")}>
                    {/* Animation Card */}
                    <Card
                        bg={cardBg}
                        className={cn(
                            tailwindUtils.animations.hover,
                            tailwindUtils.effects.shadow.soft,
                            "tw-border-0 tw-overflow-hidden"
                        )}
                    >
                        <CardBody className="tw-space-y-4">
                            <Box className="tw-w-12 tw-h-12 tw-bg-primary-500 tw-rounded-lg tw-animate-pulse"></Box>
                            <Heading size="md">Smooth Animations</Heading>
                            <Text className="tw-text-gray-600 dark:tw-text-gray-300">
                                Hover effects and transitions powered by Tailwind CSS
                            </Text>
                        </CardBody>
                    </Card>

                    {/* Glassmorphism Card */}
                    <Card
                        className={cn(
                            tailwindUtils.effects.glassmorphism,
                            tailwindUtils.animations.scale,
                            "tw-backdrop-blur-sm"
                        )}
                    >
                        <CardBody className="tw-space-y-4">
                            <Box className="tw-w-12 tw-h-12 tw-bg-gradient-to-br tw-from-primary-400 tw-to-primary-600 tw-rounded-lg"></Box>
                            <Heading size="md" className="tw-text-white">
                                Glass Effect
                            </Heading>
                            <Text className="tw-text-white/80">
                                Modern glassmorphism design with backdrop blur
                            </Text>
                        </CardBody>
                    </Card>

                    {/* Gradient Card */}
                    <Card
                        className={cn(
                            tailwindUtils.effects.gradient.primary,
                            tailwindUtils.animations.hover,
                            "tw-text-white tw-border-0"
                        )}
                    >
                        <CardBody className="tw-space-y-4">
                            <Box className="tw-w-12 tw-h-12 tw-bg-white/20 tw-rounded-lg tw-backdrop-blur-sm"></Box>
                            <Heading size="md">Gradient Backgrounds</Heading>
                            <Text className="tw-text-white/90">
                                Beautiful gradients that match the design system
                            </Text>
                        </CardBody>
                    </Card>
                </Box>

                {/* Button demonstrations */}
                <HStack spacing={4} flexWrap="wrap" justify="center">
                    <Button
                        colorScheme="primary"
                        className={cn(
                            tailwindUtils.animations.scale,
                            "tw-shadow-lg hover:tw-shadow-xl"
                        )}
                    >
                        Animated Button
                    </Button>

                    <Button
                        variant="outline"
                        className={cn(
                            tailwindUtils.animations.hover,
                            "tw-border-2 hover:tw-border-primary-500"
                        )}
                    >
                        Hover Effect
                    </Button>

                    <Button
                        className={cn(
                            tailwindUtils.effects.gradient.primary,
                            tailwindUtils.animations.scale,
                            "tw-text-white tw-border-0 hover:tw-shadow-2xl"
                        )}
                    >
                        Gradient Button
                    </Button>
                </HStack>

                {/* Responsive demonstration */}
                <Box className="tw-w-full">
                    <Text className={tailwindUtils.responsive.show.mobile} textAlign="center">
                        📱 Mobile View - Tailwind responsive utilities working!
                    </Text>
                    <Text className={tailwindUtils.responsive.show.desktop} textAlign="center">
                        🖥️ Desktop View - Tailwind responsive utilities working!
                    </Text>
                </Box>

                {/* Typography demonstration */}
                <VStack spacing={4} className="tw-text-center">
                    <Text className={cn(tailwindUtils.text.gradient, "tw-text-2xl tw-font-bold")}>
                        Beautiful Typography
                    </Text>
                    <Text className={cn(tailwindUtils.text.balance, "tw-max-w-lg")}>
                        Tailwind CSS typography utilities work perfectly with Chakra UI&apos;s
                        component system, providing additional styling flexibility.
                    </Text>
                </VStack>
            </VStack>
        </Container>
    );
};

export default TailwindDemoComponent;
