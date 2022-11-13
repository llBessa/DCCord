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
        <VStack w={"full"} h={"fit-content"}>
            <HStack justifyContent={"space-between"} w="full">
                <Heading size={"md"}>Friends Online</Heading>
                <Text fontSize={"sm"}>23</Text>
            </HStack>
            <HStack justifyContent={"space-between"} w="full">
                {onlineFriends.map((friend , index) => (
                    <Friend key={index} nome={friend.nome} foto={friend.foto} />
                ))}
            </HStack>
        </VStack>
    )
}