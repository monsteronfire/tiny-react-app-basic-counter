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
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value  });
  }

  increment() {
    this.setState((prev) => {
      return {
        count: prev.count + 1
      }
    });
  }

  decrement() {
    this.setState((prev) => {
      return {
        count: prev.count -1
      }
    });
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
