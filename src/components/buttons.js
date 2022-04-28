import PropTypes from 'prop-types';
import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.btnInteract = this.btnInteract.bind(this);
  }

  btnInteract() {
    const { btnInteract, label } = this.props;
    btnInteract(label);
  }

  render() {
    const { btnName, label } = this.props;
    return (
      <button type="button" id={btnName} onClick={this.btnInteract}>
        {label}
      </button>
    );
  }
}

export default Buttons;

Buttons.propTypes = {
  btnName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  btnInteract: PropTypes.func.isRequired,
};
