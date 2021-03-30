import React from 'react';

import Style from './styles';
import data from './data';

function Header() {
  return (
    <Style.Container>
      <Style.Title>{data.title}</Style.Title>
    </Style.Container>
  )
}

export default React.memo(Header);
