import { Flex, Text, VStack } from "@chakra-ui/react";

interface MessageProps {
    name: string;
    text: string;
    time?: string;
    isSender: boolean;
}

export default function Message({ text, time, isSender, name }: MessageProps) {
    const alignItem = isSender ? "flex-end" : "flex-start";
    const bgMessage = isSender ? "purple.500" : "gray.500"
    return (
        <VStack w={"fit-content"} alignSelf={alignItem}>
            <Flex direction={"column"} rounded={"6%"} bg={bgMessage}>
                <Text rounded={"6%"} borderBottom="none" fontWeight={"bold"} bg={"purple.600"} color={"white"} p={2}>{name}</Text>
                <hr />
                <Text color={"white"} p={2}>{text}</Text>
            </Flex>
            {time? <Text alignSelf={alignItem}>{time}</Text> : undefined}
        </VStack>
    )
}