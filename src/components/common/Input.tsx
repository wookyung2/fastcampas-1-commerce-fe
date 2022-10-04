import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { Input as InputComponent, InputProps } from '@chakra-ui/react';

interface IProps extends InputProps {
  fieldName: string;
  validate?: boolean;
}

const Input = ({ fieldName, validate, ...props }: IProps) => {
  const { register, formState } = useFormContext();

  const validateVariant = useMemo(() => {
    if (validate) {
      if (formState.errors[fieldName]) return 'error';
      return 'success';
    }
    return;
  }, [fieldName, formState, validate]);

  return (
    <InputComponent
      variant={validateVariant}
      {...props}
      {...register(fieldName)}
      colorScheme="primary"
      autoComplete="off"
      spellCheck={false}
    />
  );
};

export default Input;
