import { MY_IMAGES } from '@image';

import { Container, Flex, Image } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import { HOME_HEADER_VARIANTS, HomeHeaderVariantType } from './HomeHeader.data';
import HomeHeaderDrawer from './_fragments/HomeHeaderDrawer';

interface HomeHeaderProps {
  variant?: HomeHeaderVariantType;
}

const HomeHeader = ({ variant = 'light' }: HomeHeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cssByVariant = HOME_HEADER_VARIANTS[variant];

  return (
    <>
      <Container>
        <Flex justify="space-between" py="28px">
          <Image
            {...MY_IMAGES.IMAGES.header.MENU}
            onClick={onOpen}
            boxSize="24px"
          />

          <Image {...MY_IMAGES.IMAGES.header.CART} boxSize="24px" />
        </Flex>
      </Container>
      <HomeHeaderDrawer
        isOpen={isOpen}
        onClose={onClose}
        bodyProps={cssByVariant.drawer}
      />
    </>
  );
};

export default HomeHeader;
