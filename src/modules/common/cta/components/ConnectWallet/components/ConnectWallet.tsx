"use client";
import { useWalletModal } from "@/modules/modals/hooks";
import { PlusIcon } from "@/theme/icons";
import { Button, Icon, useColorModeValue } from "@chakra-ui/react";
import React, { FC } from "react";
import Connected from "./Connected";
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient";
import { useAndromedaStore } from "@/zustand/andromeda";
import { Wallet } from "lucide-react";

interface ConnectWalletProps { }

const ConnectWallet: FC<ConnectWalletProps> = (props) => {
  const { } = props;
  const { isLoading } = useAndromedaStore();
  const client = useAndromedaClient();
  const open = useWalletModal();

  if (client) {
    return <Connected data-testid="connected-wallet" />;
  }

  return (
    <Button
      leftIcon={<Icon as={Wallet} boxSize={4} />}
      colorScheme="primary"
      onClick={open}
      isLoading={isLoading}
      data-testid="connect-wallet-button"
      size="md"
      fontWeight="semibold"
      _hover={{
        transform: "translateY(-1px)",
        shadow: "lg",
        bg: "primary.600"
      }}
      _active={{ transform: "translateY(0)" }}
      transition="all 0.2s"
      borderRadius="lg"
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectWallet;
