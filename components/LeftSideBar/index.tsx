import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext";
import { VStack } from "@chakra-ui/react";
import Profile from "./Profile";
import FriendsOnline from "./FriendsOnline"
import ChatHistory from "./ChatHistory"

interface LeftSideBarProps {
  width: string;
  height: string;
}

export default function LeftSideBar({ width, height }: LeftSideBarProps) {
  const { user } = useContext(AuthContext)

  return (
    <VStack
      justify={"space-around"}
      alignItems={"center"}
      h={"100%"}
      gap={2}
    >
      <Profile name="Lucas Bessa" srcProfile={(user && user.github) ? `${user.github}.png` : undefined} />
      <FriendsOnline />
      <ChatHistory />
    </VStack>
  );
}
