import React from 'react';

import { MY_IMAGES } from '@image';

import { Box, Flex, Image, Text } from '@chakra-ui/react';

import StarIcon from '@components/common/@Icons/System/Star';

const LIST = [
  {
    Iamge: 'a',
    title: '오일',
    ml: '150ml',
    price: '27,000',
    reviewCount: '125',
    tags: '#올인원',
  },
];

export default function Card() {
  return (
    <Box
      borderRadius="20px"
      w="343px"
      boxShadow="0px 0px 10px rgba(26, 26, 26, 0.1)"
    >
      <Image {...MY_IMAGES.IMAGES.card.CARD} w="353px" />
      <Box pl="30px" pt="30px">
        <Text as="span" textStyle="title" pr="5px">
          바스&샴푸
        </Text>
        <Text as="span" textStyle="text" color="gray.700">
          300ml
        </Text>
        <Box>
          <Text as="span" textStyle="titleLarge" color="primary.500">
            27,000
          </Text>
          <Text as="span" textStyle="textLarge">
            원
          </Text>
        </Box>
        <StarIcon boxSize="16px" />
        <Text as="span" textStyle="title" pl="8px">
          4.3
        </Text>
        <Text as="span" textStyle="text" color="gray.700" pl="3px">
          (리뷰 125개)
        </Text>
      </Box>
    </Box>
  );
}
