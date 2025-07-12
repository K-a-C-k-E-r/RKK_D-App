"use client";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Box,
    useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface Props { }

const BreadcrumbNav: FC<Props> = (props) => {
    const { } = props;
    const pathname = usePathname();
    const bg = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.700");

    // Parse pathname to create breadcrumb items
    const pathSegments = pathname.split("/").filter(Boolean);

    if (pathSegments.length === 0) return null;

    const breadcrumbItems = [
        { name: "Home", href: "/" },
        ...pathSegments.map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/");
            const name = segment.charAt(0).toUpperCase() + segment.slice(1);
            return { name, href };
        }),
    ];

    return (
        <Box
            bg={bg}
            border="1px"
            borderColor={borderColor}
            borderRadius="lg"
            px={4}
            py={2}
            mb={6}
        >
            <Breadcrumb
                spacing="8px"
                separator={<ChevronRight size={14} />}
                fontSize="sm"
            >
                {breadcrumbItems.map((item, index) => (
                    <BreadcrumbItem key={item.href} isCurrentPage={index === breadcrumbItems.length - 1}>
                        <BreadcrumbLink
                            as={Link}
                            href={item.href}
                            display="flex"
                            alignItems="center"
                            gap={1}
                            _hover={{
                                textDecoration: "none",
                                color: "primary.500",
                            }}
                        >
                            {index === 0 && <Home size={14} />}
                            {item.name}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                ))}
            </Breadcrumb>
        </Box>
    );
};

export default BreadcrumbNav;
