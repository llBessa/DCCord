import { Flex, HStack } from "@chakra-ui/react";
import Chat from "../components/Chat";
import ChatInfo from "../components/ChatInfo";
import LeftSideBar from "../components/LeftSideBar";
import Navigation from "../components/Navigation";

export default function ChatPage() {
  const user = {name: "Lucas Bessa", photo: "https://github.com/llBessa.png"}
  
  return (
    <HStack h="100vh" spacing={0}>
      <Flex as="nav" h="full" maxW={16} w="full" bg="gray.100">
        <Navigation />
      </Flex>
      <Flex
        as="aside"
        h="full"
        maxW="sm"
        w="full"
        borderRightColor="gray.100"
        borderRightWidth={1}
        pt={8}
        justifyContent="center"
      >
        <LeftSideBar />
      </Flex>
      <Flex
        as="main"
        h="full"
        flex={1}
        borderRightColor="gray.100"
        borderRightWidth={1}
        justifyContent={"center"}
      >
        <Chat user={user} />
      </Flex>
      <Flex as="aside" h="full" maxW="sm" w="full" justifyContent={"center"}>
        <ChatInfo />
      </Flex>
    </HStack>
  );
}
