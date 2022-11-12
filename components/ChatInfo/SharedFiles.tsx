import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import FileCard from "./FileCard";

interface SharedFilesProps {
    files: Array<any>;
}

export default function SharedFiles({ files }: SharedFilesProps) {
    return (
        <VStack h={"40%"} w="80%" justifyContent={"center"} alignItems={"center"}>
            <HStack w={"100%"} h={"10%"} justifyContent={"space-between"}>
                <Text fontWeight={"bold"}>Shared Files</Text>
                <Text>see all</Text>
            </HStack>
            <Box h={"80%"} w={"100%"} overflowX="hidden">
                <Flex direction={"column"} w={"100%"} boxSizing="content-box" paddingRight={"48px"} overflowY="scroll">
                    {files.map((file: any, index: any) => (
                        <FileCard key={index} fileName={file.name} srcImage={file.image} fileSize={file.size} dateTime={file.dateTime} />
                    ))}
                </Flex>
            </Box>
        </VStack>
    )
}