import { Flex, Image, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { TravelType } from '../components/TravelType';

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
        paddingLeft="40"
        paddingRight="40"
        paddingTop="8"
        paddingBottom="8"
        align="center"
        h="46vh"
      >
        <Flex
          w="100%"
          color="#F5F8FA"
          direction="column"
          position="relative"
          justify="center"
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

      <Flex
        w="100%"
        h="46vh"
        paddingLeft="40"
        paddingRight="40"
        align="center"
        justify="space-between"
      >
        <Flex>
          <TravelType
            srcImage="./images/cocktail.svg"
            text="vida noturna"
            alt="cocktail"
          />
        </Flex>

        <Flex>
          <TravelType srcImage="./images/surf.svg" text="praia" alt="praia" />
        </Flex>

        <Flex>
          <TravelType
            srcImage="./images/building.svg"
            text="moderno"
            alt="moderno"
          />
        </Flex>

        <Flex>
          <TravelType
            srcImage="./images/museum.svg"
            text="clássico"
            alt="clássico"
          />
        </Flex>

        <Flex>
          <TravelType
            srcImage="./images/earth.svg"
            text="e mais..."
            alt="mais"
          />
        </Flex>
      </Flex>
    </>
  );
}
