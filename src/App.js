import React from 'react';
import ReactDOM from 'react-dom';

// first entry point of the application
const App = () => {
  return (
    <React.Fragment>
      <div className='root'>
        <h1>Place holder for App</h1>
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
