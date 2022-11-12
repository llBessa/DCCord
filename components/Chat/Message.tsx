import { Text, VStack } from "@chakra-ui/react";

interface MessageProps {
    text: string;
    time: string;
    isSender: string;
}

export default function Message({text, time, isSender}: MessageProps){
    const alignItem = isSender? "flex-end" : "flex-start";
    const bgMessage = isSender? "blue.500" : "gray.500"
    return(
        <VStack w={"fit-content"} alignSelf={alignItem}>
            <Text rounded={"6%"} bg={bgMessage} p={2}>{text}</Text>
            <Text alignSelf={alignItem}>{time}</Text>
        </VStack>
    )
}