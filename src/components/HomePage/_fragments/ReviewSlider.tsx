import React from 'react';
import Slider from 'react-slick';

import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';

const REVIEW = [
  {
    writer: 'incourse.run',
    date: '2021.03.29',
    content: '너무순해요',
    pic: 'photo',
    star: '4개',
  },
  {
    writer: 'incourse.ru',
    date: '2021.03.28',
    content: '촉촉해요',
    pic: 'photo',
    star: '4개',
  },
  {
    writer: 'incourse.r',
    date: '2021.03.27',
    content: '건조해요',
    pic: 'photo',
    star: '1개',
  },
  {
    writer: 'incourse.',
    date: '2021.03.26',
    content: '추천해요',
    pic: 'photo',
    star: '5개',
  },
  {
    writer: 'incourse',
    date: '2021.03.25',
    content: '굿굿',
    pic: 'photo',
    star: '3개',
  },
];

export default function ReviewSlider() {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    swipe: true,
    draggable: true,
  };
  return (
    <Box
      overflow="hidden"
      p="2px 24px 2px 2px"
      css={{
        '.slick-slide': {
          paddingRight: '10px',
        },
        '.slick-list': {
          overflow: 'visible',
        },
      }}
    >
      <Slider {...settings}>
        {REVIEW.map((item, i) => (
          <>
            <Box
              px="20px"
              boxShadow="0px 0px 10px rgba(26, 26, 26, 0.1)"
              borderRadius="20px"
            >
              <Flex justifyContent="space-between" pt="26px">
                <Box key={i}>
                  <Text textStyle="titleSmall">{item.writer}</Text>
                  <Text textStyle="textSmall" color="gray.700">
                    {item.date}
                  </Text>
                </Box>
                <Box>{item.star}</Box>
              </Flex>
              <Box pt="30px" h="225px">
                <Text textStyle="text">{item.content}</Text>
              </Box>
              <Box
                border="0.5px solid "
                borderColor="gray.300"
                mb="20px"
                mt="20px"
              ></Box>
              <HStack spacing="10px" pb="30px">
                <Box w="80px" h="80px" bg="yellow.200">
                  {item.pic}
                </Box>
                <Box w="80px" h="80px" bg="tomato">
                  2
                </Box>
                <Box w="80px" h="80px" bg="pink.100">
                  3
                </Box>
              </HStack>
            </Box>
          </>
        ))}
      </Slider>
    </Box>
  );
}
