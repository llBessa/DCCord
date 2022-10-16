import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Friend from "./Friend";

export default function FriendsOnline(){
    const onlineFriends = [
        {nome: "Acauan Ribeiro", foto: "https://github.com/acauanrr.png"},
        {nome: "Cleuson", foto: "https://github.com/cleusonss.png"},
        {nome: "Ozeias Sousa", foto: "https://github.com/osouzati.png"},
        {nome: "Victor Roberto", foto: "https://github.com/mandaver.png"},
        {nome: "Rafael Nobrega", foto: "https://github.com/KylixXD.png"}
    ]

    return(
        <VStack marginTop={"50px"}>
            <HStack w={"100%"} justifyContent={"space-between"}>
                <Heading size={"xs"}>Friends Online</Heading>
                <Text fontSize={"sm"}>23</Text>
            </HStack>
            <HStack>
                {onlineFriends.map((friend , index) => (
                    <Friend key={index} nome={friend.nome} foto={friend.foto} />
                ))}
            </HStack>
        </VStack>
    )
}