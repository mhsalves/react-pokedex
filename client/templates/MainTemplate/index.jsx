import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

import Style from './styles';

function MainTemplate(props) {
  return (
    <Style.Container>
      <Header />
      <Style.Content>
        {props.children}
      </Style.Content>
    </Style.Container>
  )
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default React.memo(MainTemplate);
