import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const FruitContext = React.createContext('Apple');

const Index = () => {
  const [fruit, setFruit] = useState('Apple');

  return (
      <div className="App">
      <FruitContext.Provider value={[fruit, setFruit]}>
          <App />
      </FruitContext.Provider>
      </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

