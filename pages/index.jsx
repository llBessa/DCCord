import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.300", "gray.700")
  let inputEmail = useRef()
  let inputSenha = useRef()

  function login(){
    console.table([{email: inputEmail.current.value, senha: inputSenha.current.value}])
  }

  function resetForm(){
    inputEmail.current.value = ""
    inputSenha.current.value = ""
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" bg={formBackground} w={"30%"} p={12} rounded={6}>
          <Heading mb={6}>Log-in</Heading>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Digite seu email"
              variant="filled"
              mb={3}
              type="email"
              ref={inputEmail}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Senha</FormLabel>
            <Input
              placeholder="Digite sua senha"
              variant="filled"
              mb={3}
              type="password"
              ref={inputSenha}
            />
          </FormControl>
          <Button colorScheme="teal" mb={3} onClick={() => {login(); resetForm();}}>Log-in</Button>
          <Button onClick={toggleColorMode}>Change Color</Button>
        </Flex>
      </Flex>
  );
}
