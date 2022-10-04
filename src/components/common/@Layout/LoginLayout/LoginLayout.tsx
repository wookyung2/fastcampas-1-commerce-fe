import React from 'react';

import { Container, ContainerProps } from '@chakra-ui/react';

interface LoginLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}
const LoginLayout = ({
  //
  containerProps,
  content,
}: LoginLayoutProps) => {
  return (
    <>
      <Container {...containerProps} pr="0px" pl="0px">
        {content}
      </Container>
    </>
  );
};

export default LoginLayout;
