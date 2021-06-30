import { Flex, Text, Image } from '@chakra-ui/react';

interface CityCardProps {
  city: string;
  cityImageURL: string;
  country: string;
  countryFlagSRC: string;
}

export function CityCard({
  city,
  cityImageURL,
  country,
  countryFlagSRC,
}: CityCardProps) {
  return (
    <Flex
      h="38vh"
      w="18vw"
      direction="column"
      borderRadius="5"
      overflow="hidden"
    >
      <Flex
        h="60%"
        w="100%"
        backgroundImage={cityImageURL}
        backgroundSize="100% auto"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      ></Flex>

      <Flex
        justify="space-between"
        h="40%"
        p="8"
        borderLeft="solid 1px"
        borderLeftColor="golden.500"
        borderRight="solid 1px"
        borderRightColor="golden.500"
        borderBottom="solid 1px"
        borderBottomColor="golden.500"
        borderBottomLeftRadius="6"
        borderBottomRightRadius="6"
      >
        <Flex direction="column" justify="space-around" fontFamily="Barlow">
          <Text as="h4" fontSize="2xl" fontWeight="600" color="dark.900">
            {city}
          </Text>
          <Text as="p" fontSize="18" color="dark.600" fontWeight="500">
            {country}
          </Text>
        </Flex>

        <Flex h="100%" justify="center" align="center">
          <Flex borderRadius="100%" overflow="hidden" h="55px" w="55px">
            <Image h="100%" w="auto" src={countryFlagSRC} alt={country} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
