import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement, LayoutProps } from "@chakra-ui/react";

interface SearchProps {
    placeholder: string;
    display: LayoutProps["display"]
}

export default function Search({placeholder, display} : SearchProps){
    return(
        <InputGroup display={display}>
            <InputRightElement pointerEvents={"none"}>
                <SearchIcon />
            </InputRightElement>
            <Input rounded={"full"} type={"search"} placeholder={placeholder} />
        </InputGroup>
    )
}