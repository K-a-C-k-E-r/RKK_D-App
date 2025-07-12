"use client";
import useApp from "@/lib/app/hooks/useApp";
import { ICollectionCw721 } from "@/lib/app/types";
import { useGetCw721Token } from "@/lib/graphql/hooks/cw721";
import FallbackImage from "@/modules/common/ui/Image/FallbackImage";
import Cw721TokenAction from "@/modules/cw721/token/TokenAction";
import { LINKS } from "@/utils/links";
import {
  Box,
  GridItem,
  SimpleGrid,
  Text,
  VStack,
  useToken,
  useColorModeValue,
  Card,
  CardBody,
  Badge,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { FC } from "react";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

interface FeaturedItemProps {
  collection: ICollectionCw721;
  index: number;
}
const FeaturedItem: FC<FeaturedItemProps> = (props) => {
  const { collection, index } = props;
  const { data: token } = useGetCw721Token(collection.cw721, collection.featured || "");
  const [primary] = useToken("colors", ["primary.300"]);
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  if (!token || !collection.featured) return null;

  return (
    <MotionCard
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      bg={cardBg}
      border="1px"
      borderColor={borderColor}
      borderRadius="xl"
      overflow="hidden"
      _hover={{
        transform: "translateY(-5px)",
        shadow: "2xl",
        borderColor: "primary.400",
      }}
      style={{ transition: "all 0.3s" }}
    >
      <CardBody p={0}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0}>
          <GridItem>
            <Box position="relative">
              <Badge
                position="absolute"
                top={4}
                left={4}
                colorScheme="purple"
                fontSize="xs"
                px={2}
                py={1}
                borderRadius="full"
                zIndex="1"
              >
                ⭐ Featured
              </Badge>
              <Link href={LINKS.cw721Token(collection.id, collection.featured)}>
                <FallbackImage
                  src={token?.metadata?.image}
                  alt="Featured NFT"
                  w="full"
                  h={{ base: "300px", lg: "400px" }}
                  objectFit="cover"
                  cursor="pointer"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  transition="all 0.3s"
                />
              </Link>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={8} h="full" display="flex" flexDirection="column" justifyContent="center">
              <VStack align="start" spacing={4} h="full">
                <Box>
                  <Text fontSize="sm" color="gray.500" mb={2}>
                    {collection.name}
                  </Text>
                  <Heading size="lg" mb={4}>
                    {token?.metadata?.name}
                  </Heading>
                  <Text color="gray.600" mb={6} noOfLines={3}>
                    {token?.metadata?.description}
                  </Text>
                </Box>
                <Box w="full">
                  <Cw721TokenAction
                    collection={collection}
                    tokenId={collection.featured}
                  />
                </Box>
              </VStack>
            </Box>
          </GridItem>
        </SimpleGrid>
      </CardBody>
    </MotionCard>
  );
};

interface Props {
}

const Featured: FC<Props> = (props) => {
  const { } = props;
  const { config } = useApp();

  const featuredCollections = config.collections.filter(col =>
    "featured" in col && col.featured && col.featured.length > 0
  );

  if (featuredCollections.length === 0) return null;

  return (
    <VStack alignItems="stretch" spacing={8}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        textAlign="center"
      >
        <Heading size="lg" mb={2}>
          🔥 Featured Collections
        </Heading>
        <Text color="gray.600">
          Handpicked highlights from our most popular collections
        </Text>
      </MotionBox>

      <VStack spacing={8}>
        {featuredCollections.map((col, index) => (
          <FeaturedItem
            key={col.id}
            collection={col as ICollectionCw721}
            index={index}
          />
        ))}
      </VStack>
    </VStack>
  )
}

export default Featured
