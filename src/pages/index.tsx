import React from 'react';

import HomePage from '@components/HomePage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

function Home() {
  return (
    <>
      <HomeLayout content={<HomePage />} />
    </>
  );
}

export default Home;
