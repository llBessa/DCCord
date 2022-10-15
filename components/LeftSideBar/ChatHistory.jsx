import { Heading, Input, VStack } from "@chakra-ui/react";

export default function ChatHistory(){
    return(
        <VStack>
            <Heading size={"md"}>Chat History</Heading>
            <Input 
                variant={"filled"}
                mt={2}
                minW={10}
                rounded={"full"}
                placeholder={"checked"}
            />
        </VStack>
    )
}