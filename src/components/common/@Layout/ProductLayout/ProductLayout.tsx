import React from 'react';

import { Container, ContainerProps } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

import HomeFooter from '../HomeLayout/_fragments/HomeFooter';
import HomeHeader from '../HomeLayout/_fragments/HomeHeader';

interface ProductLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}

const ProductLayout = ({
  //
  header = <HomeHeader />,
  footer = <HomeFooter />,
  containerProps,
  content,
}: ProductLayoutProps) => {
  return (
    <>
      {header}
      <Container {...containerProps}>{content}</Container>
      {footer}
    </>
  );
};

export default ProductLayout;
