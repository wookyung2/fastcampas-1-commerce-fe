import React from 'react';

import LoginPage from '@components/LoginPage';
import LoginLayout from '@components/common/@Layout/LoginLayout';

export default function Login() {
  return <LoginLayout content={<LoginPage />} />;
}
