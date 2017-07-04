import React from 'react';

class CountButton extends React.Component {
  render() {
    return (
      <div className='button-wrapper'>
        <button onClick={this.props.onClick}>{this.props.sign}</button>
      </div>
    )
  }
}

export default CountButton;
