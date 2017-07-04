import React from 'react';

class StepInput extends React.Component {
  render() {
    return (
      <div className='step-input'>
        <form>
          <input type='number' value={this.props.value} onChange={this.props.onChange} />
        </form>
      </div>
    )
  }
}

export default StepInput;
