import React from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';

import GoUpIcon from '@components/common/@Icons/System/GoUp';
import InstaIcon from '@components/common/@Icons/System/Insta';

export default function Section2() {
  return (
    <>
      <Box bg="linear-gradient(90deg, #FF710B 0%, #FFAB2E 100%)">
        <Flex direction="column" alignItems="center">
          <Text textStyle="titleLarge" color="white" pt="83px">
            인코스런에 대해 더 궁금하신가요?
          </Text>
          <Text textStyle="text" color="white" textAlign="center" pt="10px">
            인스타그램을 방문하시면 더욱 다양한
            <br /> 인코스런의 이야기를 확인하실 수 있어요!
          </Text>
          <Flex alignItems="center" pt="12px">
            <InstaIcon boxSize="24px" />
            <Text textStyle="button" color="white">
              INCOURSE.RUN
            </Text>
          </Flex>
        </Flex>
        <Flex justify="flex-end" p="12px 16px 20px">
          <GoUpIcon boxSize="50px" onClick={() => window.scrollTo(0, 0)} />
        </Flex>
      </Box>
    </>
  );
}
