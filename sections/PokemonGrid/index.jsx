import React from 'react';
import PropTypes from 'prop-types';

import Alert from '../../components/Alert';

import Style from './styles';
import data from './data';

function PokemonGrid(props) {
  if (!props.items[0]) {
    return <Alert description={data.emptyDescription} />;
  }

  return (
    <Style.Container>
      {
        props.items.map((item) => (
          <Style.Item key={item.number}>
            <Style.Image src={item.imageSrc} alt={data.getImageAlt(item.name)} />
            <Style.DescriptionContent>
              <Style.Label>{item.name}</Style.Label>
              <Style.Label>{data.getNumberLabel(item.number)}</Style.Label>
            </Style.DescriptionContent>
          </Style.Item>
        ))
      }
    </Style.Container>
  )
}

PokemonGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    imageSrc: PropTypes.string.isRequired,
  }))
}

PokemonGrid.defaultProps = {
  items: [],
}

export default React.memo(PokemonGrid);
