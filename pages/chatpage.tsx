import { HStack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import Chat from "../components/Chat";
import ChatInfo from "../components/ChatInfo";
import LeftSideBar from "../components/LeftSideBar";
import Navigation from "../components/Navigation";

export default function ChatPage() {
  return (
    <>
      <Head>
        <title>DCCord - Chat</title>
      </Head>
      <HStack h={"100vh"} justifyContent="space-around">
        <Navigation display={{ base: "none", md: "flex" }} w={"100%"} />
        <HStack h={"100vh"} justifyContent={"space-around"} overflowX="hidden" gap={6} w="100%">
          <LeftSideBar width={"fit-content"} height={"90%"} display={{ base: "none", md: "flex" }} />
          <Chat width={{ base: "80%", md: "50%", lg: "45%" }} height={"90%"} />
          <ChatInfo width={"20%"} height="90%" display={{ base: "none", xl: "flex" }} />
        </HStack>
      </HStack>
    </>
  );
}

// executa no lado do servidor
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { "DCCord-token": token } = parseCookies(ctx)

  // redireciona o usuario para a pagina inicial caso o token nao seja identificado
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}