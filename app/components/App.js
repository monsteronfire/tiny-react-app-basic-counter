import React from 'react';
import BasicCounter from './BasicCounter';
import StepCounter from './StepCounter';
import StepCounterTwo from './StepCounterTwo';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <BasicCounter/>
        <StepCounter/>
        <StepCounterTwo/>
      </div>
    )
  }
}

export default App;
