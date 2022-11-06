import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.300", "gray.700")
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext)

  // realiza o login na pagina
  async function handleSignIn(data: any) {
    await signIn(data)
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Flex direction="column" alignItems="center" gap={3} bg={formBackground} p={12} rounded={6}>
          <Image src="./images/dcc-chat-logo.svg" w="100px" alt="logo dccord" />
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Digite seu email"
              variant="filled"
              {...register("email")}
              type="email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Senha</FormLabel>
            <Input
              placeholder="Digite sua senha"
              variant="filled"
              {...register("password")}
              type="password"
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" w="full">Log-in</Button>
          <Button onClick={toggleColorMode} w="full">Change Color</Button>
        </Flex>
      </form>
    </Flex>
  );
}
