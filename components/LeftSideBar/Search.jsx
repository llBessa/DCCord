import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export default function Search({placeholder}){
    return(
        <InputGroup>
            <InputLeftElement pointerEvents={"none"}>
                <SearchIcon />
            </InputLeftElement>
            <Input rounded={"full"} type={"search"} placeholder={placeholder} />
        </InputGroup>
    )
}