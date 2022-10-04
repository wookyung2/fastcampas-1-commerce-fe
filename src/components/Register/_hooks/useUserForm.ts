import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export type FormDataType = {
  name: string;
  nickname: string;
  phone: string;
  email: string;
  gender: string;
  age: string;
};

export const defaultValues: FormDataType = {
  name: '',
  nickname: '',
  phone: '',
  email: '',
  gender: '',
  age: '',
};

/**
 * yup 을 이용하여 form의 유효성 검사를 도와줍니다.
 * react-hook-form과 yup을 연결해 줄 yupResolver 을 함께 사용합니다.
 *
 * validation에 반복되는 값은 상수로 빼서 관리합니다.
 *
 *
 *
 * @see https://github.com/jquense/yup#getting-started
 * @see https://yarnpkg.com/package/@hookform/resolvers#readme
 * */
export const FormSchema = yup.object().shape({
  name: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .min(2, '최소 2자 이상 입력해주세요.'),
  nickname: yup.string().required('해당 항목은 필수값 입니다.'),

  phone: yup
    .string()
    .required('정확한 핸드폰 번호를 입력해주세요.')
    .test(
      'isNumber',
      '숫자만 입력 가능합니다.',
      (val) => !Number.isNaN(Number(val)),
    )
    .min(8, '최소 길이는 8자 입니다.')
    .max(11, '최대 길이는 11자 입니다.'),
  email: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .email('이메일 주소를 정확하게 입력해주세요.'),
  gender: yup.string(),
  age: yup.string(),
});

const useUserForm = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(FormSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useUserForm;
