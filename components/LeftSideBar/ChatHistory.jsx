import { Box, Heading, VStack } from "@chakra-ui/react";
import ChatCard from "./ChatCard";
import Search from "./Search";

export default function ChatHistory(){
    const friends = [
        {nome: "Acauan Ribeiro", foto: "https://github.com/acauanrr.png"},
        {nome: "Cleuson", foto: "https://github.com/cleusonss.png"},
        {nome: "Ozeias Sousa", foto: "https://github.com/osouzati.png"},
        {nome: "Victor Roberto", foto: "https://github.com/mandaver.png"},
        {nome: "Rafael Nobrega", foto: "https://github.com/KylixXD.png"}
    ]

    return(
        <VStack spacing={8}>
            <Box>
                <Heading size={"md"} mb={4}>Chats</Heading>
                <Search placeholder={"Search friends"} />
            </Box>
            {friends.map((friend, index) => (
                <ChatCard key={index} nome={friend.nome} foto={friend.foto} />
            ))}
        </VStack>
    )
}