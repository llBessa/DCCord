import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import LinkCard from "./LinkCard";

interface SharedLinksProps {
    links: Array<any>;
}

export default function SharedLinks({ links }: SharedLinksProps) {
    return (
        <VStack h={"30%"} w="full" justifyContent={"center"} alignItems={"center"} overflowY="hidden">
            <HStack w={"full"} mb={2} justifyContent={"space-between"}>
                <Text fontWeight={"bold"}>Shared Links</Text>
                <Text _hover={{ color: "cyan" }}>see all</Text>
            </HStack>
            <Flex direction={"column"} w={"full"} overflowY="auto" gap={2} padding={2} className="customScroll">
                {links.map((link, index) => (
                    <div key={index}>
                        <LinkCard {...link} />
                        <hr />
                    </div>
                ))}
            </Flex>
        </VStack>
    )
}