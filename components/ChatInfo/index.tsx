import { Flex, IconButton, LayoutProps, Text, VStack } from "@chakra-ui/react";
import SharedFiles from "./SharedFiles";
import Profile from "../LeftSideBar/Profile"
import SharedLinks from "./SharedLinks";
import { BellIcon } from "@chakra-ui/icons";

export default function ChatInfo({ width, height, display }: LayoutProps) {
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

    // guarda a data do dia atual
    let datatual = Date.now()
    let date = new Date(datatual)

    return (
        <VStack gap={2} h={height} w={width} justifyContent={"space-around"} display={display} overflowY="hidden">
            <Flex w={"80%"} justifyContent={"space-between"} alignItems="center">
                <Text>{`${date.getDate()} ${getMonthName(date.getMonth())}. ${date.getFullYear()}`}</Text>
                <IconButton
                    color="gray.500"
                    rounded="full"
                    icon={<BellIcon boxSize={25} />}
                    aria-label="Actions"
                    variant="ghost"
                />
            </Flex>
            <Profile name={friend.name} srcProfile={friend.photo} />
            <SharedFiles files={files} />
            <SharedLinks links={links} />
        </VStack>
    )
}

function getMonthName(month: number): string {
    let monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    return monthNames[month]
}