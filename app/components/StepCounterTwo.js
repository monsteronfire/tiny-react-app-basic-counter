import React from 'react';
import StepInput from './StepInput';
import Counter from './Counter';

class StepCounterTwo extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className='step-counter-two'>
        <Counter count={this.props.count} />
        <StepInput value={this.props.value} />
      </div>
    )
  }
}

export default StepCounterTwo;
