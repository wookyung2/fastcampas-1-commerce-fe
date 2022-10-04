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
      <Container {...containerProps} border="1px solid red">
        {content}
      </Container>
    </>
  );
};

export default LoginLayout;
