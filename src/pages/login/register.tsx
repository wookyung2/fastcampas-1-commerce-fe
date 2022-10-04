import React from 'react';

import RegisterPage from '@components/Register/RegisterPage';
import RegisterLayout from '@components/common/@Layout/RegisterLayout';

export default function register() {
  return <RegisterLayout content={<RegisterPage />} />;
}
