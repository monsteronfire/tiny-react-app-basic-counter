import React from 'react';

class Counter extends React.Component {
  render() {
    return (
      <div className='counter'>
        <h1>{this.props.count}</h1>
      </div>
    )
  }
}

export default Counter;
