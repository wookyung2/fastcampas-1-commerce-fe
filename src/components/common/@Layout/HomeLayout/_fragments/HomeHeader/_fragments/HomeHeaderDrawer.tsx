import Link from 'next/link';

import { MY_IMAGES } from '@image';

import {
  Box,
  Button,
  ChakraProps,
  DrawerHeader,
  DrawerProps,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';

interface HomeHeaderDrawerProps extends Omit<DrawerProps, 'children'> {
  bodyProps?: ChakraProps;
}

const HomeHeaderDrawer = ({
  bodyProps,
  ...basisProps
}: HomeHeaderDrawerProps) => {
  return (
    <Drawer placement="left" size="xs" {...basisProps}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody //
          {...bodyProps}
          p="0"
        >
          <DrawerCloseButton //
            w="40px"
            h="40px"
            top="28px"
            mr="20px"
            onClick={basisProps.onClose}
          />
          <DrawerHeader textStyle="titleLarge" p="80px 16px 46px 16px">
            카테고리
          </DrawerHeader>
          {MENU.map(({ label, route }) => (
            <Link key={label} href={route} passHref>
              <Box
                borderTop="1px solid"
                borderTopColor="gray.200"
                py="16px"
                borderBottom={label === '마이페이지' ? '1px solid' : 'none'}
                borderBottomColor={label === '마이페이지' ? 'gray.200' : 'none'}
              >
                <Text px="16px" textStyle="title" cursor="pointer">
                  {label}
                </Text>
              </Box>
            </Link>
          ))}
        </DrawerBody>

        <Flex pb="25px" pl="16px">
          <Image {...MY_IMAGES.IMAGES.header.LOGOUT} />
          <Text
            textStyle="titleLarge"
            cursor="pointer"
            onClick={() => console.log('로그아웃')}
          >
            로그아웃
          </Text>
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};

export default HomeHeaderDrawer;

const MENU = [
  { label: '홈', route: '/' },
  { label: '상품보기', route: '/' },
  { label: '마이페이지', route: '/' },
];
