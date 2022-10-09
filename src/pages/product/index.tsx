import React from 'react';

import ProductPage from '@components/ProductPage';
import ProductLayout from '@components/common/@Layout/ProductLayout';

export default function index() {
  return <ProductLayout content={<ProductPage />} />;
}
