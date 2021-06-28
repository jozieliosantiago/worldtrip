import { Flex, Image, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />

      <Flex
        bgImg="./images/background.png"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w="100%"
        position="relative"
        paddingLeft="8"
        paddingRight="8"
        paddingTop="8"
        paddingBottom="8"
        align="center"
      >
        <Flex
          w="100%"
          color="#F5F8FA"
          direction="column"
          position="relative"
          justify="center"
          paddingLeft="40"
          paddingRight="40"
        >
          <Text position="relative" fontSize="48px" as="h1">
            5 Continentes, infinitas possibilidades.
          </Text>

          <Text pt="4" as="h5" fontSize="24px">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <Flex
          w="100%"
          position="relative"
          justify="center"
          sx={{
            transform: 'translateY(75px)',
          }}
        >
          <Image w="550px" src="./images/airplane.svg" alt="airplane" />
        </Flex>
      </Flex>
    </>
  );
}
