import { VStack } from "@chakra-ui/react";
import Profile from "./Profile";
import FriendsOnline from "./FriendsOnline"
import ChatHistory from "./ChatHistory"

export default function LeftSideBar() {
  return (
    <VStack
    justify={"space-around"}
    alignItems={"center"}
    h={"100%"}
    gap={2}
    >
      <Profile name="Lucas Bessa" srcProfile="https://github.com/llBessa.png"/>
      <FriendsOnline />
      <ChatHistory />
    </VStack>
  );
}
