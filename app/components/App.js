import React from 'react';
import Counter from './Counter';
import StepCounter from './StepCounter';
import StepCounterTwo from './StepCounterTwo';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Counter/>
        <StepCounter/>
        <StepCounterTwo/>
      </div>
    )
  }
}

export default App;
