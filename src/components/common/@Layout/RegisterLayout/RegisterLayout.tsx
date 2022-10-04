import React from 'react';

import { Container, ContainerProps } from '@chakra-ui/react';

interface RegisterLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}
const RegisterLayout = ({
  //
  containerProps,
  content,
}: RegisterLayoutProps) => {
  return (
    <>
      <Container {...containerProps} pr="16px" pl="16px" border="1px solid red">
        {content}
      </Container>
    </>
  );
};

export default RegisterLayout;
