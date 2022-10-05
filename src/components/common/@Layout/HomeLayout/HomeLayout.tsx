import React from 'react';

import { MY_IMAGES } from '@image';

import { Container, ContainerProps, Image } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

import HomeHeader from './_fragments/HomeHeader';

interface HomeLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}

const HomeLayout = ({
  //
  header = <HomeHeader />,
  footer,
  containerProps,
  content,
}: HomeLayoutProps) => {
  return (
    <>
      {header}
      <Container px="0px" pt={LAYOUT.HEADER.HEIGHT} {...containerProps}>
        <Image
          mt="-160px"
          {...MY_IMAGES.IMAGES.main.BACKGROUND}
          w="375px"
          h="782px"
        />

        {content}
      </Container>
      {footer}
    </>
  );
};

export default HomeLayout;
