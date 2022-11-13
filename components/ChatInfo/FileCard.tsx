import { HStack, Image, Text, useColorModeValue, VStack } from "@chakra-ui/react";

interface FileCardProps {
    fileSize: string;
    fileName: string;
    srcImage: string;
    dateTime: string;
}

export default function FileCard({ fileSize, fileName, srcImage, dateTime }: FileCardProps) {
    const textColor = useColorModeValue("black", "gray.300")
    return (
        <HStack>
            <Image src={srcImage} alt={fileName} w="10%" />
            <VStack w={"100%"}>
                <Text fontWeight={"bold"}>{fileName}</Text>
                <HStack justifyContent={"space-between"}>
                    <Text fontSize={"sm"} color={textColor}>{dateTime}</Text>
                    <Text fontSize={"sm"} color={textColor}>{fileSize}</Text>
                </HStack>
            </VStack>
        </HStack>
    )
}