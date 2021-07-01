import { Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  return (
    <Flex w="100%" as="header" h="8vh" p="20px" justify="center" align="center">
      <Link href="/" passHref>
        <Image
          w={['120px', '200px']}
          cursor="pointer"
          src="./images/logo.svg"
          alt="logo"
        />
      </Link>
    </Flex>
  );
}
