import React from 'react';

class BasicCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({count: this.state.count + 1});
  }

  decrement() {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div className='basic-counter'>
        <h1>{this.state.count}</h1>
        <div className='button-wrapper'>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    )
  }
}

export default BasicCounter;
