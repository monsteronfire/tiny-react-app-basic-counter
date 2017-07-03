import React from 'react';

class StepInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    console.log('handleChange');
    this.setState({value: event.target.value  });
  }

  render() {
    return (
      <div className='step-input'>
        <form onSubmit={this.handleSubmit}>
          <input type='number' value={this.state.value} onChange={this.handleChange} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default StepInput;
