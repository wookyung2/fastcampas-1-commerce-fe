import React from 'react';

import { Stack } from '@chakra-ui/react';

import Card from './_fragments/Card';
import CardDetail from './_fragments/CardDetail';

export default function ProductPage() {
  const goPay = () => {
    alert('준비중입니다.');
  };

  const goCart = () => {
    alert('준비중입니다.');
  };
  return (
    <>
      <Stack direction="column" spacing="30px" pt="40px" pb="80px">
        <Card goPay={goPay} goCart={goCart} />
        <CardDetail goPay={goPay} goCart={goCart} />
      </Stack>
    </>
  );
}
