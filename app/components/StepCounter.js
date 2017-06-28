import React from 'react';

class StepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
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
      <div className='step-counter'>
        <h1>{this.state.count}</h1>
        <div className='button-wrapper'>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    )
  }
}
