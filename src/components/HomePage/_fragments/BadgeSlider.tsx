import React from 'react';
import Slider from 'react-slick';

import { Badge, Flex, HStack } from '@chakra-ui/react';

const TAG = [
  { title: '바스&샴푸' },
  { title: '오일' },
  { title: '로션' },
  { title: '크림1' },
  { title: '크림2' },
  { title: '크림3' },
  { title: '크림4' },
  { title: '크림5' },
  { title: '크림6' },
];
export default function BadgeSlider() {
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
    <Slider {...settings}>
      <HStack>
        <Flex p="50px 16px 76px" overflow="hidden" w="375px" cursor="pointer">
          <Badge variant="primary">전체</Badge>
          {TAG.map((item, i) => (
            <Badge key={i} variant="gray" ml="10px">
              {item.title}
            </Badge>
          ))}
        </Flex>
      </HStack>
    </Slider>
  );
}
