import { ComponentSingleStyleConfig } from '@chakra-ui/react';
import { StyleObjectOrFn } from '@chakra-ui/styled-system';

import { defaultValues } from './../../../../components/Register/_hooks/useUserForm';

type AccessibleColor = {
  bg?: string;
  color?: string;
  hoverBg?: string;
  activeBg?: string;
  border?: string;
};

const accessibleColorMap: { [key: string]: AccessibleColor } = {
  kakao: {
    bg: 'kakao.500',
    color: '#1A1A1A',
    hoverBg: 'kakao.600',
    activeBg: 'kakao.700',
  },
  naver: {
    bg: 'naver.500',
    color: '#FFFFFF',
    hoverBg: 'naver.600',
    activeBg: 'naver.700',
  },
  facebook: {
    bg: 'facebook.500',
    color: '#FFFFFF',
    hoverBg: 'facebook.600',
    activeBg: 'facebook.700',
  },
  apple: {
    bg: 'apple.500',
    color: '#FFFFFF',
    hoverBg: 'apple.600',
    activeBg: 'apple.700',
  },
  google: {
    bg: 'google.500',
    color: '#808080',
    hoverBg: 'google.600',
    activeBg: 'google.700',
    border: '#DDDDDD',
  },
};

const buttonDisabled = {
  opacity: 1,
  bg: 'gray.400',
  borderColor: 'gray.400',
  color: 'white',
};

const variantGray: StyleObjectOrFn = ({ colorScheme: c }) => {
  const {
    bg = 'gray.400',
    color = 'white',
    hoverBg = 'gray.500',
    activeBg = 'gray.600',
    border = 'gray.400',
  } = accessibleColorMap[c] ?? {};

  const background = bg;
  const borderColor = border;

  return {
    bg: background,
    color: color,
    borderWidth: 1,
    borderColor: borderColor,
    _disabled: buttonDisabled,
    _hover: {
      bg: hoverBg,
      borderColor: 'gray.500',
      _disabled: buttonDisabled,
    },
    _active: { bg: activeBg, borderColor: 'gray.500' },
  };
};
const variantGrayOutline: StyleObjectOrFn = ({ colorScheme: c }) => {
  const {
    bg = 'white',
    color = 'gray.500',
    hoverBg = 'white',
    activeBg = 'white',
    border = 'gray.500',
  } = accessibleColorMap[c] ?? {};

  const background = bg;
  const borderColor = border;

  return {
    bg: background,
    color: color,
    borderWidth: 1,
    borderColor: borderColor,
    _disabled: buttonDisabled,
    _hover: {
      bg: hoverBg,
      borderColor: 'gray.300',
      _disabled: buttonDisabled,
    },
    _active: { bg: activeBg, borderColor: 'gray.300' },
  };
};

const variantOutline: StyleObjectOrFn = ({ colorScheme: c }) => {
  const {
    bg = 'white',
    color = 'primary.500',
    hoverBg = 'white',
    activeBg = 'white',
    border = 'primary.500',
  } = accessibleColorMap[c] ?? {};

  const background = bg;
  const borderColor = border;

  return {
    bg: background,
    color: color,
    borderWidth: 1,
    borderColor: borderColor,
    _disabled: buttonDisabled,
    _hover: {
      bg: hoverBg,
      borderColor: 'primary.300',
      _disabled: buttonDisabled,
    },
    _active: { bg: activeBg, borderColor: 'primary.300' },
  };
};

const variantSolid: StyleObjectOrFn = ({ colorScheme: c }) => {
  if (c === 'gray') {
    const bg = 'gray.100';
    return {
      bg,
      _hover: {
        bg: 'gray.100',
        _disabled: {
          bg,
        },
      },
      _active: { bg: 'gray.300' },
    };
  }
  const {
    bg = `${c}.500`,
    color = 'white',
    hoverBg = `${c}.400`,
    activeBg = `${c}.400`,
    border = `${c}.500`,
  } = accessibleColorMap[c] ?? {};

  const background = bg;
  const borderColor = border;

  return {
    bg: background,
    color: color,
    borderWidth: 1,

    borderColor: borderColor,
    _disabled: buttonDisabled,
    _hover: {
      bg: hoverBg,
      borderColor: hoverBg,
      _disabled: buttonDisabled,
    },
    _active: { bg: activeBg, borderColor: activeBg },
  };
};

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    w: 'fit-content',
    h: 'fit-content',
    borderRadius: '25px',
    _focus: { boxShadow: 'none' },
  },
  defaultProps: {
    variant: 'primary',
    size: 'lg',
  },
  variants: {
    primary: variantSolid,
    outline: variantOutline,
    gray: variantGray,
    grayOutline: variantGrayOutline,
  },
  sizes: {
    lg: {
      maxW: '372px',
      w: '100%',
      h: '50px',
      fontSize: ['16px'],
      lineHeight: ['28px'],
      fontWeight: ['bold'],
    },
    md: {
      maxW: '372px',
      w: '100%',
      h: '50px',
      fontSize: ['12px'],
      lineHeight: ['18px'],
      fontWeight: ['bold'],
    },
  },
};
