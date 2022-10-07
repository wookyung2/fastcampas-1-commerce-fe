import React from 'react';

import { MY_IMAGES } from '@image';

import { Box, BoxProps, Button, Flex, Image, Text } from '@chakra-ui/react';

import Footer from './_fragments/Footer';
import Section1 from './_fragments/Section1';
import Section2 from './_fragments/Section2';

interface HomePageContentProps extends BoxProps {}

const PRODUCT = [
  { image: '/images/main/cosmetic.png', text: '바스&샴푸' },
  { image: '/images/main/cosmetic.png', text: '오일' },
  { image: '/images/main/cosmetic.png', text: '파우더로션' },
];

function HomePageContent({ ...basisProps }: HomePageContentProps) {
  return (
    <>
      <Flex mx="16px" flexDir="column">
        <Box mt="-632px" textStyle="extraLarge">
          <Text>지속가능한</Text>
          <Text>클린&비건뷰티, 인코스런</Text>
        </Box>
        <Box mt="20px" textStyle="textLarge">
          <Text>자연과 사람에게</Text>
          <Text>책임질 수 있는 지속 가능한</Text>
          <Text>제품을 만듭니다.</Text>
        </Box>
      </Flex>
      <Flex flexDir="column" align="center">
        <Image {...MY_IMAGES.IMAGES.main.BG2} />
        <Box mt="-1334px" pb="100px" w="343px" bg="white">
          <Flex flexDir="column" align="center">
            <Text textStyle="extraLarge" pb="20px" pt="71px">
              소중한 우리 아이를 위해
            </Text>
            <Text textStyle="text">
              순수 자연유래 / 자연유래 유화제 / 자연유래
            </Text>
            <Text textStyle="text">계면활성제 99.9% 타가는 EWG 그린등급</Text>
            <Text textStyle="text">
              성분 100% 만을 사용한 건강한 화장품입니다.
            </Text>
            <Button
              mt="30px"
              bg="primary.500"
              color="white"
              w="190px"
              borderRadius="25px"
            >
              상품전체보기
            </Button>
            {PRODUCT.map((item, i) => (
              <>
                <Image key={item.image} src={item.image} mt="80px" />
                <Text key={item.text} textStyle="title" mt="10px">
                  {item.text}
                </Text>
              </>
            ))}
          </Flex>
        </Box>
      </Flex>
      <Section1 />
      <Section2 />
      <Footer />
    </>
  );
}

export default HomePageContent;
