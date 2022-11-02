import { HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function FileCard({fileSize, fileName, srcImage, dateTime}){
    return(
        <HStack h={"20%"} w={"inherit"}>
            <Image src={srcImage} alt={fileName} w="10%"/>
            <VStack w={"80%"}>
                <Text fontWeight={"bold"}>{fileName}</Text>
                <HStack justifyContent={"space-between"}>
                    <Text fontSize={"sm"} color={"gray.300"}>{dateTime}</Text>
                    <Text fontSize={"sm"} color={"gray.300"}>{fileSize}</Text>
                </HStack>
            </VStack>
        </HStack>
    )
}