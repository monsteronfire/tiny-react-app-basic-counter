import React from 'react';
import StepInput from './StepInput';
import Counter from './Counter';

class StepCounterTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: 1
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value  });
  }

  render() {
    return (
      <div className='step-counter-two'>
        <Counter count={this.state.count} />
        <StepInput value={this.state.value} onChange={this.handleChange} />
      </div>
    )
  }
}

export default StepCounterTwo;
