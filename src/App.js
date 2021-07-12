import React, { useState, useRef } from 'react';
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
  const [mes, setMes] = useState('janeiro');
  const [cor, setCor] = useState('branca');
  const [xingamento, setXingamento] = useState();

  const quoteRef = useRef(null)
  
  const generateCurse = () => {
    setXingamento(`${Dia[dia]} ${Mes[mes]} ${Cor[cor]}`);
    if (quoteRef && quoteRef.current) {
      quoteRef.current.scrollIntoView();
    }
  }

  const generateRandomCurse = () => {
    const diaRndNum = getRandomInt(1, 32);
    const mesRndNum = getRandomInt(1, 13);
    const corRndNum = getRandomInt(0, 10);
  
    setXingamento(`${Dia[diaRndNum]} ${Mes[Object.keys(Mes)[mesRndNum - 1]]} ${Cor[Object.keys(Cor)[corRndNum]]}`);
    if (quoteRef && quoteRef.current) {
      quoteRef.current.scrollIntoView();
    }
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
      <h1 className="title">Xingamento da Dani Generator</h1>
      <main>
        <div>
          <div className="form-group">
            <div className="selection-container">
              <label>Escolha um dia:</label>
              <select onChange={onDayChange}>
                {createDropdown(Dia)}
              </select>
            </div>
            <div className="selection-container">
              <label>Escolha um mês:</label>
              <select onChange={onMesChange}>
                {createDropdown(Mes)}
              </select>
            </div>
            <div className="selection-container">
              <label>Escolha uma cor de camiseta:</label>
              <select onChange={onCorChange}>
                {createDropdown(Cor)}
              </select>
            </div>
          </div>
          <div className="button__container">
            <input className="button button-main" type="submit" value="Gerar xingamento" onClick={generateCurse} />
            <button className="button button-secondary" onClick={generateRandomCurse}>Me xinga!</button>
          </div>
        </div>

        {xingamento && <blockquote ref={quoteRef} className="quote">{xingamento}</blockquote>}

      </main>
    </div>
  );
}

export default App;
