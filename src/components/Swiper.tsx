import { Box, Image, Flex, Text } from '@chakra-ui/react';

import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper/core';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

export function Swiper() {
  SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

  return (
    <SwiperReact
      className="mySwiper"
      keyboard={true}
      mousewheel={true}
      cssMode={true}
      navigation={true}
      pagination={true}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <Flex h="60vh" justify="center" align="center" overflow="hidden">
          <Flex>
            <Image
              src="https://images.pexels.com/photos/372470/pexels-photo-372470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="europe"
            />
          </Flex>

          <Flex
            h="100%"
            w="100%"
            bg="#00000069"
            position="absolute"
            direction="column"
            textAlign="center"
            justify="center"
          >
            <Text as="h1" color="light.200" fontSize="65" fontWeight="bold">
              Europa
            </Text>
            <Text as="h2" color="light.300" fontSize="25" fontWeight="bold">
              O continente mais antigo.
            </Text>
          </Flex>
        </Flex>
      </SwiperSlide>

      <SwiperSlide>
        <Flex h="60vh" justify="center" align="center" overflow="hidden">
          <Flex>
            <Image
              src="https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="america"
            />
          </Flex>

          <Flex
            h="100%"
            w="100%"
            bg="#00000069"
            position="absolute"
            direction="column"
            textAlign="center"
            justify="center"
          >
            <Text as="h1" color="light.200" fontSize="65" fontWeight="bold">
              América
            </Text>
            <Text as="h2" color="light.300" fontSize="25" fontWeight="bold">
              O continente.
            </Text>
          </Flex>
        </Flex>
      </SwiperSlide>

      <SwiperSlide>
        <Flex h="60vh" justify="center" align="center" overflow="hidden">
          <Flex>
            <Image
              src="https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="asia"
            />
          </Flex>

          <Flex
            h="100%"
            w="100%"
            bg="#00000069"
            position="absolute"
            direction="column"
            textAlign="center"
            justify="center"
          >
            <Text as="h1" color="light.200" fontSize="65" fontWeight="bold">
              Ásia
            </Text>
            <Text as="h2" color="light.300" fontSize="25" fontWeight="bold">
              O continente.
            </Text>
          </Flex>
        </Flex>
      </SwiperSlide>
    </SwiperReact>
  );
}
