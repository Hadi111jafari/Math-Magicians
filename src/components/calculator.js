import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './buttons';
import OutputScreen from './outputScreen';
import calculate from '../logic/calculate';

const Calculator = (props) => {
  const { pre, operand, curr } = props;
  const [total, setTotal] = React.useState(pre);
  const [operation, setOperation] = React.useState(operand);
  const [next, setNext] = React.useState(curr);
  const newChanges = (bp) => {
    const x = calculate(
      {
        total,
        operation,
        next,
      },
      bp,
    );
    setTotal(x.total);
    setOperation(x.operation);
    setNext(x.next);
  };

  return (
    <div className="container">
      <OutputScreen
        name="outputScreen"
        pre={total}
        operand={operation}
        curr={next}
      />
      <Buttons btnName="zero" label="0" btnInteract={(s) => newChanges(s)} />
      <Buttons btnName="one" label="1" btnInteract={(s) => newChanges(s)} />
      <Buttons btnName="two" label="2" btnInteract={(s) => newChanges(s)} />
      <Buttons btnName="three" label="3" btnInteract={(s) => newChanges(s)} />
      <Buttons btnName="four" label="4" btnInteract={(s) => newChanges(s)} />
      <Buttons btnName="five" label="5" btnInteract={(s) => newChanges(s)} />
      <Buttons btnName="six" label="6" btnInteract={(s) => newChanges(s)} />
      <Buttons btnName="seven" label="7" btnInteract={(s) => newChanges(s)} />
      <Buttons btnName="eight" label="8" btnInteract={(s) => newChanges(s)} />
      <Buttons btnName="nine" label="9" btnInteract={(s) => newChanges(s)} />
      <Buttons
        btnName="multiply"
        label="x"
        btnInteract={(s) => newChanges(s)}
      />
      <Buttons
        btnName="divide"
        label={'\u00F7'}
        btnInteract={(s) => newChanges(s)}
      />
      <Buttons btnName="add" label="+" btnInteract={(s) => newChanges(s)} />
      <Buttons
        btnName="subtract"
        label="-"
        btnInteract={(s) => newChanges(s)}
      />
      <Buttons btnName="equal" label="=" btnInteract={(s) => newChanges(s)} />
      <Buttons btnName="decimal" label="." btnInteract={(s) => newChanges(s)} />
      <Buttons
        btnName="all-clear"
        label="AC"
        btnInteract={(s) => newChanges(s)}
      />
      <Buttons
        btnName="positive-negative"
        label="+/-"
        btnInteract={(s) => newChanges(s)}
      />
      <Buttons btnName="percent" label="%" btnInteract={(s) => newChanges(s)} />
    </div>
  );
};

export default Calculator;

Calculator.propTypes = {
  pre: PropTypes.string.isRequired,
  operand: PropTypes.string.isRequired,
  curr: PropTypes.string.isRequired,
};
