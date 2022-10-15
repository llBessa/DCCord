import { VStack, Text } from "@chakra-ui/react";
import Profile from "./Profile";

export default function LeftSideBar() {
  return (
    <VStack >
      <Profile name="Lucas Bessa" srcProfile="https://github.com/llBessa.png"/>
      
    </VStack>
  );
}
