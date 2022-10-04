import React from 'react';

import { MY_IMAGES } from '@image';

import { CONFIG } from '@config';

import { Box, Flex, Image } from '@chakra-ui/react';

import SocialButton, { SocialType } from '@components/common/SocialButton';

import { SOCIAL } from '@constants/social';

export default function LoginPage() {
  return (
    <Box w="100%" minH="812px" bg="primary.500">
      <Flex flexDir="column" alignItems="center">
        <Image {...MY_IMAGES.IMAGES.main.LOGO} my="340px" />

        {SOCIAL_LIST.map((social) => {
          return <SocialButton key={social.social} data={social} size="md" />;
        })}
      </Flex>
    </Box>
  );
}
const SOCIAL_REDIRECT_URL = `${CONFIG.DOMAIN}`;

const SOCIAL_LIST: Array<{ social: SocialType; link: string }> = [
  {
    social: 'kakao',
    link: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${SOCIAL.KAKAO_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=kakao`,
  },
];
