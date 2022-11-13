import { useContext } from "react"
import { Avatar, Box, ChakraProps, Flex, HStack, Icon, IconButton, Image, Input, LayoutProps, Text, VStack } from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md"
import { RiSendPlaneFill } from "react-icons/ri"
import { AuthContext } from "../../contexts/AuthContext";
import Search from "../LeftSideBar/Search"
import Message from "./Message";

export default function Chat({ width, height }: LayoutProps) {
    const { user } = useContext(AuthContext)

    return (
        <VStack justifyContent={{ base: "flex-start", md: "space-between" }} w={width} h={height} gap={4}>
            <Search placeholder={"Search friends"} display={{ base: "none", md: "block" }} />
            <Image
                src="/images/dcc-chat-logo.png"
                alt="logo"
                boxSize={"20%"}
                objectFit="contain"
                display={{ md: "none" }}
            />
            <Box w={"full"} h={{ base: "60%", md: "80%" }}>
                <VStack alignItems={"flex-start"} spacing={0} mb={3}>
                    {/* <Text fontSize={"sm"}>Chat Geral</Text> */}
                    <Text fontSize={"2xl"} fontWeight={"bold"}>Chat geral</Text>
                </VStack>
                <Box borderWidth={"1px"} rounded={"2%"} w="full" h={"90%"} boxSizing="content-box" paddingRight={"1px"}>
                    <Flex mt={2} h={"97%"} className="customScroll" id="chat" direction={"column"} px={2} gap={4} overflowY={"auto"}>
                    </Flex>
                </Box>
            </Box>
            <HStack w={"full"}>
                <Avatar display={{ base: "none", md: "block" }} name={user?.name} src={(user && user.github) ? `${user.github}.png` : undefined} />
                <Input type={"text"} placeholder="Digite uma mensaem" />
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