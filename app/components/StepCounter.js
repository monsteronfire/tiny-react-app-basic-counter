import React from 'react';

class StepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: 1
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  increment() {
    this.setState(() => {
      return {
        count: this.state.count + (parseInt(this.state.value))
      }
    });
  }

  decrement() {
    this.setState(() => {
      return {
        count: this.state.count - (parseInt(this.state.value))
      }
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('hello');
  }

  render() {
    return (
      <div className='step-counter'>
        <h1>{this.state.count}</h1>
        <div className='button-wrapper'>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type='number' value={this.state.value} onChange={this.handleChange} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default StepCounter;
