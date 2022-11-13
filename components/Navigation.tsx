import { VStack, Image, Box, IconButton, Tooltip, useColorModeValue, LayoutProps, ChakraProvider, useColorMode } from "@chakra-ui/react";
import { MdDashboard, MdLogout, MdMail, MdSettings } from "react-icons/md";
import { HiLightningBolt, HiBell, HiTag, HiSearch } from "react-icons/hi";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navigation({ display }: LayoutProps) {
  const navBackground = useColorModeValue("gray.300", "gray.700")
  const { toggleColorMode, colorMode } = useColorMode();
  const router = useRouter()

  function logout() {
    destroyCookie(undefined, "DCCord-token", { priority: "high" })
    router.push("/")
  }

  return (
    <VStack
      p={2}
      justifyContent={"space-between"}
      alignItems="center"
      w="fit-content"
      h={"100%"}
      bg={navBackground}
      display={display}
    >
      <VStack gap={6}>
        <Image
          src="/images/dcc-chat-logo.png"
          alt="logo"
          w={"40px"}
          objectFit="contain"
        />
        <VStack>
        {colorMode == "light"
        ?
          <Tooltip label="light" placement="right">
              <IconButton
                color="yellow.500"
                icon={<SunIcon />}
                aria-label="light"
                bg={"white"}
                onClick={toggleColorMode}
              />
            </Tooltip>
        :
          <Tooltip label="Dark" placement="right">
            <IconButton
              color="white"
              icon={<MoonIcon />}
              aria-label="Dark"
              bg={"blue.800"}
              onClick={toggleColorMode}
            />
          </Tooltip>
      }
          <Tooltip label="Dashboard" placement="right">
            <IconButton
              color="gray.500"
              icon={<MdDashboard />}
              aria-label="Dashboard"
            />
          </Tooltip>
          <Tooltip label="Actions" placement="right">
            <IconButton
              color="gray.500"
              icon={<HiLightningBolt />}
              aria-label="Actions"
            />
          </Tooltip>
          <Tooltip label="Search" placement="right">
            <IconButton
              color="gray.500"
              icon={<HiSearch />}
              aria-label="Search"
            />
          </Tooltip>
          <Tooltip label="Notifications" placement="right">
            <IconButton
              color="gray.500"
              icon={<HiBell />}
              aria-label="Notifications"
            />
          </Tooltip>
          <Tooltip label="Tags" placement="right">
            <IconButton color="gray.500" icon={<HiTag />} aria-label="Tags" />
          </Tooltip>
          <Tooltip label="Messages" placement="right">
            <IconButton
              color="gray.500"
              icon={<MdMail />}
              aria-label="Messages"
            />
          </Tooltip>
          <Tooltip label="Settings" placement="right">
            <IconButton icon={<MdSettings />} color="gray.500" aria-label="Settings" />
          </Tooltip>
        </VStack>
      </VStack>
      <Tooltip label="Log-out" placement="right">
        <IconButton icon={<MdLogout />} color="gray.500" aria-label="Log-out" onClick={() => logout()} />
      </Tooltip>
    </VStack>
  );
}