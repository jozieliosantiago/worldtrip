import { Flex, Text, Image } from '@chakra-ui/react';

interface TravelTypeProps {
  srcImage: string;
  text: string;
  alt: string;
}

export function TravelType({ srcImage, text, alt }: TravelTypeProps) {
  return (
    <Flex direction="column" align="center">
      <Image height="120px" src={srcImage} alt={alt} />
      <Text as="h2" fontSize="24px" pt="8" fontWeight="medium" color="dark.900">
        {text}
      </Text>
    </Flex>
  );
}
