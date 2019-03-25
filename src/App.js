import React, { useContext } from 'react';
import { FruitContext } from './Store';
import './App.css';

const App = () => {

  const [fruit] = useContext(FruitContext);

  return (
      <header className="App-header">
          Fruit of the day is {fruit}
      </header>
  );
}

export default App;
