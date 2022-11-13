import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import ChatCard from "./ChatCard";
import Search from "./Search";

export default function ChatHistory() {
    const friends = [
        { nome: "Acauan Ribeiro", foto: "https://github.com/acauanrr.png" },
        { nome: "Cleuson", foto: "https://github.com/cleusonss.png" },
        { nome: "Ozeias Sousa", foto: "https://github.com/osouzati.png" },
        { nome: "Victor Roberto", foto: "https://github.com/mandaver.png" },
        { nome: "Rafael Nobrega", foto: "https://github.com/KylixXD.png" }
    ]

    return (
        <VStack w="full" h={"fit-content"} overflowY="hidden">
            <Box w={"inherit"} h="fit-content">
                <Heading size={"md"} mb={4}>Chats</Heading>
                <Search placeholder={"Search friends"} display={"block"} />
            </Box>
            <Flex w="inherit" h={"fit-content"} direction={"column"} gap={2} overflowY={"auto"} className="customScroll" padding={2}>
                {friends.map((friend, index) => (
                    <>
                        <ChatCard key={index} nome={friend.nome} foto={friend.foto} />
                        <hr />
                    </>
                ))}
            </Flex>
        </VStack>
    )
}