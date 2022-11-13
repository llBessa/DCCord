import { LinkIcon } from "@chakra-ui/icons";
import { HStack, Text, useColorModeValue, VStack } from "@chakra-ui/react";

interface LinkCardProps {
    src: string;
    date: string;
    time: string;
}

export default function LinkCard({ src, date, time }: LinkCardProps) {
    const textColor = useColorModeValue("black", "gray.300")

    return (
        <HStack>
            <LinkIcon />
            <VStack w={"100%"} p={2}>
                <HStack w={"100%"} justifyContent={"space-between"}>
                    <Text fontWeight={"bold"}>{src}</Text>
                    <Text fontSize={"sm"} color={textColor}>{time}</Text>
                </HStack>
                <Text alignSelf={"flex-start"} fontSize={"sm"} color={textColor}>{date}</Text>
            </VStack>
        </HStack>
    )
}