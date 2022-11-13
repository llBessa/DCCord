import { Box, Flex, HStack, SystemStyleObject, Text, VStack } from "@chakra-ui/react";
import FileCard from "./FileCard";

interface SharedFilesProps {
    files: Array<any>;
}

export default function SharedFiles({ files }: SharedFilesProps) {
    return (
        <VStack h={"30%"} w="full" justifyContent={"center"} alignItems={"center"} overflowY="hidden">
            <HStack w={"full"} h={"10%"} justifyContent={"space-between"}>
                <Text fontWeight={"bold"}>Shared Files</Text>
                <Text _hover={{ color: "cyan" }}>see all</Text>
            </HStack>
            <Flex direction={"column"} w={"full"} overflowY="auto" gap={2} padding={2} className="customScroll">
                {files.map((file: any, index: any) => (
                    <>
                        <FileCard key={index} fileName={file.name} srcImage={file.image} fileSize={file.size} dateTime={file.dateTime} />
                        <hr />
                    </>
                ))}
            </Flex>
        </VStack>
    )
}