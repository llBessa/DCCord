import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import ChatCard from "./ChatCard";
import Search from "./Search";

export default function ChatHistory() {
    const friends = [
        { name: "Acauan Ribeiro", foto: "https://github.com/acauanrr.png" },
        { name: "Cleuson", foto: "https://github.com/cleusonss.png" },
        { name: "Ozeias Sousa", foto: "https://github.com/osouzati.png" },
        { name: "Victor Roberto", foto: "https://github.com/mandaver.png" },
        { name: "Rafael Nobrega", foto: "https://github.com/KylixXD.png" }
    ]

    return (
        <VStack w="full" h={"fit-content"} overflowY="hidden">
            <Box w={"inherit"} h="fit-content">
                <Heading size={"md"} mb={4}>Chats</Heading>
                <Search placeholder={"Search friends"} display={"block"} />
            </Box>
            <Flex w="inherit" h={"fit-content"} direction={"column"} gap={2} overflowY={"auto"} className="customScroll" padding={2}>
                {friends.map((friend, index) => (
                    <div key={index}>
                        <ChatCard name={friend.name} foto={friend.foto} />
                        <hr />
                    </div>
                ))}
            </Flex>
        </VStack>
    )
}