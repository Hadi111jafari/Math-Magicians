import PropTypes from 'prop-types';
import React from 'react';

class OutputScreen extends React.Component {
  constructor({ name, label }) {
    super({ name, label });
    this.name = name;
    this.label = label;
  }

  render() {
    return (<div id={this.name}>{this.label}</div>);
  }
}

export default OutputScreen;

OutputScreen.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
