import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './Store';

const Index = () => {
  return (
    <div className="App">
      <Store>
          <App />
      </Store>
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

