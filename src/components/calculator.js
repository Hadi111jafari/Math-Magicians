import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './buttons';
import OutputScreen from './outputScreen';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    const { pre, operand, curr } = props;
    this.state = {
      total: pre,
      operation: operand,
      next: curr,
    };
    this.newChanges = this.newChanges.bind(this);
  }

  newChanges(bp) {
    const x = calculate(this.state, bp);
    this.setState(() => ({
      total: x.total,
      operation: x.operation,
      next: x.next,
    }));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="container">
        <OutputScreen
          name="outputScreen"
          label="0"
          pre={total}
          operand={operation}
          curr={next}
        />
        <Buttons
          btnName="zero"
          label="0"
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="one"
          label="1"
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="two"
          label="2"
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="three"
          label="3"
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="four"
          label="4"
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="five"
          label="5"
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="six"
          label="6"
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="seven"
          label="7"
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="eight"
          label="8"
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="nine"
          label="9"
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="multiply"
          label="x"
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="divide"
          label={'\u00F7'}
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="add"
          label="+"
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="subtract"
          label="-"
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="equal"
          label="="
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="decimal"
          label="."
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="all-clear"
          label="AC"
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="positive-negative"
          label="+/-"
          btnInteract={(s) => this.newChanges(s)}
        />
        <Buttons
          btnName="percent"
          label="%"
          btnInteract={(s) => this.newChanges(s)}
        />
      </div>
    );
  }
}

export default Calculator;

Calculator.propTypes = {
  pre: PropTypes.string.isRequired,
  operand: PropTypes.string.isRequired,
  curr: PropTypes.string.isRequired,
};
