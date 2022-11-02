import { Flex, HStack } from "@chakra-ui/react";
import Chat from "../components/Chat";
import ChatInfo from "../components/ChatInfo";
import LeftSideBar from "../components/LeftSideBar";
import Navigation from "../components/Navigation";

export default function ChatPage() {
  const user = {name: "Lucas Bessa", photo: "https://github.com/llBessa.png"}
  
  return (
    <HStack h="100vh" justifyContent={"space-between"} overflowX="hidden">
        <Navigation />
        <LeftSideBar />
        <Chat user={user} />
        <ChatInfo />
    </HStack>
  );
}
