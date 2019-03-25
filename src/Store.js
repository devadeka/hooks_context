import React, { useState } from 'react';

export const FruitContext = React.createContext('Apple');
export const VegeContext = React.createContext('Potato');

const Store = ({children}) => {
  const [fruit, setFruit] = useState('Apple');
  const [vege, setVege] = useState('Potato');

  return(
    <FruitContext.Provider value={[fruit, setFruit]}>
      <VegeContext.Provider value={[vege, setVege]}>
        {children}
      </VegeContext.Provider>
    </FruitContext.Provider>
  );
}

export default Store;