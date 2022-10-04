import React from 'react';
import { UseFormReturn, useFormContext } from 'react-hook-form';

import { MY_IMAGES } from '@image';

import { BoxProps, Flex, Image, Text } from '@chakra-ui/react';

import FormHelper from '@components/common/FormHelper';
import Input from '@components/common/Input';

import { FormDataType } from './_hooks/useUserForm';

interface RegisterPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}

const RegisterView = ({ formData, ...basisProps }: RegisterPageProps) => {
  const { formState } = useFormContext();
  const INFO_LIST = [
    {
      label: '이름',
      errorText: formState.errors.name?.message,
      fieldName: 'name',
    },
    {
      label: '닉네임',
      errorText: formState.errors.nickname?.message,
      fieldName: 'nickname',
    },
    {
      label: '핸드폰번호',
      errorText: formState.errors.phone?.message,
      fieldName: 'phone',
    },
    {
      label: '이메일',
      errorText: formState.errors.email?.message,
      fieldName: 'email',
    },
  ];
  return (
    <>
      <Flex h="80px" align="center">
        <Image {...MY_IMAGES.IMAGES.main.LOGOCO} w="120px" h="16px" />
      </Flex>
      <Text textStyle="extraLarge" pb="60px">
        회원가입
      </Text>
      <Text textStyle="title">회원정보입력</Text>
      <Image {...MY_IMAGES.IMAGES.main.PROFILE} py="40px" />
      {INFO_LIST.map((item) => (
        <FormHelper
          key={item.label}
          mb="40px"
          label={item.label}
          errorText={item.errorText}
        >
          <Input borderRadius="100px" fieldName={item.fieldName} />
        </FormHelper>
      ))}

      <Text textStyle="title" mb="40px">
        추가정보입력(선택)
      </Text>
    </>
  );
};
export default RegisterView;
