import React, {useState} from 'react';
import './App.css';

const App = () => {

  const [fruit, setFruit] = useState('Apple');

  return (
    <div className="App">
      <header className="App-header">
          Fruit of the day is {fruit}
      </header>
    </div>
  );
}

export default App;
