import { Avatar, AvatarBadge } from "@chakra-ui/react";

export default function Friend({nome, github}) {
    return (
        <Avatar name={nome} src={github}>
            <AvatarBadge boxSize={4} bg={"green.500"} />
        </Avatar>
    )
}