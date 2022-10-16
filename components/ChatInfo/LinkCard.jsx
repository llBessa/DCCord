import { LinkIcon } from "@chakra-ui/icons";
import { HStack, Text, VStack } from "@chakra-ui/react";

export default function LinkCard({src, date, time}){
    return(
        <HStack h={"20%"} w={"100%"}>
            <LinkIcon />
            <VStack w={"100%"} p={2}>
                <HStack w={"100%"} justifyContent={"space-between"}>
                    <Text fontWeight={"bold"}>{src}</Text>
                    <Text fontSize={"sm"} color={"gray.300"}>{time}</Text>
                </HStack>
                <Text alignSelf={"flex-start"} fontSize={"sm"} color={"gray.300"}>{date}</Text>
            </VStack>
        </HStack>
    )
}