import { Avatar, AvatarBadge, Flex, Heading, HStack, IconButton, VStack } from "@chakra-ui/react";
import { RiInstagramFill, RiTwitterFill, RiGithubFill } from "react-icons/ri"

export default function Profile({ name, srcProfile }) {
  return (
    <Flex>
      <VStack>
        <Avatar name={name} src={srcProfile} size={"2xl"}>
          <AvatarBadge boxSize={4} bg="green.500" />
        </Avatar>
        <Heading as="h4" size="md">
          {name}
        </Heading>
        <HStack>
        <IconButton
            color="gray.500"
            icon={<RiGithubFill size={25}/>}
            aria-label="Actions"
            variant="ghost"
            rounded="full"
          />
          <IconButton
            color="gray.500"
            icon={<RiInstagramFill size={25}/>}
            aria-label="Actions"
            variant="ghost"
            rounded="full"
          />
          <IconButton
            color="gray.500"
            rounded="full"
            icon={<RiTwitterFill size={25}/>}
            aria-label="Actions"
            variant="ghost"
          />
        </HStack>
      </VStack>
    </Flex>
  );
}
