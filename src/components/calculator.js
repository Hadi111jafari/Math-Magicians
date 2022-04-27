import React from 'react';
import Buttons from './buttons';
import OutputScreen from './outputScreen';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <OutputScreen name="outputScreen" label="0" />
        <Buttons btnName="zero" label="0" />
        <Buttons btnName="one" label="1" />
        <Buttons btnName="two" label="2" />
        <Buttons btnName="three" label="3" />
        <Buttons btnName="four" label="4" />
        <Buttons btnName="five" label="5" />
        <Buttons btnName="six" label="6" />
        <Buttons btnName="seven" label="7" />
        <Buttons btnName="eight" label="8" />
        <Buttons btnName="nine" label="9" />
        <Buttons btnName="multiply" label="x" />
        <Buttons btnName="divide" label={'\u00F7'} />
        <Buttons btnName="add" label="+" />
        <Buttons btnName="subtract" label="-" />
        <Buttons btnName="equal" label="=" />
        <Buttons btnName="decimal" label="." />
        <Buttons btnName="all-clear" label="AC" />
        <Buttons btnName="positive-negative" label="+/-" />
        <Buttons btnName="percent" label="%" />
      </div>
    );
  }
}

export default Calculator;
