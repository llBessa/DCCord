import { HStack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Chat from "../components/Chat";
import ChatInfo from "../components/ChatInfo";
import LeftSideBar from "../components/LeftSideBar";
import Navigation from "../components/Navigation";
import { getAPIClient } from "../lib/fetch";

export default function ChatPage() {
  return (
    <HStack h="100vh" justifyContent={"space-between"} overflowX="hidden">
      <Navigation />
      <LeftSideBar />
      <Chat />
      <ChatInfo />
    </HStack>
  );
}

// executa no lado do servidor
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {"DCCord-token" : token} = parseCookies(ctx)
  
  // redireciona o usuario para a pagina inicial caso o token nao seja identificado
  if(!token){
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