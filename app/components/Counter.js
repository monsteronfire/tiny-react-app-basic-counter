import React from 'react';

class Counter extends React.Component {
  render() {
    return (
      <div className='counter'>
        <h1>{this.props.count}</h1>
        <div className='button-wrapper'>
          <button onClick={this.props.increment}>+</button>
          <button onClick={this.props.decrement}>-</button>
        </div>
      </div>
    )
  }
}

export default Counter;
