import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

interface SearchProps {
    placeholder: string;
}

export default function Search({placeholder} : SearchProps){
    return(
        <InputGroup>
            <InputRightElement pointerEvents={"none"}>
                <SearchIcon />
            </InputRightElement>
            <Input rounded={"full"} type={"search"} placeholder={placeholder} />
        </InputGroup>
    )
}