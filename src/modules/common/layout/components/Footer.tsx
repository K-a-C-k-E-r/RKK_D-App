import { Flex, Text, Link, useColorModeValue } from "@chakra-ui/react";
import React, { FC } from "react";
import useApp from "@/lib/app/hooks/useApp";

interface FooterProps { }

const Footer: FC<FooterProps> = (props) => {
  const { } = props;
  const { config } = useApp();

  const bg = useColorModeValue("gray.100", "#101828");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex
      backgroundColor={bg}
      direction="column"
      textColor={textColor}
      align='center'
      p='4'
      data-testid="footer"
    >
      <Text data-testid="footer-text">
        More Information about <b>ANDROMEDA</b> can be found <Link href='https://www.andromedaprotocol.io/' target="_blank" data-testid="footer-link">here</Link>
      </Text>
    </Flex>
  );
};

export default Footer;
