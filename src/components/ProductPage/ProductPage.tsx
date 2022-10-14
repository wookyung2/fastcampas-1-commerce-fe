import React from 'react';

import { Stack } from '@chakra-ui/react';

import Card from './_fragments/Card';

export default function ProductPage() {
  return (
    <>
      <Stack direction="column" spacing="30px" pt="40px" pb="80px">
        <Card />
        <Card />
      </Stack>
    </>
  );
}
