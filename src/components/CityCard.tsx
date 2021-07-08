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
      h={['20vh', '29vh', '28vh', '20vh', '38vh']}
      w={['100%', '100%', '100%', '100%', '18vw']}
      direction="column"
      borderRadius="5"
      overflow="hidden"
      align="center"
    >
      <Flex
        h={['60%', '55%', '50%']}
        w={['85%', '100%']}
        backgroundImage={cityImageURL}
        backgroundSize="100% auto"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      ></Flex>

      <Flex
        w={['85%', '100%']}
        justify="space-between"
        h={['40%', '45%', '40%']}
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
          <Text
            as="h4"
            fontSize={['18px', '24px']}
            fontWeight="600"
            color="dark.900"
          >
            {city}
          </Text>
          <Text
            as="p"
            fontSize={['15px', '18px']}
            color="dark.600"
            fontWeight="500"
          >
            {country}
          </Text>
        </Flex>

        <Flex h="100%" justify="center" align="center">
          <Flex
            borderRadius="100%"
            overflow="hidden"
            h={['45', '55px']}
            w={['45px', '55px']}
          >
            <Image h="100%" w="auto" src={countryFlagSRC} alt={country} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
