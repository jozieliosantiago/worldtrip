import { Flex, Text, Grid, Tooltip } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

import { CityCard } from '../components/CityCard';
import { Header } from '../components/Header';

export default function Continent() {
  return (
    <>
      <Header />
      <Flex
        h="60vh"
        w="100%"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundImage="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80"
        bgPosition="center"
        position="relative"
      >
        <Flex position="absolute" w="100%" h="100%" bg="#1c14017a">
          <Text
            position="absolute"
            bottom="20"
            left="40"
            as="h1"
            fontSize="50"
            fontWeight="600"
            color="light.200"
          >
            Europa
          </Text>
        </Flex>
      </Flex>

      <Flex
        justify="space-between"
        paddingLeft="40"
        paddingRight="40"
        paddingTop="20"
        paddingBottom="20"
        w="100%"
      >
        <Flex w="45%" alignItems="center" justify="center">
          <Text textAlign="justify" fontSize="24" lineHeight="48px">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Flex>

        <Flex w="45%" justify="space-between" align="center">
          <Flex align="center" direction="column" margin="8">
            <Text as="h3" fontWeight="500" fontSize="70" color="golden.500">
              50
            </Text>
            <Text as="p" fontSize="26" color="dark.900" fontWeight="bold">
              países
            </Text>
          </Flex>
          <Flex align="center" direction="column" margin="8">
            <Text as="h3" fontWeight="500" fontSize="70" color="golden.500">
              60
            </Text>
            <Text as="p" fontSize="26" color="dark.900" fontWeight="bold">
              línguas
            </Text>
          </Flex>
          <Flex align="center" direction="column" margin="8">
            <Text as="h3" fontWeight="500" fontSize="70" color="golden.500">
              27
            </Text>
            <Flex justify="center" align="center">
              <Text
                pr="1"
                as="p"
                fontSize="26"
                color="dark.900"
                fontWeight="bold"
              >
                cidades +100
              </Text>
              <Tooltip label="Mais informações sobre as cidades" fontSize="md">
                <FiInfo fontSize="18px" />
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex w="100%" pl="40" pr="40" direction="column" pb="20">
        <Text as="h2" color="dark.900" fontSize="40">
          Cidades +100
        </Text>

        <Grid
          templateColumns="repeat(4, 1fr)"
          pt="20"
          w="100%"
          gap={6}
          rowGap={12}
        >
          <CityCard
            city="Londres"
            country="Reino Unido"
            countryFlagSRC="./images/flags/tn_uk-flag.gif"
            cityImageURL="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          />

          <CityCard
            city="Paris"
            country="França"
            countryFlagSRC="./images/flags/tn_fr-flag.gif"
            cityImageURL="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          />

          <CityCard
            city="Roma"
            country="Itália"
            countryFlagSRC="./images/flags/tn_it-flag.gif"
            cityImageURL="https://images.unsplash.com/photo-1529260830199-42c24126f198?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
          />

          <CityCard
            city="Praga"
            country="República Tcheca"
            countryFlagSRC="./images/flags/tn_ez-flag.gif"
            cityImageURL="https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
          />

          <CityCard
            city="Amsterdã"
            country="Holanda"
            countryFlagSRC="./images/flags/tn_nl-flag.gif"
            cityImageURL="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          />
        </Grid>
      </Flex>
    </>
  );
}
