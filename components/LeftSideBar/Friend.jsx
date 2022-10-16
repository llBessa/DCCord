import { Avatar, AvatarBadge } from "@chakra-ui/react";

export default function Friend({nome, foto}) {
    return (
        <Avatar name={nome} src={foto}>
            <AvatarBadge boxSize={4} bg={"green.500"} />
        </Avatar>
    )
}