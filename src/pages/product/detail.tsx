import React from 'react';

import ProductDetail from '@components/ProductPage/ProductDetail';
import ProductDetailLayout from '@components/common/@Layout/ProductLayout/_fragments/ProductDetailLayout';

export default function index() {
  return <ProductDetailLayout content={<ProductDetail />} />;
}
