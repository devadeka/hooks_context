import React, {useState, useContext} from 'react';
import { FruitContext } from './index';
import './App.css';

const App = () => {

  const [fruit, setFruit] = useContext(FruitContext);

  return (
      <header className="App-header">
          Fruit of the day is {fruit}
      </header>
  );
}

export default App;
