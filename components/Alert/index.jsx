import React from 'react';
import PropTypes from 'prop-types';

import Style from './styles';

function Alert(props) {
  return (
    <Style.Container>
      {props.description}
    </Style.Container>
  )
}

Alert.propTypes = {
  description: PropTypes.string.isRequired,
}

export default React.memo(Alert);