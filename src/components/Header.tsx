import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex w="100%" as="header" h="8vh" p="20px" justify="center" align="center">
      <Image src="./images/logo.svg" alt="logo" />
    </Flex>
  );
}
