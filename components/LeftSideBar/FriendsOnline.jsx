import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Friend from "./Friend";

export default function FriendsOnline(){
    const onlineFriends = [
        {nome: "Acauan Ribeiro", github: "https://github.com/acauanrr.png"},
        {nome: "Cleuson", github: "https://github.com/cleusonss.png"},
        {nome: "Ozeias Sousa", github: "https://github.com/osouzati.png"},
        {nome: "Victor Roberto", github: "https://github.com/mandaver.png"}
    ]
    return(
        <VStack marginTop={"50px"}>
            <HStack w={"100%"} justifyContent={"space-between"}>
                <Heading size={"xs"}>Friends Online</Heading>
                <Text fontSize={"sm"}>23</Text>
            </HStack>
            <HStack>
                {onlineFriends.map((friend , index) => (
                    <Friend nome={friend.nome} github={friend.github} />
                ))}
            </HStack>
        </VStack>
    )
}