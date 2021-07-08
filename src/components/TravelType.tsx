import { Flex, Text, Image } from '@chakra-ui/react';

interface TravelTypeProps {
  srcImage: string;
  text: string;
  alt: string;
}

export function TravelType({ srcImage, text, alt }: TravelTypeProps) {
  return (
    <Flex direction="column" align="center" pt={['4', '0']}>
      <Image
        height={['40px', '80px', '90px', '120px']}
        src={srcImage}
        alt={alt}
      />
      <Text
        as="h2"
        fontSize={['12px', '19px', '20px', '24px']}
        pt={['2', '6', '7', '8']}
        fontWeight="medium"
        color="dark.900"
        textAlign="center"
      >
        {text}
      </Text>
    </Flex>
  );
}
