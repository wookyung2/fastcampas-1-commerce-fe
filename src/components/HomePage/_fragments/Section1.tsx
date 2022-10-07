import React from 'react';

import { MY_IMAGES } from '@image';

import { Box, Flex, Image, Text } from '@chakra-ui/react';

import CallIcon from '@components/common/@Icons/System/Call';
import CallChatIcon from '@components/common/@Icons/System/CallChat';

import BadgeSlider from './BadgeSlider';
import ReviewSlider from './ReviewSlider';

export default function Section1() {
  const clickCall = () => {
    alert('준비중입니다.');
  };
  return (
    <>
      <Box>
        <Flex justify="center">
          <Box textStyle="extraLarge" mt="100px">
            <Text fontWeight="regular">
              인코스런을
              <Text as="span" fontWeight="bold">
                &nbsp; 직접 사용해본
              </Text>
            </Text>
            <Flex justify="center">
              <Text fontWeight="regular">고객님의 솔직한 리뷰</Text>
            </Flex>
          </Box>
        </Flex>
        <BadgeSlider />
        <ReviewSlider />
        <Flex justify="flex-end" p="30px 16px 20px">
          <CallChatIcon boxSize="50px" onClick={clickCall} />
        </Flex>
      </Box>
    </>
  );
}
