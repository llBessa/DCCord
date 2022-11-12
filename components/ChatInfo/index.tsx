import { Flex, Text, VStack } from "@chakra-ui/react";
import SharedFiles from "./SharedFiles";
import Profile from "../LeftSideBar/Profile"
import SharedLinks from "./SharedLinks";
import { BellIcon } from "@chakra-ui/icons";

interface ChatInfoProps {
    width: string;
    height: string;
}

export default function ChatInfo({ width, height }: ChatInfoProps) {
    const files = [
        { name: "Mapa paricarana", image: "/images/PDF-icon.png", size: "127kb", dateTime: "10/10/2022 at 10:00" },
        { name: "estruturas de piramide", image: "/images/PDF-icon.png", size: "127kb", dateTime: "10/10/2022 at 10:00" },
        { name: "Arquitetura do whatsapp 2", image: "/images/PDF-icon.png", size: "127kb", dateTime: "10/10/2022 at 10:00" },
        { name: "Two piece", image: "/images/PDF-icon.png", size: "127kb", dateTime: "10/10/2022 at 10:00" }
    ]

    const friend = { name: "Acauan Ribeiro", photo: "https://github.com/acauanrr.png" }

    const links = [
        { src: "bymoney.com", date: "10/08/2022", time: "08:00" },
        { src: "polloshermanos.com", date: "10/10/2022", time: "00:00" }
    ]

    return (
        <VStack gap={4} h={height} w={width} justifyContent={"space-around"}>
            <Flex w={"80%"} justifyContent={"space-between"}>
                <Text>12 October 2022</Text>
                <BellIcon />
            </Flex>
            <Profile name={friend.name} srcProfile={friend.photo} />
            <SharedFiles files={files} />
            <SharedLinks links={links} />
        </VStack>
    )
}