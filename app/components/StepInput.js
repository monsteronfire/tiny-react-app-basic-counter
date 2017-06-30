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
      <div className='step-input' onSubmit=''>
        <form>
          <input type='number' onChange='' />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default StepInput;
