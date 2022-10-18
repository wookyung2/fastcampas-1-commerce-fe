import React from 'react';

import { MY_IMAGES } from '@image';

import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';

import ArrowDownIcon from '@components/common/@Icons/System/ArrowDown';
import ArrowUpIcon from '@components/common/@Icons/System/ArrowUp';

import CardDetail from './_fragments/CardDetail';

export default function ProductDetail() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDown, setIsDown] = React.useState(false);

  const onOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const onDown = () => {
    setIsDown((prev) => !prev);
  };
  return (
    <>
      <Box mx="16px" h="300px" bg="red">
        상품 이미지
      </Box>
      <CardDetail />
      <Stack
        direction="row"
        justify="center"
        alignItems="center"
        spacing="50px"
        h="80px"
        textStyle="text"
        color="gray.600"
      >
        <Text>상세정보</Text>
        <Text>구매정보</Text>
        <Text>리뷰(78)</Text>
      </Stack>
      <Box
        maxH={isOpen ? '100%' : '477px'}
        overflow={isOpen ? 'visible' : 'hidden'}
      >
        <Image {...MY_IMAGES.IMAGES.product.LOTION} />
      </Box>
      <Box bg="gray.100">
        <Button
          size="lg"
          w="343px"
          color="black"
          border="1px solid black"
          textStyle="button"
          mx="16px"
          mt="30px"
          onClick={onOpen}
        >
          {isOpen ? (
            <>
              상세보기 접기
              <ArrowDownIcon boxSize="24px" />
            </>
          ) : (
            <>
              상세정보 펼쳐보기
              <ArrowUpIcon boxSize="24px" />
            </>
          )}
        </Button>
      </Box>
      <Flex
        justify="space-between"
        pt="45.5px"
        px="16px"
        pb="30.5px"
        onClick={onDown}
        cursor="pointer"
        bg="gray.100"
      >
        <Text textStyle="title"> 주문 및 배송 안내</Text>
        {isDown ? (
          <ArrowUpIcon boxSize="24px" />
        ) : (
          <ArrowDownIcon boxSize="24px" />
        )}
      </Flex>
      <Flex
        display={isDown ? 'flex' : 'none'}
        flexDir="column"
        px="16px"
        textStyle="text"
        bg="gray.100"
      >
        <Text textStyle="title" pb="20px">
          [주문 및 배송 안내]
        </Text>
        <Text pb="10px">배송방법 : 인코스런 택배</Text>
        <Text pb="10px">배송지역 : 전국</Text>
        <Text>배송비용 : 단품 상품 구매 시 3,000배송비 발생</Text>
        <Text pl="67px">
          그외 단품 묶음 구매의 경우 30,000원 이상 구매 시 무료배송
        </Text>
      </Flex>
    </>
  );
}
