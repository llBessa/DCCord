import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import FileCard from "./FileCard";

export default function SharedFiles({files}){
    return(
        <VStack h={"40%"} w="100%">
            <HStack w={"100%"} h={"20%"} justifyContent={"space-between"}>
                <Text fontWeight={"bold"}>Shared Files</Text>
                <Text>see all</Text>
            </HStack>
            <VStack h={"80%"} w={"100%"}>
                {files.map((file, index) => (
                    <FileCard key={index} fileName={file.name} srcImage={file.image} fileSize={file.size} dateTime={file.dateTime} />
                ))}
            </VStack>
        </VStack>
    )
}