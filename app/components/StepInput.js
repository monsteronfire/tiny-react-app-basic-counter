import React from 'react';

class StepInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  render() {
    return (
      <div className='step-input'>
        <form>
          <input type='number' />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default StepInput;
