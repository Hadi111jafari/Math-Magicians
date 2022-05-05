import PropTypes from 'prop-types';
import React from 'react';

const OutputScreen = (props) => {
  const {
    name, pre, curr, operand,
  } = props;
  return (
    <div id={name}>
      <span>{pre}</span>
      <span>{operand}</span>
      <span>{curr}</span>
    </div>
  );
};

export default OutputScreen;

OutputScreen.propTypes = {
  name: PropTypes.string.isRequired,
  pre: PropTypes.string.isRequired,
  curr: PropTypes.string.isRequired,
  operand: PropTypes.string.isRequired,
};
