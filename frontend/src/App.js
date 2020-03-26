import React /*{useState} */ from 'react';

import './Global.css';

import Routes from './routes';


function App() {
  /*UseStete - sempre vai retornar um array com duas posições [valor da variavel, valor da atualização]
  const [counter, setCounter] = useState(0);
  function incremento(){
    setCounter(counter +1);

  }*/

  return (
    <Routes/>
  );
}

export default App;
