import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from "../contexts/AuthContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp