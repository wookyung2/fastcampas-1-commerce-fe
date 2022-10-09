import React from 'react';

import { Badge, Box } from '@chakra-ui/react';

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
  return (
    <Box overflowX="scroll" m="50px -16px 75px 0px" whiteSpace="nowrap">
      <Badge variant="primary">전체</Badge>
      {TAG.map((item, i) => (
        <Badge key={i} ml="10px" variant="gray">
          {item.title}
        </Badge>
      ))}
    </Box>
  );
}
