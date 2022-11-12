import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Image,
  useColorMode,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  // hooks de tratamento de esquema de cores
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.300", "gray.700")

  // hook de formulario
  const { register, handleSubmit } = useForm();

  // contexto de login
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
          <NextLink href={"/register"} passHref>
            <Link textDecoration={"none"} w="full">
              <Button textDecoration={"inherit"} colorScheme={"purple"} w="full">
                Registrar-se
              </Button>
            </Link>
          </NextLink>
          <Button onClick={toggleColorMode} w="full">Change Color</Button>
        </Flex>
      </form>
    </Flex>
  );
}
