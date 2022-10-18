import React from 'react';

import { Box, Button, Stack, Text } from '@chakra-ui/react';

import StarIcon from '@components/common/@Icons/System/Star';

const CardDetail = ({ goPay, goCart }: any) => {
  return (
    <>
      <Box
        pos="relative"
        borderRadius="20px 20px 0px 0px"
        maxW="375px"
        boxShadow="0px -3px 10px   rgba(26, 26, 26, 0.1)"
      >
        <Box
          pos="absolute"
          w="50px"
          h="5px"
          borderRadius="2.5px"
          bg="gray.200"
          top="10px"
          left="150px"
        ></Box>
        <Box pl="30px" pr="30px" pt="45px">
          <Text as="span" textStyle="titleLarge" pr="5px">
            인코스런 로션
          </Text>
          <Text as="span" textStyle="textLarge" color="gray.700">
            120ml
          </Text>
          <Box pt="14px">
            <Text as="span" textStyle="titleLarge" color="primary.500">
              27,000
            </Text>
            <Text as="span" textStyle="textLarge">
              원
            </Text>
          </Box>
          <Box textStyle="titleSmall">
            <Text as="span">3만원 이상 구매시</Text>
            <Text as="span" color="primary.500">{`\n무료배송`}</Text>
          </Box>

          <Text textStyle="text" py="10px">
            순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를
            위한 고보습 로션
          </Text>
          <StarIcon boxSize="16px" />
          <Text as="span" textStyle="title" pl="8px">
            4.3
          </Text>
          <Text as="span" textStyle="text" color="gray.700" pl="3px">
            (리뷰 125개)
          </Text>
        </Box>
      </Box>

      <Stack
        direction="column"
        spacing="10px"
        px="16px"
        pt="15px"
        pb="4px"
        bg="white"
      >
        <Button variant="outline" onClick={goCart}>
          장바구니
        </Button>
        <Button
          variant="primary"
          colorScheme="primary"
          size="lg"
          onClick={goPay}
        >
          바로구매
        </Button>
      </Stack>
    </>
  );
};

export default CardDetail;
