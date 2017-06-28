import React from 'react';
import Counter from './Counter';
import StepCounter from './StepCounter';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Counter/>
        <StepCounter/>
      </div>
    )
  }
}

export default App;
