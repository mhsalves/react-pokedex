import React from 'react';

import MainTemplate from '../templates/MainTemplate';
import PokemonGrid from '../sections/PokemonGrid';
import PageTags from '../components/PageTags';

import data from '../pageData/home';

const mock = (new Array(120)).fill({
  name: 'Ditto',
  imageSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg',
  number: 132,
});

function Home() {
  return (
    <MainTemplate>
      <PageTags title={data.title} description={data.description} />
      <PokemonGrid items={mock} />
    </MainTemplate>
  );
}

export default Home;