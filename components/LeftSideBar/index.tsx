import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext";
import { LayoutProps, VStack } from "@chakra-ui/react";
import Profile from "./Profile";
import FriendsOnline from "./FriendsOnline"
import ChatHistory from "./ChatHistory"

export default function LeftSideBar({ width, height, display }: LayoutProps) {
  const { user } = useContext(AuthContext)

  return (
    <VStack
      alignItems={"center"}
      justifyContent="space-around"
      w={width}
      h={height}
      gap={2}
      display={display}
    >
      <Profile name="Lucas Bessa" srcProfile={(user && user.github) ? `${user.github}.png` : undefined} />
      <FriendsOnline />
      <ChatHistory />
    </VStack>
  );
}
