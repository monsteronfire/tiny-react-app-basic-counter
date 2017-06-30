import React from 'react';
import StepInput from './StepInput';
import Counter from './Counter';

class StepCounterTwo extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className='step-counter-two'>
        <Counter />
        <StepInput value={this.state.value} />
      </div>
    )
  }
}

export default StepCounterTwo;
