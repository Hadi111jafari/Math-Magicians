import PropTypes from 'prop-types';
import React from 'react';

class Buttons extends React.Component {
  constructor({ btnName, label }) {
    super({ btnName, label });
    this.btnName = btnName;
    this.label = label;
  }

  render() {
    return (<button type="button" id={this.btnName}>{this.label}</button>);
  }
}

export default Buttons;

Buttons.propTypes = {
  btnName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
