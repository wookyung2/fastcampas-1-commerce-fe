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
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 3,
    slidesPerRow: 1,
    swipe: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  return (
    <>
      <Slider {...settings}>
        <Stack>
          <Flex overflow="hidden">
            {REVIEW.map((item, i) => (
              <>
                <Box
                  w="325px"
                  ml="16px"
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
                    w="285px"
                    border="0.5px solid "
                    borderColor="gray.300"
                    mb="20px"
                    mt="20px"
                  ></Box>
                  <HStack spacing="10px" pl="12.5px" pb="30px">
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
          </Flex>
        </Stack>
      </Slider>
    </>
  );
}
