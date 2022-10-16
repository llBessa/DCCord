import { Avatar, Flex, HStack, Icon, Text } from "@chakra-ui/react";

export default function ChatCard({foto, nome}){
    return(
        <HStack>
            <Avatar name={nome} src={foto} />
            <Flex direction={"column"}>
                <Flex justifyContent={"space-between"}>
                    <Text fontWeight={"bold"}>{nome}</Text>
                    <Text>8:30</Text>
                </Flex>
                <Text>Bom dia, lembra daquele...</Text>
            </Flex>
        </HStack>
    )
}