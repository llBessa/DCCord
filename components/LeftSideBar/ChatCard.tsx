import { Avatar, Flex, HStack, Icon, Text } from "@chakra-ui/react";

interface ChatCardProps {
    foto: string;
    nome: string;
}

export default function ChatCard({foto, nome} : ChatCardProps){
    return(
        <HStack w={"inherit"}>
            <Avatar name={nome} src={foto} />
            <Flex direction={"column"} w="80%">
                <Flex justifyContent={"space-between"}>
                    <Text fontWeight={"bold"}>{nome}</Text>
                    <Text>8:30</Text>
                </Flex>
                <Text>Bom dia, lembra daquele...</Text>
            </Flex>
        </HStack>
    )
}