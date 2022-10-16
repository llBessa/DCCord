import { VStack, Image, Box, IconButton, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { MdDashboard, MdMail, MdSettings } from "react-icons/md";
import { HiLightningBolt, HiBell, HiTag, HiSearch } from "react-icons/hi";

export default function Navigation() {
  const navBackground = useColorModeValue("gray.300", "gray.700")
  return (
    <VStack p={2} justifyContent={"space-between"} alignItems="center" w="full" bg={navBackground}>
      <VStack gap={6}>
        <Image
          src="/images/dcc-chat-logo.png"
          alt="logo"
          objectFit="contain"
          />
        <VStack>
          {/* IconButtons with Tooltips */}
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
        </VStack>
      </VStack>
      <Tooltip label="Settigns" placement="right">
        <IconButton icon={<MdSettings />} aria-label="Settigns" />
      </Tooltip>
    </VStack>
  );
}
