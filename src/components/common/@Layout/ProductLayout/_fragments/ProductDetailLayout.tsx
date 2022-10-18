import React from 'react';

import { Container, ContainerProps } from '@chakra-ui/react';

import HomeFooter from '../../HomeLayout/_fragments/HomeFooter';
import HomeHeader from '../../HomeLayout/_fragments/HomeHeader';

interface ProductLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}

const ProductDetailLayout = ({
  //
  header = <HomeHeader />,
  footer = <HomeFooter />,
  containerProps,
  content,
}: ProductLayoutProps) => {
  return (
    <>
      {header}
      <Container {...containerProps} px="-16px">
        {content}
      </Container>
      {footer}
    </>
  );
};

export default ProductDetailLayout;
