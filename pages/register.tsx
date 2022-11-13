import { Button, Flex, FormControl, FormLabel, Image, Input, Link, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import NextLink from "next/link"
import { AuthContext } from "../contexts/AuthContext";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Head from "next/head";

export default function Register() {
    const { register, handleSubmit } = useForm()

    const formBackground = useColorModeValue("gray.300", "gray.700")
    const { toggleColorMode } = useColorMode();

    const { signIn } = useContext(AuthContext)

    async function handleRegister(data: any) {
        let response = await fetch("/api/users/register", {
            method: "POST",
            body: JSON.stringify({ ...data }),
            headers: { "Content-Type": "application/json" }
        })

        if (response.status == 200) {
            await signIn({ email: data.email, password: data.password })
        }

    }

    return (
        <>
            <Head>
                <title>DCCord - Registro</title>
            </Head>
            <Flex h={"100vh"} justifyContent="center" alignItems={"center"}>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <Flex direction="column" alignItems="center" gap={3} bg={formBackground} p={12} rounded={6}>
                        <Image src="./images/dcc-chat-logo.svg" w="100px" alt="logo dccord" />
                        <FormControl isRequired>
                            <FormLabel>Nome</FormLabel>
                            <Input
                                type={"text"}
                                placeholder="Digite o seu nome"
                                {...register("name")}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type={"email"}
                                placeholder="Digite o seu email"
                                {...register("email")}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Senha</FormLabel>
                            <Input
                                type={"password"}
                                placeholder="Digite a sua senha"
                                {...register("password")}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Link do Github <Text display={"inline-block"} color={"gray.500"}>(Opcional)</Text></FormLabel>
                            <Input
                                type={"text"}
                                placeholder="Digite o seu github"
                                {...register("github")}
                            />
                        </FormControl>
                        <Button type="submit" colorScheme="purple" w="full">Registrar-se</Button>
                        <Button onClick={toggleColorMode} w="full">Mudar cor</Button>
                        <Text>Já possui uma conta?</Text>
                        <Button type="submit" colorScheme="teal" w="full">
                            <NextLink href={"/"} passHref>
                                <Link>
                                    Fazer log-in
                                </Link>
                            </NextLink>
                        </Button>
                    </Flex>
                </form>
            </Flex>
        </>
    )
}

// executa no lado do servidor
export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { "DCCord-token": token } = parseCookies(ctx)

    // redireciona o usuario para a pagina inicial caso o token nao seja identificado
    if (token) {
        return {
            redirect: {
                destination: "/chatpage",
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}