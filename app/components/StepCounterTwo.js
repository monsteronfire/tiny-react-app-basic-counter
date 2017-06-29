import React from 'react';
import StepInput from './StepInput';
import Counter from './Counter';

class StepCounterTwo extends React.Component {
  render() {
    return (
      <div className='step-counter-two'>
        <Counter />
        <StepInput />
      </div>
    )
  }
}

export default StepCounterTwo;
