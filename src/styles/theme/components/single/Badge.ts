import { ComponentSingleStyleConfig } from '@chakra-ui/theme';

const variantPrimary = () => {
  return {
    bg: 'primary.500',
    color: 'white',
    borderRadius: '15px',
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 'bold',
  };
};

const variantGray = () => {
  return {
    bg: 'gray.200',
    color: 'black',
    borderRadius: '15px',
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 'regular',
  };
};

export const Badge: ComponentSingleStyleConfig = {
  baseStyle: {
    w: 'fit-content',
    h: 'fit-content',
    px: '15px',
    py: '6px',
    _focus: { boxShadow: 'none' },
  },
  defaultProps: {},
  sizes: {},
  variants: {
    primary: variantPrimary,
    gray: variantGray,
  },
};
