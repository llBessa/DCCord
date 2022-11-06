import { useContext } from "react"
import { Avatar, Box, Flex, HStack, Icon, IconButton, Input, Text, VStack } from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md"
import { RiSendPlaneFill } from "react-icons/ri"
import { AuthContext } from "../../contexts/AuthContext";
import Search from "../LeftSideBar/Search"
import Message from "./Message";

export default function Chat() {
    const { user } = useContext(AuthContext)
    
    return (
        <VStack justifyContent={"space-around"} h="100%" >
            <Search placeholder={"Search friends"} />
            <Box w={"100%"} h={"70%"}>
                <VStack alignItems={"flex-start"} spacing={0}>
                    <Text fontSize={"sm"}>Chat with</Text>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>Acauan Ribeiro</Text>
                </VStack>
                <Box borderWidth={"1px"} rounded={"2%"} w="100%" h={"90%"} overflowX={"hidden"} p={6}>
                    <Flex direction={"column"} gap={4} w="100%" h={"100%"} overflowY={"scroll"} paddingRight="48px" boxSizing="content-box">
                        <Message text={"Bom dia professor!"} time={"8:30"} isSender={true} />
                        <Message text={"Esqueça tudo!"} time={"8:30"} />
                        <Message text={"Opa"} time={"8:30"} isSender={true} />
                        <Message text={"Eai"} time={"8:30"} />
                        <Message text={"Bla Bla Bla Bla Bla Bla Bla Bla"} time={"8:30"} isSender={true} />
                        <Message text={"Bla Bla Bla Bla Bla Bla Bla Bla"} time={"8:30"} />
                        <Message text={"Bla Bla Bla Bla Bla Bla Bla Bla"} time={"8:30"} isSender={true} />
                        <Message text={"Bla Bla Bla Bla Bla Bla Bla Bla"} time={"8:30"} />
                        <Message text={"Bla Bla Bla Bla Bla Bla Bla Bla"} time={"8:30"} isSender={true} />
                        <Message text={"Bla Bla Bla Bla Bla Bla Bla Bla"} time={"8:30"} />
                    </Flex>
                </Box>
            </Box>
            <HStack gap={2} w={"100%"}>
                <Avatar name={user?.name} src={user?.photo} />
                <Input type={"text"} placeholder="Type your message" />
                <IconButton>
                    <MdMoreVert size={25} />
                </IconButton>
                <IconButton bg={"blue.300"} color={"white"}>
                    <RiSendPlaneFill size={25} />
                </IconButton>
            </HStack>
        </VStack>
    )
}