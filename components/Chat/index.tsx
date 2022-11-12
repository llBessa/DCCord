import { useContext } from "react"
import { Avatar, Box, ChakraProps, Flex, HStack, Icon, IconButton, Input, Text, VStack } from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md"
import { RiSendPlaneFill } from "react-icons/ri"
import { AuthContext } from "../../contexts/AuthContext";
import Search from "../LeftSideBar/Search"
import Message from "./Message";

interface ChatProps {
    width: string;
    height: string;
}

export default function Chat({width, height}: ChatProps) {
    const { user } = useContext(AuthContext)
    
    return (
        <VStack justifyContent={"space-around"} w={width} h={height} >
            <Search placeholder={"Search friends"} />
            <Box w={"100%"} h={"70%"}>
                <VStack alignItems={"flex-start"} spacing={0}>
                    <Text fontSize={"sm"}>Chat with</Text>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>Acauan Ribeiro</Text>
                </VStack>
                <Box borderWidth={"1px"} rounded={"2%"} w="100%" h={"90%"} overflowX={"hidden"} p={6}>
                    <Flex id="chat" direction={"column"} gap={4} w="100%" h={"100%"} overflowY={"scroll"} paddingRight="48px" boxSizing="content-box">
                    </Flex>
                </Box>
            </Box>
            <HStack gap={2} w={"100%"}>
                <Avatar name={user?.name} src={(user && user.github)? `${user.github}.png` : undefined} />
                <Input type={"text"} placeholder="Type your message" />
                <IconButton aria-label="25">
                    <MdMoreVert size={25} />
                </IconButton>
                <IconButton aria-label="25" bg={"blue.300"} color={"white"}>
                    <RiSendPlaneFill size={25} />
                </IconButton>
            </HStack>
        </VStack>
    )
}