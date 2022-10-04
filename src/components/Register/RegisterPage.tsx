import React from 'react';
import { FormProvider } from 'react-hook-form';

import RegisterView from './RegisterPage.view';
import useUserForm from './_hooks/useUserForm';

export default function RegisterPage() {
  const formData = useUserForm();
  return (
    <FormProvider {...formData}>
      <RegisterView formData={formData} />
    </FormProvider>
  );
}
