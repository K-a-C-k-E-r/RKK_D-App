"use client";
import { useAppUtils } from "@/lib/app/hooks";
import {
  Box,
  Text,
  VStack,
  Container,
  Heading,
  useColorModeValue,
  SimpleGrid,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { FC, useMemo } from "react";
import CollectionRow from "./CollectionRow";
import Featured from "./Featured";

const MotionBox = motion(Box);

interface DiscoverPageProps { }
const DiscoverPage: FC<DiscoverPageProps> = (props) => {
  const { } = props;
  const { getCollections } = useAppUtils();
  const textColor = useColorModeValue("gray.600", "gray.300");
  const bg = useColorModeValue("white", "gray.900");

  const collections = useMemo(() => {
    return getCollections();
  }, [getCollections]);

  return (
    <Container maxW="7xl" py={8}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          textAlign="center"
          py={8}
        >
          <HStack justify="center" mb={4}>
            <Badge colorScheme="purple" fontSize="sm" px={3} py={1} borderRadius="full">
              🔥 Live Marketplace
            </Badge>
          </HStack>
          <Heading
            size="2xl"
            mb={4}
            bgGradient="linear(to-r, primary.400, primary.600)"
            bgClip="text"
          >
            Discover Amazing NFTs
          </Heading>
          <Text fontSize="lg" color={textColor} maxW="2xl" mx="auto">
            Explore curated collections, discover trending artists, and find your next favorite digital collectible.
          </Text>
        </MotionBox>

        {/* Featured Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Featured />
        </MotionBox>

        {/* Collections Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <VStack spacing={6} align="stretch">
            <Box textAlign="center">
              <Heading size="lg" mb={2}>
                Explore Collections
              </Heading>
              <Text color={textColor}>
                Browse through our carefully curated NFT collections
              </Text>
            </Box>

            <VStack spacing={8} align="stretch">
              {collections.map((col, index) => (
                <MotionBox
                  key={col.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <CollectionRow collectionId={col.id} />
                </MotionBox>
              ))}
            </VStack>
          </VStack>
        </MotionBox>
      </VStack>
    </Container>
  );
};
export default DiscoverPage;
