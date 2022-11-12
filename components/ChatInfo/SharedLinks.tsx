import { HStack, Text, VStack } from "@chakra-ui/react";
import LinkCard from "./LinkCard";

interface SharedLinksProps {
    links: Array<any>;
}

export default function SharedLinks({ links }: SharedLinksProps) {
    return (
        <VStack w="80%">
            <HStack w={"100%"} mb={2} justifyContent={"space-between"}>
                <Text fontWeight={"bold"}>Shared Links</Text>
                <Text>see all</Text>
            </HStack>
            <VStack gap={6} h="80%" w="100%">
                {links.map((link, index) => (
                    <LinkCard key={index} {...link} />
                ))}
            </VStack>
        </VStack>
    )
}