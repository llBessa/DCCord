import { Avatar, AvatarBadge } from "@chakra-ui/react";

interface FriendProps {
    nome: string;
    foto: string;
}

export default function Friend({nome, foto} : FriendProps) {
    return (
        <Avatar name={nome} src={foto}>
            <AvatarBadge boxSize={4} bg={"green.500"} />
        </Avatar>
    )
}