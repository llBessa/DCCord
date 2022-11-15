import { Avatar, AvatarBadge } from "@chakra-ui/react";

interface FriendProps {
    name: string;
    foto: string;
}

export default function Friend({name, foto} : FriendProps) {
    return (
        <Avatar name={name} src={foto}>
            <AvatarBadge boxSize={"40%"} bg={"green.500"} />
        </Avatar>
    )
}