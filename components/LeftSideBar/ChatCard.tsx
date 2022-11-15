import { Avatar, Flex, HStack, Icon, Text } from "@chakra-ui/react";

interface ChatCardProps {
    foto: string;
    name: string;
}

export default function ChatCard({foto, name} : ChatCardProps){
    return(
        <HStack>
            <Avatar name={name} src={foto} />
            <Flex direction={"column"} w="80%">
                <Flex justifyContent={"space-between"}>
                    <Text fontWeight={"bold"}>{name}</Text>
                    <Text>8:30</Text>
                </Flex>
                <Text>Bom dia, lembra daquele...</Text>
            </Flex>
        </HStack>
    )
}