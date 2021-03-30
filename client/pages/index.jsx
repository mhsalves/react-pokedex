import React from 'react';

import MainTemplate from '../templates/MainTemplate';
import PageTags from '../components/PageTags';

import data from '../pageData/home';

function Home() {
  return (
    <MainTemplate>
      <PageTags title={data.title} description={data.description} />
      Home
    </MainTemplate>
  );
}

export default Home;