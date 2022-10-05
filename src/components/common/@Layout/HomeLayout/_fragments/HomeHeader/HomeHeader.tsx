import { MY_IMAGES } from '@image';

import { Container, Flex, Image } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import HomeHeaderDrawer from './_fragments/HomeHeaderDrawer';

const HomeHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onCartClick = () => {
    alert('준비중입니다.');
  };
  return (
    <>
      <Container zIndex="1">
        <Flex justify="space-between" py="28px" alignItems="center">
          <Image
            {...MY_IMAGES.IMAGES.header.MENU}
            onClick={onOpen}
            boxSize="24px"
            cursor="pointer"
          />

          <Image {...MY_IMAGES.IMAGES.main.LOGOCO} w="120px" h="16px" />

          <Image
            {...MY_IMAGES.IMAGES.header.CART}
            onClick={onCartClick}
            boxSize="24px"
            cursor="pointer"
          />
        </Flex>
      </Container>
      <HomeHeaderDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default HomeHeader;
