import { Flex, HStack } from "@chakra-ui/react";
import LeftSideBar from "../components/LeftSideBar";
import Navigation from "../components/Navigation";

export default function ChatPage() {
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
      >
        {/* <Chat /> */}
      </Flex>
      <Flex as="aside" h="full" maxW="sm" w="full">
        {/* <ChatFiles /> */}
      </Flex>
    </HStack>
  );
}
