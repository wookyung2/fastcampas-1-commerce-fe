import React from 'react';

import { Container, Flex, Stack, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Container bg="gray.800">
      <Flex pt="35px">
        <Text textStyle="title" color="white">
          INCOURSE.RUN
        </Text>
      </Flex>
      <Stack spacing="10px" pt="30px" textStyle="textSmall" color="white">
        <Text>팀명 | 개인프로젝트</Text>
        <Text>이름 | 윤우경 </Text>
        <Text>이메일 | gyong1540@naver.com</Text>
      </Stack>
      <Text textStyle="textSmall" color="white" pt="40px" pb="55px">
        ⓒINCOURSE.RUN All Right Reserved.
      </Text>
    </Container>
  );
}
