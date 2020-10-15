import React, { useState } from 'react';
import './App.css';
import Dia from './data/dia';
import Mes from './data/mes';
import Cor from './data/cor';

const createDropdown = obj => {
  const arr = [];

  for(let prop in obj) {
    arr.push(<option key={prop} value={prop}>{prop}</option>)
  }

  return arr;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function App() {

  const [dia, setDia] = useState('1');
  const [mes, setMes] = useState('1');
  const [cor, setCor] = useState('branca');
  const [xingamento, setXingamento] = useState('');
  
  const generateCurse = (e) => {
    e.preventDefault();
    setXingamento(`${Dia[dia]} ${Mes[mes]} ${Cor[cor]}`);
  }

  const generateRandomCurse = () => {
    const diaRndNum = getRandomInt(1, 32);
    const mesRndNum = getRandomInt(1, 13);
    const corRndNum = getRandomInt(0, 10);
  
    setXingamento(`${Dia[diaRndNum]} ${Mes[mesRndNum]} ${Cor[Object.keys(Cor)[corRndNum]]}`);
  }

  const onDayChange = (e) => {
    setDia(e.target.value);
  }

  const onMesChange = (e) => {
    setMes(e.target.value);
  }

  const onCorChange = (e) => {
    setCor(e.target.value);
  }

  return (
    <div className="App">
      <h1>Xingamento da Dani Generator</h1>
      <main>
        <form onSubmit={generateCurse}>
          <div>
            <label>Escolha um dia:</label>
            <select onChange={onDayChange}>
              {createDropdown(Dia)}
            </select>
          </div>
          <div>
            <label>Escolha um mês:</label>
            <select onChange={onMesChange}>
              {createDropdown(Mes)}
            </select>
          </div>
          <div>
            <label>Escolha uma cor de camiseta:</label>
            <select onChange={onCorChange}>
              {createDropdown(Cor)}
            </select>
          </div>
          <input type="submit" value="Gerar xingamento" />
        </form>

        <button onClick={generateRandomCurse}>Me xinga!</button>

        <p>{xingamento}</p>

      </main> 
    </div>
  );
}

export default App;
