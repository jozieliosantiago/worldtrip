import {
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  Grid,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Header } from '../components/Header';
import { TravelType } from '../components/TravelType';

import { Swiper } from '../components/Swiper';

export default function Home() {
  const showPlainImage = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Header />

      <Flex
        bgImg="./images/background.png"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w="100%"
        position="relative"
        paddingLeft={['8', '10', '10', '10', '40']}
        paddingRight={['8', '10', '10', '10', '40']}
        paddingTop={['4', '8']}
        paddingBottom={['4', '8']}
        align="center"
        h={['25vh', '30vh', '35vh', '30vh', '46vh']}
      >
        <Flex
          w="100%"
          color="#F5F8FA"
          direction="column"
          position="relative"
          justify="center"
        >
          <Text position="relative" fontSize={['25px', '40px', '48px']} as="h1">
            5 Continentes, infinitas possibilidades.
          </Text>

          <Text pt="4" as="h5" fontSize={['16px', '22px', '24px']}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        {showPlainImage && (
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
        )}
      </Flex>

      <Flex
        w="100%"
        h={['22vh', '30vh', '35vh', '40vh', '44vh']}
        paddingLeft={['8', '10', '10', '10', '40']}
        paddingRight={['8', '10', '10', '10', '40']}
        align="center"
        justify="space-between"
      >
        <Grid templateColumns={['repeat(3, 1fr)', 'repeat(5, 1fr)']} w="100%">
          <Flex justify="center" align="center">
            <TravelType
              srcImage="./images/cocktail.svg"
              text="vida noturna"
              alt="cocktail"
            />
          </Flex>

          <Flex justify="center" align="center">
            <TravelType srcImage="./images/surf.svg" text="praia" alt="praia" />
          </Flex>

          <Flex justify="center" align="center">
            <TravelType
              srcImage="./images/building.svg"
              text="moderno"
              alt="moderno"
            />
          </Flex>

          <Flex justify="center" align="center">
            <TravelType
              srcImage="./images/museum.svg"
              text="clássico"
              alt="clássico"
            />
          </Flex>

          <Flex justify="center" align="center">
            <TravelType
              srcImage="./images/earth.svg"
              text="e mais..."
              alt="mais"
            />
          </Flex>
        </Grid>
      </Flex>

      <Flex
        justify="center"
        direction="column"
        align="center"
        paddingBottom={['5', '10', '10', '10', '20']}
      >
        <Box
          w={['50px', '100px']}
          mb={['20px', '40px', '60px']}
          borderTop="solid"
          borderColor="dark.900"
          marginTop={['6']}
          border="1px"
        />

        <Box
          textAlign="center"
          fontSize={['20px', '30px', '35px', '40px']}
          color="dark.900"
        >
          <Text as="h2">Vamos nessa?</Text>
          <Text as="h2">Então escolha seu continente</Text>
        </Box>

        <Box
          cursor="pointer"
          w="100%"
          h={['25vh', '30vh', '40vh', '50vh', '60vh']}
          overflow="hidden"
          position="relative"
          paddingLeft={['8', '10', '10', '10', '40']}
          paddingRight={['8', '10', '10', '10', '40']}
          marginTop="10"
        >
          <Swiper />
        </Box>
      </Flex>
    </>
  );
}
