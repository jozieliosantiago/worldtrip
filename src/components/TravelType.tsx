import { Flex, Text, Image } from '@chakra-ui/react';

interface TravelTypeProps {
  srcImage: string;
  text: string;
  alt: string;
}

export function TravelType({ srcImage, text, alt }: TravelTypeProps) {
  return (
    <Flex direction="column" align="center" pt={['4', '0']}>
      <Image height={['40px', '120px']} src={srcImage} alt={alt} />
      <Text
        as="h2"
        fontSize={['12px', '24px']}
        pt={['2', '8']}
        fontWeight="medium"
        color="dark.900"
      >
        {text}
      </Text>
    </Flex>
  );
}
