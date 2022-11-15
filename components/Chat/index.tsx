import { useContext, useEffect, useState } from "react"
import { Avatar, Box, Flex, HStack, IconButton, Image, Input, LayoutProps, Text, VStack } from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md"
import { RiSendPlaneFill } from "react-icons/ri"
import { AuthContext } from "../../contexts/AuthContext";
import Search from "../LeftSideBar/Search"
import io from "socket.io-client"
import Message from "./Message";
import { useRef } from "react";

type Message = {
    user: string,
    message: string;
    time?: string;
    date?: string;
}

export default function Chat({ width, height }: LayoutProps) {
    const { user } = useContext(AuthContext)
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState<Array<Message>>([]);
    const inputRef = useRef(null)

    const socket = io()

    // useEffect(() => {
        
    // })

    function sendMessage(e: any) {
        setMessage(e.target.value)

        if (e.key == "Enter" && message) {
            e.target.value = ""

            // guarda a data do dia atual
            let datatual = Date.now()
            let date = new Date(datatual)

            socket.emit("createdMessage", {
                user: user?.name,
                message,
                time: `${date.getHours()}:${date.getMinutes()}`,
                date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
            });

            setMessage("");
        }
    }

    function sendMessageOnClick() {
        if (message) {
            (inputRef.current as any).value = ""

            // guarda a data do dia atual
            let datatual = Date.now()
            let date = new Date(datatual)

            socket.emit("createdMessage", {
                user: user?.name,
                message,
                time: `${date.getHours()}:${date.getMinutes()}`,
                date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
            });

            setMessage("");
        }
    }

    async function socketInitializer() {
        await fetch("/api/socket");

        socket.on("newLogin", (msg: any) => {
            setMessages([
                ...messages,
                {user: "DCCord", message: `${msg.user} entrou no chat!`}
            ])
        })

        socket.on("newIncomingMessage", (msg: any) => {
            setMessages([
                ...messages,
                { user: msg.user, message: msg.message, time: msg.time, date: msg.date }
            ]);
        });
    }

    useEffect(() => {
        socketInitializer()
    })

    return (
        <Flex
            direction={"column"}
            justifyContent={{ base: "flex-start", md: "space-between" }}
            alignItems={{base: "center", md: "normal"}}
            w={width}
            h={height}
            my={{base: 10, md: 0}}
            gap={4}
        >
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
                    <Text fontSize={"2xl"} fontWeight={"bold"}>Chat geral</Text>
                </VStack>
                <Box borderWidth={"1px"} rounded={"2%"} w="full" h={"90%"} boxSizing="content-box" paddingRight={"1px"}>
                    {/* Local onde as mensagens serao apresentadas */}
                    <Flex mt={2} h={"97%"} className="customScroll" id="chat" direction={"column"} px={2} gap={4} overflowY={"auto"}>
                        {messages.map((message, index) => (
                            <Message key={index} text={message.message} isSender={(message.user == user?.name)} time={message.time?message.time : undefined} name={message.user} />
                        ))}
                    </Flex>
                </Box>
            </Box>
            <HStack w={"full"}>
                <Avatar display={{ base: "none", md: "block" }} name={user?.name} src={(user && user.github) ? `${user.github}.png` : undefined} />
                <Input type={"text"} ref={inputRef} placeholder="Digite uma mensagem" onKeyUp={(e) => sendMessage(e)} />
                <IconButton aria-label="25">
                    <MdMoreVert size={25} />
                </IconButton>
                <IconButton aria-label="25" bg={"blue.300"} color={"white"} onClick={sendMessageOnClick}>
                    <RiSendPlaneFill size={25} />
                </IconButton>
            </HStack>
        </Flex>
    )
}