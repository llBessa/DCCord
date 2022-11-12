import { HStack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Chat from "../components/Chat";
import ChatInfo from "../components/ChatInfo";
import LeftSideBar from "../components/LeftSideBar";
import Navigation from "../components/Navigation";

export default function ChatPage() {
  return (
    <HStack h="100vh" justifyContent={"space-around"} overflowX="hidden" gap={6}>
      <Navigation />
      <LeftSideBar width={"20%"} height={"100%"} />
      <Chat width={"50%"} height={"100%"}/>
      <ChatInfo width={"20%"} height="100%" />
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