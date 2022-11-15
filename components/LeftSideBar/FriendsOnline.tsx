import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Friend from "./Friend";

export default function FriendsOnline(){
    const onlineFriends = [
        {name: "Acauan Ribeiro", foto: "https://github.com/acauanrr.png"},
        {name: "Cleuson", foto: "https://github.com/cleusonss.png"},
        {name: "Ozeias Sousa", foto: "https://github.com/osouzati.png"},
        {name: "Victor Roberto", foto: "https://github.com/mandaver.png"},
        {name: "Rafael Nobrega", foto: "https://github.com/KylixXD.png"}
    ]

    return(
        <VStack w={"full"} h={"fit-content"}>
            <HStack justifyContent={"space-between"} w="full">
                <Heading size={"md"}>Friends Online</Heading>
                <Text fontSize={"sm"}>23</Text>
            </HStack>
            <HStack justifyContent={"space-between"} w="full">
                {onlineFriends.map((friend , index) => (
                    <Friend key={index} name={friend.name} foto={friend.foto} />
                ))}
            </HStack>
        </VStack>
    )
}